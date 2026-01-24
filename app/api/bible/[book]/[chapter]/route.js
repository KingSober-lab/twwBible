export async function GET(req, { params }) {
  const { book, chapter } = params;
  const url =
    "https://raw.githubusercontent.com/thiagobodruk/bible/master/json/en_kjv.json";

  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error("Failed to fetch bible data");
    const bible = await res.json();

    const selectedBook = bible.find(
      (b) => b.name.toLowerCase() === book.toLowerCase()
    );
    if (!selectedBook)
      return new Response(JSON.stringify({ error: "Book not found" }), {
        status: 404,
      });

    const chNum = Number(chapter);
    if (
      !Number.isFinite(chNum) ||
      chNum < 1 ||
      chNum > selectedBook.chapters.length
    ) {
      return new Response(JSON.stringify({ error: "Chapter not found" }), {
        status: 404,
      });
    }

    const verses = selectedBook.chapters[chNum - 1];
    return new Response(
      JSON.stringify({ book: selectedBook.name, chapter: chNum, verses }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
    });
  }
}
