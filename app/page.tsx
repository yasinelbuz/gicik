"use client";

import React from "react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <AnnoyingButton />
    </main>
  );
}

function AnnoyingButton() {
  const [position, setPosition] = React.useState({ top: 0, left: 0 });
  const [count, setCount] = React.useState(0);

  const handleMouseEnter = () => {
    if (Math.random() < 0.2) {
      setTimeout(() => {
        const newTop = Math.random() * (window.innerHeight - 50);
        const newLeft = Math.random() * (window.innerWidth - 100);
        setPosition({ top: newTop, left: newLeft });
      }, 1000);
    } else {
      const newTop = Math.random() * (window.innerHeight - 50);
      const newLeft = Math.random() * (window.innerWidth - 100);
      setPosition({ top: newTop, left: newLeft });
    }
  };

  if (count >= 5) {
    return (
      <div className="text-2xl font-bold text-purple-500">
        Sen daha gıcıksın 🤪
      </div>
    );
  }

  return (
    <button
      className="text-white p-2 rounded-md"
      style={{
        position: "absolute",
        top: `${position.top}px`,
        left: `${position.left}px`,
        transition: "all 0.2s ease-in-out",
      }}
      onMouseEnter={handleMouseEnter}
      onClick={() => setCount((prevCount) => prevCount + 1)}
    >
      Gıcık Edici Buton (Clicked: {count})
    </button>
  );
}
