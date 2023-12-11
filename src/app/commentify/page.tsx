"use client";
import { useState } from "react";

export default function Commentify() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={`h-screen ${
          isOpen ? `w-72` : `w-20`
        } bg-gray-900 transition-all duration-300 ease-in-out`}
      ></div>
    </>
  );
}
