import React from "react";

export default function HeroSectionSidebar(img_url) {
  return (
    <>
      <div className="flex items-end justify-center md:h-[25rem] min-w-full bg-opacity-0 bg-no-repeat bg-cover object-cover backdrop-blur-lg" style={{backgroundImage: "url("+img_url+")", }}>
        <div className="sm:w-[40rem] my-5  backdrop-blur-lg rounded-md p-4 bg-blue-gray-800">
          <p className="text-2xl font-bold underline items-start text-white">
            Gallary app on progress
          </p>
          <p className="px-6 py-4 text-gray-100 text-xs">
            Share your best Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Officiis pariatur cupiditate eveniet accusantium, excepturi
            sit neque consequatur quisquam magni, porro velit dolores amet
            tempora praesentium distinctio nulla quo alias perferendis?
            Veritatis laboriosam hic quo.
          </p>
        </div>
      </div>
    </>
  );
}