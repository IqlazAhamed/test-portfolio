import { useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

export default function App() {
  const sectionsRef = useRef([]);

  /* =====================
     SMOOTH SCROLL
  ====================== */
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  /* =====================
     SCROLL ANIMATION
  ====================== */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.15 }
    );

    sectionsRef.current.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  /* =====================
     TERMINAL TYPING
  ====================== */
  useEffect(() => {
    const text = "Software Developer";
    let i = 0;
    const el = document.getElementById("typing");

    if (!el) return;

    // IMPORTANT: clear previous text
    el.textContent = "";

    const interval = setInterval(() => {
      if (i < text.length) {
        el.textContent += text.charAt(i);
        i++;
      } else {
        clearInterval(interval);
      }
    }, 80);

    return () => clearInterval(interval);
  }, []);


  return (
    <div className="app">
      {/* =====================
          SIDEBAR
      ====================== */}
      <aside className="sidebar">
        <button data-label="Home" onClick={() => scrollToSection("home")}>🏠</button>
        <button data-label="About" onClick={() => scrollToSection("about")}>👤</button>
        <button data-label="Skills" onClick={() => scrollToSection("skills")}>🛠</button>
        <button data-label="Projects" onClick={() => scrollToSection("projects")}>📂</button>
        <button data-label="Education" onClick={() => scrollToSection("education")}>🎓</button>
        <button data-label="Contact" onClick={() => scrollToSection("contact")}>📧</button>
      </aside>


      {/* =====================
          MAIN CONTENT
      ====================== */}
      <main className="content container">

        {/* TERMINAL */}
        <div className="terminal mb-5">
          <p className="text-success mb-1">iqlaaz@portfolio:~$ whoami</p>
          <p className="mb-1 terminal-line">
            <span id="typing"></span>
            <span className="cursor">_</span>
          </p>

        </div>

        {/* HOME */}
        <section
          id="home"
          ref={(el) => (sectionsRef.current[0] = el)}
          className="section fade"
        >
          <div className="card p-4">
            <h1 className="fw-bold">
              Hi, I'm <span className="text-primary">Iqlaz Ahamed</span>
            </h1>
            <p className="text-secondary">
              Full Stack Developer (MERN)
            </p>
            <p>
              Passionate software developer focused on building scalable,
              secure, and user-centric web applications.
            </p>
          </div>
        </section>

        {/* ABOUT */}
        <section
          id="about"
          ref={(el) => (sectionsRef.current[1] = el)}
          className="section fade"
        >
          <div className="card p-4">
            <h3 className="text-primary">About Me</h3>
            <p>
              I am a motivated and detail-oriented software developer with
              hands-on experience in MERN Stack, .NET, SQL, and NoSQL databases.
            </p>
            <p>
              I enjoy converting complex requirements into clean,
              maintainable, and scalable solutions.
            </p>
          </div>
        </section>

        {/* SKILLS */}
        <section
          id="skills"
          ref={(el) => (sectionsRef.current[2] = el)}
          className="section fade"
        >
          <div className="card p-4">
            <h3 className="text-primary">Skills</h3>
            <div className="skill-tags">
              <span>⚛ React</span>
              <span>🧠 JavaScript</span>
              <span>🎨 HTML & CSS</span>
              <span>🅱 Bootstrap</span>
              <span>🌐 Node.js</span>
              <span>🚀 Express</span>
              <span>🍃 MongoDB</span>
              <span>🐬 MySQL</span>
              <span>⚙️ .NET</span>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section
          id="projects"
          ref={(el) => (sectionsRef.current[3] = el)}
          className="section fade"
        >
          <h3 className="text-primary mb-3">Projects</h3>

          <div className="row g-4">
            <div className="col-md-6">
              <div className="project-card">
                <h5>Truck Booking System</h5>
                <p className="text-secondary">
                  HTML • JS • .NET • SQL
                </p>
                <p>
                  Real-time truck booking platform with trip scheduling
                  and route tracking.
                </p>
              </div>
            </div>

            <div className="col-md-6">
              <div className="project-card">
                <h5>Hotel Room Booking System</h5>
                <p className="text-secondary">MERN Stack</p>
                <p>
                  Full-stack hotel booking application with authentication
                  and booking history.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* EDUCATION */}
        <section
          id="education"
          ref={(el) => (sectionsRef.current[4] = el)}
          className="section fade"
        >
          <div className="card p-4">
            <h3 className="text-primary">Education</h3>
            <p><strong>MCA</strong> — 2024 (Present)</p>
            <p><strong>BCA</strong> — 2021–2024</p>
          </div>
        </section>

        {/* CONTACT */}
        <section
          id="contact"
          ref={(el) => (sectionsRef.current[5] = el)}
          className="section fade"
        >
          <div className="card p-4 text-center">
            <h3 className="text-primary">Contact</h3>
            <p>📧 iqlazahamed13@gmail.com</p>
            <p>📞 +91 7338866176</p>
          </div>
        </section>

      </main>
    </div>
  );
}
