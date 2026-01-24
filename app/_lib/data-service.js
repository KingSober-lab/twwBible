export default async function Bible(req, res) {
  // Get query parameters from the request (e.g., book, chapter, verse)
  const {
    book = "John",
    chapter = "3",
    verse = "16",
    translation = "KJV",
  } = req.query;

  // Build the API URL
  const apiUrl = `https://bible.helloao.org/api/?translation=${translation}&book=${book}&chapter=${chapter}&verse=${verse}`;

  // Fetch data from the external Bible API
  const response = await fetch(apiUrl);
  const data = await response.json();

  // Send the data back to your front-end
  res.status(200).json(data);
}
