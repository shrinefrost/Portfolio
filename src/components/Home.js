import profilePhoto from "../photos/profilePhoto.png";
function Home() {
  return (
    <div>
      <main>
        <div>
          <div>
            <h1>
              Hello, I'm
              <br />
              Brooklyn Gilbert
            </h1>
            <p>
              I'm a Freelance <span>UI/UX Designer</span> and{" "}
              <span>Developer</span> based in London, England. I strives to
              build immersive and beautiful web applications through carefully
              crafted code and user-centric design.
            </p>
            <button>Say Hello</button>

            <div>
              <div>
                <div>15 Y.</div>
                <div>Experience</div>
              </div>
              <div>
                <div>250 +</div>
                <div>Project Completed</div>
              </div>
              <div>
                <div>58</div>
                <div>Happy Clients</div>
              </div>
            </div>
          </div>

          <div>
            <img src={profilePhoto} alt="Brooklyn Gilbert" />
          </div>
        </div>
      </main>
    </div>
  );
}
export default Home;
