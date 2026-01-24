export function searchBible(data, query) {
  if (!query || !data?.length) return [];

  const lower = query.toLowerCase();
  const results = [];

  //looping throw that data to see which verses has the query inputted
  data.forEach((book) => {
    book.chapters.forEach((chapter, chapterIndex) => {
      chapter.forEach((verse, verseIndex) => {
        if (verse.toLowerCase().includes(lower)) {
          results.push({
            book: book.name,
            chapter: chapterIndex + 1,
            verse: verseIndex + 1,
            text: verse,
          });
        }
      });
    });
  });

  return results;
}
