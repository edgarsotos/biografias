"use client";
import Image from "next/image";
import { useRef, useState } from "react";

const lyrics = [
  "Reinas, sobre toda autoridad ",
  "Reyes y dominos ",
  "a tus pies caerán ",
  "",
  "Digno, tu mereces el honor",
  "La muerte destruiste ",
  "Eres vencedor ",
  "",
  "El Creador del universo ",
  "A su reino me llamó",
  "Con Su amor pagó mi precio  ",
  "Mi alma rescató   ",
  "",
  "Tu reino es eterno ",
  "Es justo y perfecto ",
  "Reinas en mi corazón ",
  "Todo lo que soy te doy ",
  "",
  "Justicia y poder ",
  "Al sonar de tu nombre  ",
  "Tiembla toda la creación ",
  "Todo lo que soy te doy ",
  "",
  "El Creador del universo ",
  "A su reino me llamó",
  "Con Su amor pagó mi precio  ",
  "Mi alma rescató   ",
  "",
  "Tu reino es eterno ",
  "Es justo y perfecto ",
  "Reinas en mi corazón ",
  "Todo lo que soy te doy ",
  "",
  "Justicia y poder ",
  "Al sonar de tu nombre  ",
  "Tiembla toda la creación ",
  "Todo lo que soy te doy ",
];

export default function SalmoPage() {
  // For demo, highlight the first non-empty line
  const firstLyricIdx = lyrics.findIndex((l) => l.trim() !== "");

  return (
    <div
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: 'url(/images/reinas.png)',
      }}
    >
      {/* Blurred overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-0" />
      <div className="relative z-10 flex flex-col md:flex-row w-full max-w-5xl h-[80vh] rounded-xl overflow-hidden shadow-2xl">
        {/* Left: Poster, info, audio */}
        <div className="flex flex-col items-center justify-center bg-black/40 p-8 md:w-1/2 w-full">
          <div className="rounded-lg overflow-hidden shadow-lg mb-6">
            <Image
              src="/images/reinas.png"
              alt="Reinas poster"
              width={320}
              height={320}
              className="object-cover w-64 h-64"
              priority
            />
          </div>
          <div className="text-center mb-4">
            <h2 className="text-2xl font-bold text-white">Reinas</h2>
            <p className="text-lg text-gray-200">Salmo</p>
          </div>
          <audio
            controls
            className="w-full max-w-xs mt-2"
            src="/music/reinas.mp3"
          >
            Your browser does not support the audio element.
          </audio>
        </div>
        {/* Right: Lyrics */}
        <div className="flex-1 flex flex-col justify-center px-8 pt-[710px] pb-[500px] bg-black/30 overflow-y-auto">
          <div className="text-white text-lg md:text-2xl font-medium space-y-2">
            {lyrics.map((line, idx) =>
              line.trim() === "" ? (
                <div key={idx} className="h-4" />
              ) : (
                <div
                  key={idx}
                  className={
                    idx === firstLyricIdx
                      ? "font-bold text-white bg-white/10 px-2 py-1 rounded-md shadow"
                      : "text-gray-200"
                  }
                >
                  {line}
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 