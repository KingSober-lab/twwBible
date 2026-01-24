"use client";

import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { getVerseCount, goNext, goPrevious } from "../_lib/bible";
import { useBibleState } from "./StateProvder";

function TextNavButton({ maxChapters }) {
  const { verse, chapter, data, book, setChapter, setVerse } = useBibleState();
  const maxVerses = getVerseCount({ data, book, chapter });

  return (
    <div className=" mt-[3rem] mb-[1.5rem] flex justify-around">
      {/* prev button */}
      <div>
        <button
          onClick={() => {
            goPrevious({ verse, chapter, data, book, setVerse, setChapter });
          }}
          className="flex items-center gap-2"
        >
          <HiChevronLeft className="w-[2rem] h-[2rem]" />

          <span>{verse > 1 ? "previous" : "Reached Start of the Book"}</span>
        </button>
      </div>

      {/* Next button */}
      <div>
        <button
          onClick={() =>
            goNext({
              data,
              book,
              verse,
              maxVerses,
              chapter,
              setVerse,
              setChapter,
              maxChapters,
            })
          }
          className="flex items-center gap-2"
        >
          <span>
            {chapter >= maxChapters && verse > maxVerses - 1
              ? "Reached the end of the Book"
              : "next"}
          </span>
          <HiChevronRight className="w-[2rem] h-[2rem]" />
        </button>
      </div>
    </div>
  );
}

export default TextNavButton;
