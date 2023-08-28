"use client";
import { Kalam } from "next/font/google";
import { useState } from "react";

const kalam = Kalam({ subsets: ["devanagari"], weight: "400" });

const SecretSection = () => {
  const [isVisible, setVisible] = useState(false);
  console.log(isVisible);
  return (
    <div
      onDoubleClick={() => {
        setVisible(true);
      }}
      className={`${isVisible ? "opacity-100" : "opacity-0"}
      ${kalam.className} text-5xl flex justify-center select-none`}>
      जय श्री राम
    </div>
  );
};

export default SecretSection;
