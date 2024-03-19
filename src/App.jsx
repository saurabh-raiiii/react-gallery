import { Outlet } from "react-router-dom";
import "./App.css";
import Card from "./components/Cards";
import HeroSectionSidebar from "./components/HeroSectionSlidebar";
import Navbar from "./components/Navbar";
import { Carousel, IconButton } from "@material-tailwind/react";

export default function App() {
  let total_card = [1, 2, 3, 4];
  return (
    <>
      <div className="md:w-[90%] md:m-auto">
        {/* navbar */}
        <div className="mb-3">
          <Navbar />
        </div>

        {/* carousel */}
        <Carousel
          className="rounded-xl my-3"
          transition={{ duration: 1 }}
          navigation={({ setActiveIndex, activeIndex, length }) => (
            <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
              {new Array(length).fill("").map((_, i) => (
                <span
                  key={i}
                  className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                    activeIndex === i
                      ? "w-8 bg-blue-gray-600"
                      : "w-4 bg-blue-gray-400/50"
                  }`}
                  onClick={() => setActiveIndex(i)}
                />
              ))}
            </div>
          )}
          prevArrow={({ loop, handlePrev, firstIndex }) => (
            <IconButton
              variant="text"
              color="black"
              size="lg"
              disabled={!loop && firstIndex}
              onClick={handlePrev}
              className="!absolute top-2/4 left-4 -translate-y-2/4 shadow-lg hover:border-2 hover:border-x-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                />
              </svg>
            </IconButton>
          )}
          nextArrow={({ loop, handleNext, lastIndex }) => (
            <IconButton
              variant="text"
              color="black"
              size="lg"
              onClick={handleNext}
              className="!absolute top-2/4 !right-4 -translate-y-2/4 hover:border-2 hover:border-x-white"
              disabled={!loop && lastIndex}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </IconButton>
          )}
        >
          <HeroSectionSidebar img_url="https://source.unsplash.com/random/1" />
          <HeroSectionSidebar img_url="https://source.unsplash.com/random/2" />
        </Carousel>

        {/* cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 justify-start gap-3 ">
          {total_card.map((cardNumber) => {
            return <Card key={cardNumber} />;
          })}
        </div>

        <Outlet />
      </div>
    </>
  );
}
