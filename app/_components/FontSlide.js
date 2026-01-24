"use client";

export default function FontSlider({ fontSize, setFontSize }) {
  return (
    <div className="p-6 w-[20rem] text-center">
      <div className="mb-6">
        <label className="font-semibold">Font Size: {fontSize}</label>
        <input
          type="range"
          min="20"
          max="40"
          value={fontSize}
          onChange={(e) => setFontSize(e.target.value)}
          className="w-full custom-range"
        />
      </div>
    </div>
  );
}
