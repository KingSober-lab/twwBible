export default function getPreviousChapterVerseCount({ data, book, chapter }) {
  // Convert chapter (string) to number
  const currentChapter = Number(chapter);

  // If we are in chapter 1, there's no previous chapter
  if (currentChapter <= 1) return null;

  // Find the book object
  const selectedBook = data.find(
    (b) => b.name.toLowerCase() === book.toLowerCase()
  );

  if (!selectedBook) return null;

  // Previous chapter index (zero-based)
  const prevChapterIndex = currentChapter - 1;

  // Get number of verses
  const verseCount = selectedBook.chapters[prevChapterIndex].length;

  return verseCount;
}
