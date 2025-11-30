export const PageAnimation = {
  hidden: {
    y: 300,
    opacity: 0,
  },
  show: {
    y: 0,
    transition: {
      duration: 0.7,
      when: "beforeChildren",
      staggerChildren: 0.25,
    },
    opacity: 1,
  },
  exit: {
    y: 300,
    opacity: 0,
    transition: {
      duration: 0.7,
    },
  },
};

export const textAnim = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export const imgAnim = {
  hidden: {
    scale: 1.2,
    opacity: 0,
  },
  show: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.9, ease: "easeInOut" },
  },
};

export const fade = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

export const FrameAni = {
  hidden: { x: "-130%", skew: "45deg" },
  show: {
    x: "100%",
    skew: "0deg",
    transition: { duration: 0.9, ease: "easeOut" },
  },
};

export const FrameContainer = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 1,
      when: "beforeChildren",
      staggerChildren: 0.25,
    },
  },
};
