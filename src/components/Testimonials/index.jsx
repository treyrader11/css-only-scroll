import { useState, useRef, useEffect } from "react";
import { cn } from "../../lib/utils";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { testimonials } from "./data";
import leftArrow from "/assets/arrow-left.svg";
import rightArrow from "/assets/arrow-right.svg";
import { fadeIn, fadeOut, scale, slideLeft, slideRight } from "./tweens";

gsap.registerPlugin(useGSAP);

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  let imageList = useRef(null);
  let testimonialList = useRef(null);

  useGSAP(() => {
    console.log("testimonialList", testimonialList);
    gsap.to(testimonialList.children[0], {
      duration: 0,
      opacity: 1,
    });
  });
  const nextSlide = () => {
    const newIndex = (activeIndex + 1) % testimonials.length;
    setActiveIndex(newIndex);
    transitionSlides(activeIndex, newIndex);
  };

  const prevSlide = () => {
    const newIndex =
      (activeIndex - 1 + testimonials.length) % testimonials.length;
    setActiveIndex(newIndex);
    transitionSlides(activeIndex, newIndex);
  };

  const transitionSlides = (current, next) => {
    // Slide out the current slide and slide in the next slide
    slideLeft(imageList, current, 1);
    slideLeft(imageList, next, 1);
    scale(imageList, next, 1);
    fadeOut(testimonialList, current, 1);
    fadeIn(testimonialList, next, 1);
  };

  //   const nextSlide = () => {
  //     if (imageList.children[0].classList.contains("active")) {
  //       setState({ isActive1: false, isActive2: true });
  //       //Image transition
  //       slideLeft(imageList, 0, 1);
  //       slideLeft(imageList, 1, 1);
  //       scale(imageList, 1, 1);
  //       slideLeft(imageList, 2, 1);
  //       slideLeft(imageList, 2, 0);
  //       fadeOut(testimonialList, 0, 1);
  //       fadeIn(testimonialList, 1, 1);
  //     } else if (imageList.children[1].classList.contains("active")) {
  //       setState({ isActive2: false, isActive3: true });
  //       //Image transition
  //       slideRight(imageList, 0, 1);
  //       slideLeft(imageList, 1, 1, 2);
  //       slideLeft(imageList, 2, 1, 2);
  //       scale(imageList, 2, 1);
  //       //content transition
  //       fadeOut(testimonialList, 1, 1);
  //       fadeIn(testimonialList, 2, 1);
  //     } else if (imageList.children[2].classList.contains("active")) {
  //       setState({ isActive1: true, isActive3: false });
  //       //Image transition
  //       slideLeft(imageList, 2, 1, 3);
  //       slideLeft(imageList, 0, 1, 0);
  //       slideLeft(imageList, 1, 0, 0);
  //       scale(imageList, 0, 1);
  //       //content transition
  //       fadeOut(testimonialList, 2, 1);
  //       fadeIn(testimonialList, 0, 1);
  //     }
  //   };

  //   const prevSlide = () => {
  //     if (imageList.children[0].classList.contains("active")) {
  //       setState({ isActive1: false, isActive3: true });
  //       //Image transition
  //       slideLeft(imageList, 2, 0, 3);
  //       slideLeft(imageList, 2, 1, 2);
  //       scale(imageList, 2, 1);
  //       slideRight(imageList, 0, 1);
  //       slideRight(imageList, 1, 1);
  //       //content transtion
  //       fadeOut(testimonialList, 0, 1);
  //       fadeIn(testimonialList, 2, 1);
  //     } else if (imageList.children[1].classList.contains("active")) {
  //       setState({ isActive2: false, isActive1: true });
  //       //Image transition
  //       slideLeft(imageList, 0, 0);
  //       slideRight(imageList, 0, 1, 0);
  //       slideRight(imageList, 1, 1, 0);
  //       slideRight(imageList, 2, 1, 2);
  //       scale(imageList, 0, 1);
  //       //content transtion
  //       fadeOut(testimonialList, 1, 1);
  //       fadeIn(testimonialList, 0, 1);
  //     } else if (imageList.children[2].classList.contains("active")) {
  //       setState({ isActive2: true, isActive3: false });
  //       slideLeft(imageList, 2, 1);
  //       slideLeft(imageList, 1, 0, 2);
  //       slideLeft(imageList, 1, 1);
  //       scale(imageList, 1, 1);
  //       //content transtion
  //       fadeOut(testimonialList, 2, 1);
  //       fadeIn(testimonialList, 1, 1);
  //     }
  //   };

  return (
    <div
      className={cn(
        "testimonial-section"
        // "h-screen",
        // "flex",
        // "justify-center",
        // "items-center",
        // "after:absolute",
        // "after:w-[900px]",
        // "after:h-[550px]",
        // "after:bg-slate-200",
        // "after:right-0",
        // "after:bottom-0",
        // "after:opacity-80",
        // "after:z-[-10]"
      )}
    >
      <div
        className={cn(
          "testimonial-container"
          //   "w-[1200px]",
          //   "h-[600px]",
          //   "relative"
        )}
      >
        <LeftArrow onClick={prevSlide} />
        <div
          className={cn(
            "inner"
            // "flex",
            // "justify-center",
            // "items-center",
            // "h-[600px]"
          )}
        >
          <div
            className={cn(
              "t-image"
              // "w-[500px]",
              // "h-[600px]",
              // "flex",
              // "justify-center",
              // "items-center",
              // "after:absolute",
              // "after:size-[200px]",
              // "after:bg-indigo-500",
              // "after:left-[140px]",
              // "after:top-0",
              // "after:rounded-full",
              // "after:z-[-9]"
            )}
          >
            <ul
              ref={(el) => (imageList = el)}
              className={
                cn()
                // "flex",
                // "absolute",
                // "overflow-hidden",
                // "h-[460]",
                // "w-[340px]",
                // "shadow-[0px_0px_40px_rgba(0,0,10,0.25)]"
              }
            >
              {testimonials.map((item, i) => (
                <TestimonialImage
                  key={i}
                  {...item}
                  className={cn({ active: activeIndex === i })}
                />
              ))}
            </ul>
          </div>
          <div
          // className={cn(
          //   "w-[500px]",
          //   //   "h-[600px]",
          //   "flex",
          //   "items-center"
          // )}
          >
            <ul
              //   className={cn(
              //     "absolute",
              //     "overflow-hidden",
              //     "w-[500px]",
              //     "h-[400px]"
              //   )}
              ref={(el) => (testimonialList = el)}
            >
              {testimonials.map((content, i) => (
                <TestimonialContent
                  {...content}
                  key={i}
                  className={cn({ active: activeIndex === i })}
                />
              ))}
            </ul>
          </div>
        </div>
        <RightArrow onClick={nextSlide} />
      </div>
    </div>
  );
}

