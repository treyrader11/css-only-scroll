import gsap from "gsap/gsap-core";

const imageWidth = 340;

export const slideLeft = (el, index, duration, multiplied = 1) => {
  gsap.to(el.children[index], {
    duration,
    x: -imageWidth * multiplied,
    ease: "power3.inOut",
  });
};

export const slideRight = (el, index, duration, multiplied = 1) => {
  gsap.to(el.children[index], {
    duration,
    x: imageWidth * multiplied,
    ease: "power3.inOut",
  });
};

export const scale = (el, index, duration) => {
  gsap.from(el.children[index], {
    duration,
    scale: 1.2,
    ease: "power3.inOut",
  });
};

//Content transition

export const fadeOut = (el, index, duration) => {
  gsap.to(el.children[index], duration, {
    opacity: 0,
  });
};

export const fadeIn = (el, index, duration) => {
  gsap.to(el.children[index], duration, {
    opacity: 1,
    delay: 1,
  });
};
