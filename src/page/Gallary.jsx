import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { IoIosDownload } from "react-icons/io";

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

  async function fetchImage(url) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Failed to fetch image: ${response.statusText}`);
      }

      const blob = await response.blob();
      const imageUrl = URL.createObjectURL(blob);
      seDataimage(imageUrl);
    } catch (error) {
      console.error("Error fetching image:", error);
      // Optionally handle the error in the UI (e.g., display an error message)
    }
  }



  return (
    <>
      <div className="md:w-[90%] md:m-auto">
        <Navbar />

        <p className="m-2 text-base md:text-3xl my-2">Gallary</p>

        <div className="columns-2 md:columns-3 lg:columns-4 ">
          {imageList.map((item) => {
            return (
              // component
              <div
                className="overflow-hidden  shadow-md rounded-lg cursor-pointer group relative mb-2 "
                key={item}
              >
                <IoIosDownload className=" group-hover:opacity-100 opacity-0 absolute z-10 w-8 h-8 bottom-4 right-6 p-1 border-blue-gray-900 rounded-full shadow-md bg-white" />

                <LazyLoadImage
                  src={item}
                  className="rounded-lg group-hover:scale-110 object-cover transition duration-300 "
                  alt={item}
                  // onLoad={fetchImage(item)}
                />
                
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
