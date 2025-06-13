import Link from "next/link";
// import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import Image from "next/image";

const sliderSettings = {
  autoplay: true, // スライドを自動再生
  autoplaySpeed: 4500,
  infinite: true, // コンテンツループ
  arrows: false, // 「前」「次」のスライドを操作する矢印を非表示
  cssEase: "linear",
  speed: 500, // スライドアニメーションのスピード
  variableWidth: true,
};

const carouselItems = [
  { image: "ami", alt: "hoshiwotugumono.jpg" },
  {
    id: 1,
    title: "SALING!!!!!",
    image: "/CD/SALING!!!!!.jpg",
  },
  {
    id: 2,
    title: "SALING!!!!!",
    image: "/CD/SALING!!!!!.jpg",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-mono mb-6">お気に入りカテゴリ</h1>

      
    <div>
      <div {...sliderSettings}>
        {carouselItems.map((carouselItem, index) => (
          <div key={index}>
            <img
              src={carouselItem.image}
              alt={carouselItem.alt}
              width="300px"
            />
          </div>
        ))}
      </div>
    </div>


      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Link href="/music">
          <div className="bg-white p-6 rounded shadow hover:bg-gray-200 transition cursor-pointer">
            🎵 音楽
          </div>
        </Link>
        <Link href="/books">
          <div className="bg-white p-6 rounded shadow hover:bg-gray-200 transition cursor-pointer">
            📚 本
          </div>
        </Link>
      </div>
    </main>
  );
}
