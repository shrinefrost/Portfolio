import profilePhoto from "../photos/profilePhoto.png";

function About() {
  return (
    <section>
      <div>
        <div>
          <img src={profilePhoto} alt="Professional User Experience Designer" />

          <div>
            <a href="#facebook">Facebook</a>
            <a href="#dribbble">Dribbble</a>
            <a href="#instagram">Instagram</a>
            <a href="#linkedin">LinkedIn</a>
            <a href="#behance">Behance</a>
          </div>
        </div>

        <div>
          <h1>I'm Professional User Experience Designer</h1>

          <p>
            I design and develop services for customers specializing creating
            stylish, modern websites, web services and online stores. My passion
            is to design digital user experiences.
          </p>

          <p>
            I design and develop services for customers specializing creating
            stylish, modern websites
          </p>

          <div>
            <button>My Project</button>
            <button>Download CSV</button>
          </div>
        </div>
      </div>
    </section>
  );
}
export default About;
