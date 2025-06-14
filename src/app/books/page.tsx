"use client";
import { useRef, useState } from "react";
import Header from "../components/Header"

type BookItem = {
  id: number;
  title: string;
  artist: string;
  image: string;
  text: string;
};

const bookList: BookItem[] = [
  {
    id: 1,
    title: "ami",
    artist: "アンリケバリオス",
    image: "/book/ami.jpg",
    text: "/song/SALING!!!!!.mp3",
  },
  {
    id: 2,
    title: "面白きかな人生",
    artist: "大橋トリオ",
    image: "/book/hoshiwotugumono.jpg",
    text: "/song/面白きかな人生.mp3",
  },
  {
    id: 3,
    title: "VENEUS",
    artist: "大橋トリオ",
    image: "/book/jikan.jpg",
    text: "/song/VENUS.mp3",
  },
  {
    id: 4,
    title: "Starry Cruise",
    artist: "浦島坂田船",
    image: "/book/kumani.jpg",
    text: "/song/Starry Cruise.mp3",
  },
  {
    id: 5,
    title: "SALING!!!!!",
    artist: "Artist A",
    image: "/book/aozora.jpg",
    text: "/song/song1.mp3",
  },
  {
    id: 6,
    title: "SALING!!!!!",
    artist: "Artist A",
    image: "/book/raberu.jpg",
    text: "/song/song1.mp3",
  },
  {
    id: 7,
    title: "SALING!!!!!",
    artist: "Artist A",
    image: "/book/holes.jpg",
    text: "/song/song1.mp3",
  },
    {
    id: 8,
    title: "SALING!!!!!",
    artist: "Artist A",
    image: "/book/kateikyousitu.jpg",
    text: "/song/song1.mp3",
  },
];

export default function books() {
  return(
      <main className="min-h-screen bg-gray-100 p-8">
        <Header/>
      <h1 className="text-2xl font-bold mb-6">おすすめ本</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {bookList.map((book) => (
          <div key={book.id} className="bg-white p-4 rounded shadow">
            <img
              src={book.image}
              alt={book.title}
              className="w-full h-48 object-cover rounded"
            />
            <h2 className="mt-2 font-semibold text-gray-800">{book.title}</h2>
            <p className="text-sm text-gray-600">{book.artist}</p>
            <h2 className="mt-2 font-semibold text-gray-800">{book.text}</h2>
          </div>
        ))}
      </div>
    </main>
  )
}