import React from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Pages from "../components/pages";
import Cta from "../components/home/CTA/Cta";
import Image from "next/image";
import g1 from "@/app/assets/gallery/g1.jpeg";
import g2 from "@/app/assets/gallery/g2.jpeg";
import g3 from "@/app/assets/gallery/g3.jpg";
import g4 from "@/app/assets/gallery/g4.jpg";
import g5 from "@/app/assets/gallery/g5.jpeg";
import g6 from "@/app/assets/gallery/g6.jpg";
import g7 from "@/app/assets/gallery/g7.jpg";
import g8 from "@/app/assets/gallery/g8.jpg";
import bar from "@/app/assets/newfigma/Bar.svg";

function Page() {
  const images = [g1, g3, g2, g4, g5, g6, g7, g8];

  return (
    <Pages>
      <div className="text-white">
        <Header />
      </div>

      <div className="md:px-[10%] sm:px-[5%] px-[3%] md:pt-40 sm:pt-32 pt-20">
        <div className="">
          <h1 className="text-4xl font-bold">Life at Tiny Script</h1>
          <Image src={bar} alt="Bar" />
          <p className="text-base mt-2">"Events and Celebrations."</p>
        </div>
        {/* Flexbox container for images */}
        <div className="flex flex-wrap justify-center gap-3 md:my-14 my-10">
          {images.map((image, index) => {
            // Check if it's one of the last two images
            const isLastRow =
              index === images.length - 2 || index === images.length - 1;

            return (
              <div
                key={image}
                className={`relative overflow-hidden  ${
                  isLastRow ? "self-center" : ""
                } `}
              >
                <Image
                  src={image}
                  className="w-full h-60 object-cover bg-bottom group-hover:scale-100 scale-110 group-hover:z-10 group-hover:object-contain transition-all duration-300"
                  alt="Gallery Image"
                />
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </Pages>
  );
}

export default Page;
