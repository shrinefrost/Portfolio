import profilePhoto from "../photos/profilePhoto.png";
import { styled } from "styled-components";
import { motion } from "framer-motion";
import { PageAnimation, textAnim, imgAnim, fade } from "./PageAnimation";
import Wave from "./Wave";
function Home() {
  return (
    <HeroSection
      variants={PageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <TextSection>
        <motion.h1 variants={textAnim}>Hello, I'm</motion.h1>
        <motion.h1 variants={textAnim}>Brooklyn Gilbert</motion.h1>
        <motion.p variants={fade}>
          I'm a Freelance <span>UI/UX Designer</span> and <span>Developer</span>
          based in London, England. I strives to build immersive and beautiful
          web applications through carefully crafted code and user-centric
          design.
        </motion.p>
        <motion.button variants={fade}>Say Hello</motion.button>
      </TextSection>
      <ImageSection>
        <motion.img
          variants={imgAnim}
          src={profilePhoto}
          alt="Brooklyn Gilbert"
        />
      </ImageSection>
      <Wave />
    </HeroSection>
  );
}

const HeroSection = styled(motion.div)`
  width: 100%;
  padding-top: 6rem;
  margin-bottom: 2rem;
  min-height: 100vh;
  color: white;
  background: #1b1b1b;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4rem;
  /* LEFT SIDE CONTENT */
  button {
    &:hover {
      transform: scale(1.05);
    }
  }
`;

const TextSection = styled(motion.div)`
  max-width: 50%;
  z-index: 2;
  h1 {
    font-size: 3.5rem;
    line-height: 4.2rem;
    font-weight: 700;
    color: white;
    margin-bottom: 1.5rem;
  }

  p {
    font-size: 1.2rem;
    line-height: 2rem;
    color: #e8e8e8;
    margin-bottom: 2.5rem;

    span {
      color: #23d997;
      font-weight: 900;
    }
  }
`;

const ImageSection = styled(motion.div)`
  transition: all 0.3s ease-in-out;
  z-index: 2;
  img {
    width: 30rem;
    height: auto;
    border-radius: 1.5rem;
    object-fit: cover;
    box-shadow: 0 0 2rem rgba(0, 0, 0, 0.5);
    z-index: 2;
  }
`;

export default Home;
