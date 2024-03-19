import React from "react";
import Navbar from "../components/Navbar";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function Gallary() {
  let imageList = [
    "https://source.unsplash.com/random/1",
    "https://source.unsplash.com/random/2",
    "https://source.unsplash.com/random/3",
    "https://source.unsplash.com/random/4",
    "https://source.unsplash.com/random/5",
    "https://source.unsplash.com/random/6",
    "https://source.unsplash.com/random/7",
    "https://source.unsplash.com/random/8",
    "https://source.unsplash.com/random/9",
    "https://source.unsplash.com/random/10",
    "https://source.unsplash.com/random/11",
    "https://source.unsplash.com/random/12",
    "https://source.unsplash.com/random/13",
    "https://source.unsplash.com/random/14",
    "https://source.unsplash.com/random/15",
  ];

  return (
    <>
      <div className="mb-2">
        <Navbar />
      </div>
      <div className="md:w-[90%]">
        <p className="m-2 text-base md:text-3xl my-2">Gallary</p>
        <div className="m-2 columns-3 md:columns-4 lg:columns-5">
          {imageList.map((item) => {
            return (
              <div className="overflow-hidden border-amber-800 shadow-md border-4 rounded-lg cursor-pointer">
                <LazyLoadImage
                  src={item}
                  className="mb-2 md:mb-4 rounded-lg scale-110 "
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
