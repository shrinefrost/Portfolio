import profilePhoto from "../photos/profilePhoto.png";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
  PageAnimation,
  FrameAni,
  imgAnim,
  fade,
  textAnim,
  FrameContainer,
} from "./PageAnimation";
import { motion } from "framer-motion";

function About() {
  return (
    <Wrapper
      variants={PageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <motion.div varaints={FrameContainer} className="div">
        <Frame1 variants={FrameAni}></Frame1>
        <Frame2 variants={FrameAni}></Frame2>
        <Frame3 variants={FrameAni}></Frame3>
        <Frame4 variants={FrameAni}></Frame4>
      </motion.div>
      <Card varaints={fade}>
        <Left>
          <ImageWrapper>
            <motion.img
              variants={imgAnim}
              src={profilePhoto}
              alt="Professional User Experience Designer"
            />
          </ImageWrapper>

          <SocialBar variants={fade}>
            <a href="https://github.com">
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
            <a href="https://linkedin.com">
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
          </SocialBar>
        </Left>

        <Right>
          <motion.h1 variants={textAnim}>
            I'm Professional User Experience Designer
          </motion.h1>

          <motion.p variants={textAnim}>
            I design and develop services for customers specializing creating
            stylish, modern websites, web services and online stores. My passion
            is to design digital user experiences.
          </motion.p>

          <motion.p variants={textAnim}>
            I design and develop services for customers specializing creating
            stylish, modern websites.
          </motion.p>

          <ButtonRow>
            <PrimaryBtn variants={fade}>My Project</PrimaryBtn>
            <OutlineBtn variants={fade}>Download CSV</OutlineBtn>
          </ButtonRow>
        </Right>
      </Card>
    </Wrapper>
  );
}

export default About;

/* 🔥 Styled Components Below */

const Wrapper = styled(motion.section)`
  width: 100%;
  min-height: 100vh;
  background: #1b1b1b;
  padding-top: 5rem;

  margin-bottom: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Card = styled(motion.div)`
  width: 75rem;
  background: #111;
  padding: 3rem;
  border-radius: 1.5rem;
  display: flex;
  gap: 3rem;
  box-shadow: 0 0 3rem rgba(0, 0, 0, 0.4);
`;

const Left = styled(motion.div)`
  position: relative;
  display: flex;
  flex-direction: column;
`;

const ImageWrapper = styled(motion.div)`
  background: #1b1b1b;
  padding: 1.5rem;
  border-radius: 1rem;

  img {
    width: 25rem;
    border-radius: 1rem;
  }
`;

const SocialBar = styled(motion.div)`
  background: white;
  padding: 0.5rem 0.5rem;
  border-radius: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  a {
    color: #1b1b1b;
    font-size: 1.2rem;
    font-weight: 700;
    transition: 0.2s;

    &:hover {
      color: #23d997;
      transform: scale(1.2);
    }
  }
`;

const Right = styled(motion.div)`
  flex: 1;

  h1 {
    font-size: 2.2rem;
    font-weight: 700;
    color: white;
    margin-bottom: 1.5rem;
    line-height: 3rem;
  }

  p {
    margin-bottom: 1.5rem;
    font-size: 1.1rem;
    color: #e0e0e0;
    line-height: 1.8rem;
  }
`;

const ButtonRow = styled(motion.div)`
  display: flex;
  gap: 1.5rem;
  margin-top: 1rem;
`;

const PrimaryBtn = styled(motion.button)`
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    transform: scale(1.05);
    opacity: 0.9;
  }
`;

const OutlineBtn = styled(motion.button)`
  transition: 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`;

const Frame1 = styled(motion.div)`
  height: 100vh;
  width: 100%;
  background-color: #fffebf;
  position: fixed;
  top: 10%;
  left: 0;
  z-index: 2;
`;

const Frame2 = styled(Frame1)`
  background-color: #ff8ebf;
`;
const Frame3 = styled(Frame1)`
  background-color: #8ed2ff;
`;
const Frame4 = styled(Frame1)`
  background-color: #8effa0;
`;
