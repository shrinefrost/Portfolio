import project1 from "../photos/project1.jpg";
import project2 from "../photos/project2.jpg";
import project3 from "../photos/project3.jpg";
import project4 from "../photos/project4.jpg";
import project5 from "../photos/project5.jpg";
import project6 from "../photos/project6.jpg";

function Projects() {
  return (
    <section>
      <h2>Portfolio</h2>
      <p>
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration.
      </p>

      <div>
        <div>
          <img src={project1} alt="Product Admin Dashboard" />
          <span>UI UX Design</span>
          <h3>Product Admin Dashboard</h3>
          <p>
            Vivamus eleifend convallis ante, non pharetra libero molestie
            laoreet. Donec id imperdiet lacus.
          </p>
          <a href="#case-study">Case Study</a>
        </div>

        <div>
          <img src={project2} alt="Product Admin Dashboard" />
          <span>UI UX Design</span>
          <h3>Product Admin Dashboard</h3>
          <p>
            Vivamus eleifend convallis ante, non pharetra libero molestie
            laoreet. Donec id imperdiet lacus.
          </p>
          <a href="#case-study">Case Study</a>
        </div>

        <div>
          <img src={project3} alt="Product Admin Dashboard" />
          <span>UI UX Design</span>
          <h3>Product Admin Dashboard</h3>
          <p>
            Vivamus eleifend convallis ante, non pharetra libero molestie
            laoreet. Donec id imperdiet lacus.
          </p>
          <a href="#case-study">Case Study</a>
        </div>

        <div>
          <img src={project4} alt="Product Admin Dashboard" />
          <span>UI UX Design</span>
          <h3>Product Admin Dashboard</h3>
          <p>
            Vivamus eleifend convallis ante, non pharetra libero molestie
            laoreet. Donec id imperdiet lacus.
          </p>
          <a href="#case-study">Case Study</a>
        </div>

        <div>
          <img src={project5} alt="Product Admin Dashboard" />
          <span>UI UX Design</span>
          <h3>Product Admin Dashboard</h3>
          <p>
            Vivamus eleifend convallis ante, non pharetra libero molestie
            laoreet. Donec id imperdiet lacus.
          </p>
          <a href="#case-study">Case Study</a>
        </div>

        <div>
          <img src={project6} alt="Product Admin Dashboard" />
          <span>UI UX Design</span>
          <h3>Product Admin Dashboard</h3>
          <p>
            Vivamus eleifend convallis ante, non pharetra libero molestie
            laoreet. Donec id imperdiet lacus.
          </p>
          <a href="#case-study">Case Study</a>
        </div>
      </div>

      <button>More Project</button>
    </section>
  );
}
export default Projects;
