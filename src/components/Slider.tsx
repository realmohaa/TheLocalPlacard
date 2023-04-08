import { HiArrowRight, HiArrowLeft } from "react-icons/hi";
import { useState } from "react";

interface SliderItem {
  id: number;
  img: string;
  title: string;
  description: string;
  bg: string;
}

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState<number>(0);

  const handleClick = (direction: string) => {
    if (direction === "left") {
      setSlideIndex((prevIndex) =>
        prevIndex > 0 ? prevIndex - 1 : sliderItems.length - 1
      );
    } else {
      setSlideIndex((prevIndex) =>
        prevIndex < sliderItems.length - 1 ? prevIndex + 1 : 0
      );
    }
  };

  const sliderItems: SliderItem[] = [
    {
      id: 1,
      img: "https://i.ibb.co/DG69bQ4/1.png",
      title: "ART SALE",
      description: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
      bg: "f5fafd",
    },
    {
      id: 2,
      img: "https://i.ibb.co/cXFnLLV/2.png",
      title: "AUTUMN COLLECTION",
      description: "DISCOVER NEW TRENDS IN OUR AUTUMN COLLECTION!",
      bg: "fcf1ed",
    },
    {
      id: 3,
      img: "https://i.ibb.co/mJS6vz0/3.png",
      title: "POPULAR SALE",
      description: "HURRY UP! GRAB YOUR FAVORITE PRODUCTS BEFORE THE SALE ENDS.",
      bg: "fbf0f4",
    },
  ];

  return (
    <div className="w-full h-70vh relative overflow-hidden">
      <div className="w-50 h-50 bg-teal-500 text-white rounded-full flex items-center justify-center absolute top-0 bottom-0 left-20 transform transition duration-200 hover:scale-110 cursor-pointer z-10"
           onClick={() => handleClick("left")}
      >
        <HiArrowLeft />
      </div>
      <div className="w-50 h-50 bg-teal-500 text-white rounded-full flex items-center justify-center absolute top-0 bottom-0 right-20 transform transition duration-200 hover:scale-110 cursor-pointer z-10"
           onClick={() => handleClick("right")}
      >
        <HiArrowRight />
      </div>
      <div className="h-full flex transition-all duration-1000"
           style={{ transform: `translateX(${slideIndex * -100}vw)` }}
      >
        {sliderItems.map((item) => (
          <div className={`w-full h-70vh flex items-center bg-${item.bg}`} key={item.id}>
            <div className="flex-1 h-full">
              <img src={item.img} alt={item.title} className="h-90 p-10" />
            </div>
            <div className="flex-2 h-full p-20">
              <h1 className="text-6xl">{item.title}</h1>
              <p className="my-8 text-lg font-medium tracking-wider">{item.description}</p>
              <button className="px-8 py-4 border-2 border-teal-500 text-teal-500 font-medium rounded-full hover:bg-teal-500 hover:text-white transition duration-200">
                SHOP NOW
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}  

export default Slider;