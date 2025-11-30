import styled from "styled-components";
import project1 from "../photos/project1.svg";
import project2 from "../photos/project2.svg";
import project3 from "../photos/project3.svg";
import project4 from "../photos/project4.svg";
import project5 from "../photos/project5.svg";
import project6 from "../photos/project6.svg";
import { PageAnimation } from "./PageAnimation";
import { motion } from "framer-motion";

function Projects() {
  return (
    <Section
      id="projects"
      variants={PageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <Header>
        <Title>Projects</Title>
      </Header>

      <Grid>
        {projects.map((project) => (
          <Card key={project.id}>
            <ImageWrapper>
              <img src={project.image} alt={project.title} />
            </ImageWrapper>
            <CardContent>
              <Category>{project.category}</Category>
              <CardTitle>{project.title}</CardTitle>
              <Description>{project.description}</Description>
              <CaseStudyLink href="#case-study">Case Study</CaseStudyLink>
            </CardContent>
          </Card>
        ))}
      </Grid>
    </Section>
  );
}
// Styled Components
const Section = styled(motion.section)`
  min-height: 90vh;
  padding: 5rem 2rem;
  max-width: 75rem;
  margin: 0 auto;
  padding-bottom: 2rem;
`;

const Header = styled.div`
  margin-top: 1rem;
  text-align: center;
  margin-bottom: 2rem;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #ffffff;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(19rem, 1fr));
  gap: 1rem;
  margin-bottom: 2rem;
`;

const Card = styled.div`
  background: #111;
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 0 2rem rgba(0, 0, 0, 0.5);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-0.5rem);
    box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.15);
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 9rem;
  overflow: hidden;

  img {
    width: 90%;
    height: 90%;
    object-fit: cover;
  }
`;

const CardContent = styled.div`
  padding: 1.5rem;
`;

const Category = styled.span`
  display: inline-block;
  font-size: 0.875rem;
  color: #23d997;
  font-weight: 500;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

const CardTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
  color: white;
`;

const Description = styled.p`
  font-size: 0.9375rem;
  color: white;
  line-height: 1.6;
  margin-bottom: 1.25rem;
`;

const CaseStudyLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: bold;
  font-size: 1.1rem;
  cursor: pointer;
  padding: 1rem 2rem;
  border: 3px solid #23d997;
  background: transparent;
  color: white;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background-color: #23d997;
    color: white;
  }
  transition: all ease-in-out 0.5s;

  &::after {
    content: "→";
    font-size: 1.125rem;
  }
`;

// Project data using imported images
const projects = [
  {
    id: 1,
    image: project1,
    category: "UI UX Design",
    title: "Product Admin Dashboard",
    description:
      "Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus.",
  },
  {
    id: 2,
    image: project2,
    category: "UI UX Design",
    title: "Product Admin Dashboard",
    description:
      "Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus.",
  },
  {
    id: 3,
    image: project3,
    category: "UI UX Design",
    title: "Product Admin Dashboard",
    description:
      "Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus.",
  },
  {
    id: 4,
    image: project4,
    category: "UI UX Design",
    title: "Product Admin Dashboard",
    description:
      "Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus.",
  },
  {
    id: 5,
    image: project5,
    category: "UI UX Design",
    title: "Product Admin Dashboard",
    description:
      "Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus.",
  },
  {
    id: 6,
    image: project6,
    category: "UI UX Design",
    title: "Product Admin Dashboard",
    description:
      "Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus.",
  },
];
export default Projects;
