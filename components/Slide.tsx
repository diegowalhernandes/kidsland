import { useEffect, useRef, useState } from 'react';
import {SlideContainer, SlideItem } from "../src/styles/slide"



const Slide: React.FC = () => {
  const slideContainerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const slideContainer = slideContainerRef.current;
    const slideItems = slideContainer?.getElementsByClassName('slide-item') as HTMLCollectionOf<HTMLDivElement>;
    const totalSlides = slideItems.length;

    const nextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    };

    const timeoutId = setTimeout(nextSlide, 3000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [currentIndex]);

  return (
    <SlideContainer ref={slideContainerRef}>
      <SlideItem className="slide-item" active={currentIndex === 0}>
        Slide 1
      </SlideItem>
      <SlideItem className="slide-item" active={currentIndex === 1}>
        Slide 2
      </SlideItem>
      <SlideItem className="slide-item" active={currentIndex === 2}>
        Slide 3
      </SlideItem>
    </SlideContainer>
  );
};

export default Slide;