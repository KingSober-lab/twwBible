export default function getNextChapterVerseCount(data, book, chapter) {
  // Find the book object
  const selectedBook = data.find(
    (b) => b.name.toLowerCase() === book.toLowerCase()
  );

  if (!selectedBook) return null;

  // Get number of verses
  const verseCount = 1;

  return verseCount;
}
