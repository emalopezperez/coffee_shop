import { useState, useEffect } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import image1 from "../../../assets/img/image_1.jpg";
import image2 from "../../../assets/img/image_2.jpg";

const AUTOPLAY_INTERVAL = 3000;

const slides = [
  {
    url: image1,
  },
  {
    url: image2,
  },
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

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

      <div className="left-arrow" onClick={prevSlide}>
        <BsChevronCompactLeft size={30} />
      </div>

      <div className="right-arrow" onClick={nextSlide}>
        <BsChevronCompactRight size={30} />
      </div>
      <div className="slider-dots">
        {slides.map((slide, slideIndex) => (
          <div key={slideIndex} className="slider-dot"></div>
        ))}
      </div>
    </section>
  );
};

export default Slider;
