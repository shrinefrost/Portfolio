import styled from "styled-components";
import { motion } from "framer-motion";
function Wave() {
  return (
    <WaveSvg viewBox="0 0 1600 500" xmlns="http://www.w3.org/2000/svg">
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.75 }}
        d="M 0 150 Q 400 50, 800 250 Q 1200 450, 1600 350"
        stroke="#b388a8"
        stroke-width="7"
        stroke-opacity="0.7"
        fill="none"
        stroke-linecap="round"
      />
    </WaveSvg>
  );
}

const WaveSvg = styled.svg`
  position: absolute;
  left: 0;
  z-index: 1;
`;
export default Wave;
