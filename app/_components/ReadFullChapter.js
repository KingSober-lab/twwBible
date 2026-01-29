"use client";
import { useEffect, useState } from "react";
import italicizeInsideParentheses from "./TextFormat";
import LoadingSpinner from "./Spinner";

export default function ChapterReader({ book, chapter }) {
  const [verses, setVerses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`/api/bible/${book}/${chapter}`)
      .then((res) => res.json())
      .then((json) => {
        setVerses(json.verses);
      })
      .finally(() => setLoading(false));
  }, [book, chapter]);

  if (loading) return <LoadingSpinner size={50} />;
  if (!verses) return <p>Verse data not found.</p>;

  return (
    <div className=" w-full bg-white p-8 shadow-lg">
      <h1 className="font-bold ">
        {book} {chapter}
      </h1>
      {verses.map((v, i) => {
        return (
          <p className="py-1" key={i}>
            <strong>{i + 1}. </strong>
            <span
              dangerouslySetInnerHTML={{
                __html: italicizeInsideParentheses(v),
              }}
            />
          </p>
        );
      })}
    </div>
  );
}
