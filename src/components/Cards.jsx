import React from "react";
import { useState, useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function Card() {
  const [image, setImage] = useState("");

  async function fetchImage(url) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Failed to fetch image: ${response.statusText}`);
      }

      const blob = await response.blob();
      const imageUrl = URL.createObjectURL(blob);
      setImage(imageUrl);
    } catch (error) {
      console.error('Error fetching image:', error);
      // Optionally handle the error in the UI (e.g., display an error message)
    }
  }

  useEffect(() => {
    // Fetch the image only on initial mount (empty dependency array)
    fetchImage("https://source.unsplash.com/random/300x300");

    // Cleanup function: Revoke the object URL when the component unmounts
    return () => URL.revokeObjectURL(image);
  }, []);

  return (
    <>
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        {image && (
          <LazyLoadImage
          className="w-full object-cover aspect-video"
          src={image}
          alt="Sunset in the mountains"
              />
        )}
        <div className="px-4 py-3">
          <div className="text-lg mb-2 text-gray-800">The Coldest Sunset</div>
          <p className="text-gray-600 text-xs">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
            quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
            nihil.
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2">
            #photography
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2">
            #travel
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2">
            #winter
          </span>
        </div>
      </div>
    </>
  );
}
