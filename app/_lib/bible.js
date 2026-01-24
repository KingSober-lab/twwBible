"use client";

// ---------- HELPERS ----------
export function getVerseCount({ data, book, chapter }) {
  if (!data || !Array.isArray(data)) return 0;
  const b = data.find((x) => x.name.toLowerCase() === book.toLowerCase());
  if (!b) return 0;
  return b.chapters[chapter - 1]?.length || 0;
}

export function getMaxChapters({ data, book }) {
  if (!data || !Array.isArray(data)) return 0;
  const b = data.find((x) => x.name.toLowerCase() === book.toLowerCase());
  return b?.chapters.length || 0;
}

// ---------- NEXT ----------
export function goNext({
  data,
  book,
  chapter,
  verse,
  maxVerses,
  setVerse,
  setChapter,
  maxChapters,
}) {
  // previous verse inside same chapter
  if (chapter >= maxChapters && verse >= maxVerses) return;

  console.log(`max${maxChapters}`);
  if (verse >= 1 && verse < maxVerses) {
    setVerse(verse + 1);
    return;
  }
  if (verse >= maxVerses) {
    setChapter(chapter + 1);
    setVerse(1);
    return;
  }

  console.log("Reached start of book");
}
// ---------- PREVIOUS ----------
export function goPrevious({
  data,
  book,
  chapter,
  verse,
  setVerse,
  setChapter,
}) {
  // previous verse inside same chapter
  if (verse > 1) {
    setVerse(verse - 1);
    return;
  }

  // move to end of previous chapter
  if (chapter > 1) {
    const prevChapter = chapter - 1;
    const prevVerses = getVerseCount({ data, book, chapter: prevChapter });
    setChapter(prevChapter);
    setVerse(prevVerses || 1);
    return;
  }

  console.log("Reached start of book");
}