function TestimonialContent({ quote, name, title, className }) {
  return (
    <li
      className={cn(
        className
        //   "w-[500px]",
        //   "h-[400px]",
        //   "text-[#2e293c]",
        //   "flex",
        //   "items-center",
        //   "justify-center",
        //   "opacity-0",
        //   "first:after:absolute",
        //   "first:after:h-3",
        //   "first:after:w-[310px]",
        //   "first:after:bg-[#2e293c]",
        //   "first:after:opacity-30",
        //   "first:after:left-0",
        //   "first:after:top-[206px]"
      )}
    >
      <div className="content-inner">
        <p className="quote">{quote}</p>
        <h3 className="name">{name}</h3>
        <h4 className="title">{title}</h4>
      </div>
    </li>
  );
}

function TestimonialImage({ name, image, className }) {
  return (
    <li
      className={cn(
        //   "h-[460px]",
        //   "w-[340px]",
        className
      )}
    >
      <img
        //   className={cn("h-[460px]", "w-[340px]")}
        src={image}
        alt={name}
      />
    </li>
  );
}

function LeftArrow({ onClick }) {
  return (
    <div
      className={cn(
        "arrows",
        "left"
        // "absolute",
        // "flex",
        // "w-[100px]",
        // "items-center",
        // "justify-center",
        // "inset-y-0",
        // "cursor-pointer",
        // "rounded-lg",
        // "duration-300",
        // "ease-in-out",
        // "hover:shadow-[0px_0px_30px_rgba(0,0,80,0.05)]",
        // "right-0"
      )}
      onClick={onClick}
    >
      <img src={leftArrow} alt="left arrow" />
    </div>
  );
}

function RightArrow({ onClick }) {
  return (
    <div
      className={cn(
        "arrows",
        "right"
        // "absolute",
        // "flex",
        // "w-[100px]",
        // "items-center",
        // "justify-center",
        // "inset-y-0",
        // "cursor-pointer",
        // "rounded-lg",
        // "duration-300",
        // "ease-in-out",
        // "hover:shadow-[0px_0px_30px_rgba(0,0,80,0.05)]",
        // "right-0"
      )}
      onClick={onClick}
    >
      <img src={rightArrow} alt="right arrow" />
    </div>
  );
}
