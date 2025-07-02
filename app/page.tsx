'use client';

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Home() {
  const [random, setRandom] = useState<number | null>(null);

  useEffect(() => {
    fetch('/api/random')
      .then((res) => res.json())
      .then((data) => setRandom(data.number))
      .catch((err) => console.error("Failed to fetch random number", err));
  }, []);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <p className="text-lg font-bold">
          🎲 Random number: {random !== null ? random : "Loading..."}
        </p>
        {/* ... your existing content */}
      </main>

      {/* ... your footer */}
    </div>
  );
}