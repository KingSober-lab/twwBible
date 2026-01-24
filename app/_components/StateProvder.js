"use client";

import { createContext, useContext, useEffect, useState } from "react";

const BibleContext = createContext();

export function BibleProvider({ children }) {
  const [error, setError] = useState(null);
  const [version, setVersion] = useState("en-kjv");
  const [data, setData] = useState([]);
  const [book, setBook] = useState("");
  const [books, setBooks] = useState([]);
  const [chapter, setChapter] = useState(null);
  const [chapters, setChapters] = useState([]);
  const [verse, setVerse] = useState(null);
  const [verses, setVerses] = useState([]);
  const [verseText, setVerseText] = useState("");
  const [show, setShow] = useState(false);

  // 🔹 Step 1 — Fetch all books for selected version
  useEffect(() => {
    async function loadBooks() {
      try {
        setError(null);
        const res = await fetch(
          "https://raw.githubusercontent.com/thiagobodruk/bible/master/json/en_kjv.json"
        );
        if (!res.ok) throw new Error("Failed to load books");
        const data = await res.json();

        // Extract only book names for the dropdown
        const bookList = data.map((b) => ({
          name: b.name,
          chapters: b.chapters.length,
        }));

        setData(data);

        setBooks(bookList);
      } catch (err) {
        setError(err.message);
      }
    }
    loadBooks();
  }, [version]);

  // 🔹 Step 2 — Fetch chapters for selected book
  useEffect(() => {
    if (!book || data.length === 0) return;

    const selectedBook = data.find(
      (b) => b.name.toLowerCase() === book.toLowerCase()
    );

    const chaptersArray = Array.from(
      { length: selectedBook.chapters.length },
      (_, i) => i + 1
    );

    setChapters(chaptersArray);
    setChapter(null); // reset only manually
    setVerses([]); // okay here
    setVerse(null); // okay here
  }, [book, data]);

  // 🔹 Step 3 — Fetch verses for selected chapter
  useEffect(() => {
    if (!book || !chapter) return;

    function loadVerses() {
      try {
        setError(null);

        const selectedBook = data.find(
          (b) => b.name.toLowerCase() === book.toLowerCase()
        );
        const selectedChapter = selectedBook.chapters[chapter - 1];

        // Create an array [1, 2, 3, ...] based on number of verses
        const versesArray = Array.from(
          { length: selectedChapter.length },
          (_, i) => i + 1
        );

        setVerses(versesArray);
      } catch (err) {
        setError(err.message);
      }
    }

    loadVerses();
    setShow(false);
  }, [book, chapter, data]);

  function resetAll() {
    setBook("");
    setChapter(null);
    setVerse(null);
    setVerseText("");
    setShow(false);
  }

  return (
    <BibleContext.Provider
      value={{
        error,
        setError,
        version,
        setVersion,
        data,
        book,
        books,
        setBooks,
        chapter,
        chapters,
        setChapters,
        verse,
        verses,
        setVerses,
        verseText,
        show,
        setBook,
        setChapter,
        setVerse,
        setVerseText,
        setShow,
        resetAll,
      }}
    >
      {children}
    </BibleContext.Provider>
  );
}

export function useBibleState() {
  return useContext(BibleContext);
}
