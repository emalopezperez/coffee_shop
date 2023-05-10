import "../../../styles/slider.css";
import { useState, useEffect } from "react";

const AUTOPLAY_INTERVAL = 4000;

const slides = [
  {
    url: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3871&q=80",
  },

  {
    url: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3870&q=80",
  },

  {
    url: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
  },
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  
  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, AUTOPLAY_INTERVAL);
    return () => clearInterval(intervalId);
  }, [currentIndex]);

  return (
    <section className="slider-wrapper">
    
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="slider-image"></div>

      <div className="slider-dots">
        {slides.map((slide, slideIndex) => (
          <div key={slideIndex} className="slider-dot"></div>
        ))}
      </div>
    </section>
  );
};

export default Slider;
