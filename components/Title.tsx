"use client";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
function Title() {
  const words = [
    {
      text: "Chat",
    },
    {
      text: "with",
    },
    {
      text: "Anyone,",
    },
    {
      text: "anywhere!",
      className: "text-indigo-600",
    },
  ];
  return (
    <div>
      <TypewriterEffectSmooth words={words} className="m-0 select-none " />
    </div>
  );
}

export default Title;
