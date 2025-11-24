function Contact() {
  return (
    <div>
      <section>
        <div>
          <div>
            <h2>Let's Discuss your Project</h2>
            <p>
              There are many variations of passages of Lorem Ipsu available. but
              the majority have suffered alte.
            </p>

            <div>
              <div>
                <span>Address :</span>
                <p>New Mexico 31134</p>
              </div>

              <div>
                <span>My Email :</span>
                <p>mymail@mail.com</p>
              </div>

              <div>
                <span>Call me now :</span>
                <p>00-1234-0000</p>
              </div>
            </div>

            <div>
              <a href="#facebook">Facebook</a>
              <a href="#dribbble">Dribbble</a>
              <a href="#behance">Behance</a>
              <a href="#instagram">Instagram</a>
              <a href="#linkedin">LinkedIn</a>
            </div>
          </div>

          <div>
            <p>
              There are many variations of passages of Lorem Ipsu available. but
              the majority have suffered alte.
            </p>

            <form>
              <div>
                <label for="name">Name*</label>
                <input type="text" id="name" name="name" required />
              </div>

              <div>
                <label for="email">Email*</label>
                <input type="email" id="email" name="email" required />
              </div>

              <div>
                <label for="location">Location*</label>
                <input type="text" id="location" name="location" required />
              </div>

              <div>
                <div>
                  <label for="budget">Budget*</label>
                  <input type="text" id="budget" name="budget" required />
                </div>

                <div>
                  <label for="subject">Subject*</label>
                  <input type="text" id="subject" name="subject" required />
                </div>
              </div>

              <div>
                <label for="message">Message*</label>
                <textarea id="message" name="message" required></textarea>
              </div>

              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </section>
      <footer>
        <div>
          <div>B</div>
          <span>Brooklyn</span>
        </div>

        <nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#process">Process</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#blog">Blog</a>
          <a href="#contact">Contact</a>
        </nav>
        <p>Copyright © 2022 Picto.</p>
      </footer>
    </div>
  );
}

export default Contact;
