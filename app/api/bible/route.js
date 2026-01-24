export async function GET() {
  const url =
    "https://raw.githubusercontent.com/thiagobodruk/bible/master/json/en_kjv.json";

  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error("Failed to fetch bible data");
    const bible = await res.json();

    // Return basic list of books:
    const books = bible.map((b) => ({
      name: b.name,
      chapters: b.chapters.length,
    }));

    return new Response(JSON.stringify({ books }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
    });
  }
}
