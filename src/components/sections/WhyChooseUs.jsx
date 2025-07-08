import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const WhyChooseUs = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const features = [
    {
      title: "Farm-Fresh Quality",
      description:
        "Handpicked at the peak of ripeness from trusted farms, our vegetables and corn deliver unbeatable flavor and nutrients. Frozen immediately to lock in freshness.",
      image: "Images/card1.jpg",
    },
    {
      title: "Food Safety Excellence",
      description:
        "We follow world-class safety protocols and strict quality control to ensure every product is pure, safe, and ready to enjoy — just like nature intended.",
      image: "Images/card2.jpg",
    },
    {
      title: "Nationwide Distribution",
      description:
        "Our advanced cold-chain logistics keep your frozen food perfectly preserved across India — from our farm to your freezer, in pristine condition.",
      image: "Images/global.jpg",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % features.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + features.length) % features.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const getIndex = (offset) =>
    (currentIndex + offset + features.length) % features.length;

  return (
    <section className="bg-white py-20 px-4 md:px-12 lg:px-20 overflow-hidden">
     

      <div className="relative max-w-7xl mx-auto flex items-center justify-center h-[460px]">
        {/* Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-2 z-40 bg-green-100 hover:bg-green-200 p-3 rounded-full shadow-md transition"
        >
          <ChevronLeft size={30} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 z-40 bg-green-100 hover:bg-green-200 p-3 rounded-full shadow-md transition"
        >
          <ChevronRight size={30} />
        </button>

        {/* Cards */}
        <div className="relative w-full h-full">
          {[...Array(3)].map((_, offset) => {
            const index = getIndex(offset - 1);
            const isCenter = offset === 1;

            let positionClass = "";
            if (offset === 0) {
              // Previous
              positionClass =
                "left-[5%] scale-90 opacity-50 z-10 shadow-md";
            } else if (offset === 1) {
              // Current (with slightly stronger green shadow)
              positionClass =
                "left-1/2 -translate-x-1/2 scale-100 opacity-100 z-30 shadow-[0_10px_24px_rgba(34,197,94,0.8)]";
            } else {
              // Next
              positionClass =
                "right-[5%] scale-90 opacity-50 z-10 shadow-md";
            }

            return (
              <div
                key={index}
                className={`absolute top-0 transition-all duration-700 ease-in-out transform w-[80%] md:w-[60%] h-full bg-white rounded-2xl overflow-hidden flex flex-col md:flex-row items-center ${positionClass}`}
              >
                <div className="w-full md:w-1/2 h-60 md:h-full">
                  <img
                    src={features[index].image}
                    alt={features[index].title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-full md:w-1/2 p-6 md:p-10 text-center md:text-left">
                  <h3 className="text-2xl md:text-3xl font-semibold text-green-700 mb-4">
                    {features[index].title}
                  </h3>
                  <p className="text-md md:text-lg text-gray-700 leading-relaxed">
                    {features[index].description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
