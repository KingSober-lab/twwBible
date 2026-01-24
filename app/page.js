"use client";
import { useState, useEffect } from "react";

import { getMaxChapters, getVerseCount } from "./_lib/bible";
import ChapterReader from "./_components/ReadFullChapter";
import italicizeInsideParentheses from "./_components/TextFormat";
import { useBibleState } from "./_components/StateProvder";
import FontSlider from "./_components/FontSlide";
import BibleSearchBox from "./_components/BibleSearchBox";
import WelcomeText from "./_components/WelcomeText";
import TextNavButton from "./_components/TextNavButton";

export default function VerseFinderPage() {
  const [fontSize, setFontSize] = useState(20); // default size
  const [search, setIsearch] = useState(false);
  const {
    error,
    setError,
    version,
    setVersion,
    books,
    setBooks,
    data,
    book,
    setBook,
    chapter,
    setChapter,
    chapters,
    setChapters,
    verse,
    setVerse,
    verses,
    setVerses,
    verseText,
    setVerseText,
    show,
    setShow,
  } = useBibleState();

  const maxChapters = getMaxChapters({ data, book });
  const maxVerses = getVerseCount(data, book, chapter);
  const formatted_1 = verseText?.replaceAll("{", "(").replaceAll("}", ")");
  const formatted = italicizeInsideParentheses(formatted_1);

  // 🔹 Step 4 — Fetch verse text when verse selected

  useEffect(() => {
    if (!book || !chapter || !verse) return;

    async function loadVerseText() {
      try {
        setError(null);

        // 1️⃣ Find the selected book
        const selectedBook = data.find(
          (b) => b.name.toLowerCase() === book.toLowerCase()
        );
        if (!selectedBook) throw new Error("Book not found");

        // 2️⃣ Find the selected chapter (arrays are zero-indexed)
        const selectedChapter = selectedBook.chapters[chapter - 1];
        if (!selectedChapter) throw new Error("Chapter not found");

        // 3️⃣ Find the selected verse
        const selectedVerse = selectedChapter[verse - 1];
        if (!selectedVerse) throw new Error("Verse not found");

        // 4️⃣ Set only the verse text
        setVerseText(selectedVerse);
      } catch (err) {
        setError(err.message);
      }
    }

    loadVerseText();
    setShow(false);
  }, [book, chapter, verse, data, setError, setShow, setVerseText]);

  // effect to ensure that when book and chapter change verseText rest and show is falseS changes

  return (
    <div className="w-full px-5 lg:px-[2rem] ">
      {/* Font slidfer*/}
      <div className="flex py-8 flex-col space-y-4  2xl:px-[9rem] mx-auto">
        <div className="  mx-auto">
          <FontSlider fontSize={fontSize} setFontSize={setFontSize} />
        </div>

        {/* the search box */}
        <div className="px-10 lg:px-[20rem] xl:px-[20rem] pt-[-5px]">
          <BibleSearchBox
            bibleData={data}
            onSearchActive={(active) => setIsearch(active)}
          />
        </div>

        {!search ? (
          <div className="px-10 grid gap-2 xl:px-[20rem] lg:px-[10rem]  md:grid md:gap-2 md:grid-cols-3 ">
            {/* Start of drop down the books in the Bible */}
            <div className="relative w-full">
              <select
                className="appearance-none w-full h-[2.5rem] p-2 pr-8 border-2 border-[#ba68c8]  rounded-lg focus:outline-none focus:ring-1 focus:ring-[#ba68c8]"
                value={book}
                onChange={(e) => {
                  setChapter(null);
                  setBook(e.target.value);
                }}
              >
                <option value="">-- Select Book --</option>
                {books.map((b) => (
                  <option key={b.name} value={b.name}>
                    {b.name}
                  </option>
                ))}
              </select>

              <svg
                className="absolute right-3 top-3 w-4 h-4 text-[#ba68c8] pointer-events-none"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7" //M=move, (x,y)=(19,9) l=draw a line (-7,7)=(move down 7 unit,left 7unit) (-7,-7)=(move up 7unit, left 7unit)
                />
              </svg>
            </div>

            {/*End of drop down the books in the Bible */}

            {/* Start of drop down the chapters in the Bible */}
            <div>
              {book ? (
                <div className="relative w-full">
                  <select
                    className="appearance-none w-full h-[2.5rem] p-2 pr-8 border-2 border-[#ba68c8]  rounded-lg focus:outline-none focus:ring-1 focus:ring-[#ba68c8]"
                    value={chapter}
                    onChange={(e) => setChapter(Number(e.target.value))}
                  >
                    <option value="">-- Select Chapter --</option>
                    {chapters.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>

                  <svg
                    className="absolute right-3 top-3 w-4 h-4 text-[#ba68c8] pointer-events-none"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7" //M=move, (x,y)=(19,9) l=draw a line (-7,7)=(move down 7 unit,left 7unit) (-7,-7)=(move up 7unit, left 7unit)
                    />
                  </svg>
                </div>
              ) : (
                <select
                  disabled={!book}
                  className="appearance-none w-full h-[2.5rem] p-2 pr-8 border-2 border-[#ba68c8]  rounded-lg focus:outline-none focus:ring-1 focus:ring-[#ba68c8]"
                  value={chapter}
                  onChange={(e) => setChapter(Number(e.target.value))}
                >
                  <option value="">-- Select Chapter --</option>
                  {chapters.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              )}
            </div>
            {/* End of drop down the chapters in the Bible */}

            {/* Start of drop down the verses in the Bible */}

            {chapter ? (
              <div className="relative w-full">
                <select
                  className="appearance-none w-full h-[2.5rem] p-2 pr-8 border-2 border-[#ba68c8]  rounded-lg focus:outline-none focus:ring-1 focus:ring-[#ba68c8]"
                  value={verse}
                  onChange={(e) => setVerse(Number(e.target.value))}
                >
                  <option value="">-- Select Verse --</option>
                  {verses.map((v) => (
                    <option key={v} value={v}>
                      {v}
                    </option>
                  ))}
                </select>

                <svg
                  className="absolute right-3 top-3 w-4 h-4 text-[#ba68c8] pointer-events-none"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7" //M=move, (x,y)=(19,9) l=draw a line (-7,7)=(move down 7 unit,left 7unit) (-7,-7)=(move up 7unit, left 7unit)
                  />
                </svg>
              </div>
            ) : (
              <select
                disabled={!chapter}
                className="appearance-none w-full h-[2.5rem] p-2 pr-8 border-2 border-[#ba68c8]  rounded-lg focus:outline-none focus:ring-1 focus:ring-[#ba68c8]"
                value={verse}
                onChange={(e) => setVerse(Number(e.target.value))}
              >
                <option value="">-- Select Verse --</option>
                {verses.map((v) => (
                  <option key={v} value={v}>
                    {v}
                  </option>
                ))}
              </select>
            )}
          </div>
        ) : (
          ""
        )}
      </div>
      {/* End of drop down the verses in the Bible */}

      {/* Start of drop down the verseText in the Bible */}
      <div className="grid lg:flex lg:gap-10 bg-[#F9F8F6]">
        {show ? (
          <div
            style={{ fontSize: `${fontSize}px` }}
            className="md:w-4/5  lg:py-[5rem] py-[2rem] lg:px-[2rem]  md:px-8 rounded-t-lg mt-[3rem] p-[1rem] "
          >
            <ChapterReader book={book} chapter={chapter} />
            <TextNavButton
              maxChapters={maxChapters}
              maxVerses={maxVerses}
              buttonType="fullChapter"
            />
          </div>
        ) : verseText ? (
          <div
            style={{ fontSize: `${fontSize}px` }}
            className=" lg:w-4/5 p-[1rem] lg:py-[5rem] py-[2rem] rounded-t-lg mt-[3rem]  lg:px-[2rem]  "
          >
            <div className="w-full bg-white p-8 shadow-lg">
              <strong>
                {book} {chapter}:{verse}
              </strong>

              <div
                dangerouslySetInnerHTML={{
                  __html: formatted,
                }}
              />

              <button
                onClick={() => setShow(true)}
                className="text-blue-600 underline"
              >
                Read Full Chapter
              </button>
            </div>
            {/* The next and prev button starts */}

            <div>
              <TextNavButton
                buttonType="verse"
                maxChapters={maxChapters}
                maxVerses={maxVerses}
              />
            </div>
          </div>
        ) : (
          <div
            style={{ fontSize: `${fontSize}px` }}
            className="lg:w-4/5 lg:py-[5rem] py-[2rem] lg:px-[2rem]  md:px-8 rounded-t-lg mt-[3rem] p-[1rem]"
          >
            <WelcomeText />
          </div>
        )}
        {/* my video */}

        <div className="lg:py-[4rem] hidden lg:block">
          <iframe
            className="bg-white p-6 shadow-lg mt-[4.2rem] mr-8"
            src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2F100064486940960%2Fvideos%2F576923045361429%2F&show_text=false&width=560&t=0"
            width="370"
            height="250"
            style={{ border: "none", overflow: "hidden" }}
            scrolling="no"
            frameborder="0"
            allowfullscreen="true"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            allowFullScreen="true"
          ></iframe>
        </div>
      </div>

      {/* End of drop down the verseText in the Bible */}

      {/*  Error when no verse is fetched */}
      {error && (
        <div style={{ color: "red", marginTop: "1rem" }}>Error: {error}</div>
      )}
    </div>
  );
}
