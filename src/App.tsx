"use client";
import { useState } from "react";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No.",
      "Are you sure?",
      "Are you very sure?",
      "Are you very very sure?",
      "Are you very very very sure?",
      "Pretty please",
      "Last warning ah",
      "Last last warning.",
      "You are a goon.",
      "I'm crying",
      "I'm crine",
      "I'm dying",
      "Yep I'm gone",
      "Alright this is JJ's ghost",
      "Pleaseeeeee",
      ":((((",
      "PRETTY PLEASE",
      "求求你",
      "Pài-thok",
      "Alright this is it",
      "No :(",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="-mt-16 flex h-screen flex-col items-center justify-center">
      {yesPressed ? (
        <>
          <img src="https://tenor.com/duZQQsb5UlS.gif"/>
          <div className="my-4 text-4xl font-bold">YAYYY! I knew I could count on this goon. I love youuuu! See you on Saturday buddy boy ;))</div>
        </>
      ) : (
        <>
          <img
            className="h-[200px]"
            src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
          />
          <h1 className="my-4 text-4xl">Hi Breeze, will you be my Valentine?</h1>
          <div className="flex items-center">
            <button
              className={`mr-4 rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button
              onClick={handleNoClick}
              className=" rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
            >
              {noCount === 0 ? "No" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
