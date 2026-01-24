export default function colorTextInsideQuotes(text) {
  return text?.replace(/"([^"]+)"/g, (_, inner) => {
    return `<span className="text-red-400">"${inner}"</span>`;
  });
}
