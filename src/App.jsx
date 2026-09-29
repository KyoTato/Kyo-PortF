import React, { useEffect, useState } from "react";
import {
  ArrowUpRight,
  Menu,
  X,
  Github,
  Instagram,
  Linkedin,
  Mail,
  ArrowDown,
} from "lucide-react";
import AuraBackground from "./components/AuraBackground.jsx";
import TechText from "./components/TechText.jsx";
import CircularCarousel from "./components/CircularCarousel.jsx";
import AccordionGallery from "./components/AccordionGallery.jsx";
import ScrollExpand from "./components/ScrollExpand.jsx";

const pages = ["Home", "About", "Skills", "Projects", "Contact"];
const projects = [
  {
    src: "https://picsum.photos/id/1015/900/1200",
    alt: "Mountain valley landscape",
    title: "Valley",
    subtitle: "Visual study",
  },
  {
    src: "https://picsum.photos/id/1018/900/1200",
    alt: "Mountain ridgeline",
    title: "Ridgeline",
    subtitle: "Photography",
  },
  {
    src: "https://picsum.photos/id/1039/900/1200",
    alt: "Waterfall",
    title: "Falls",
    subtitle: "Exploration",
  },
];
const gallery = [
  { image: "https://picsum.photos/id/1015/900/1200", label: "Valley" },
  { image: "https://picsum.photos/id/1018/900/1200", label: "Ridgeline" },
  { image: "https://picsum.photos/id/1039/900/1200", label: "Falls" },
  { image: "https://picsum.photos/id/1043/900/1200", label: "Harbour" },
  { image: "https://picsum.photos/id/1044/900/1200", label: "Skyline" },
];
function App() {
  const [page, setPage] = useState("Home"),
    [menu, setMenu] = useState(false);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);
  const go = (p) => {
    setPage(p);
    setMenu(false);
  };
  return (
    <main className="site">
      <AuraBackground />
      <div className="content">
        <header className="nav">
          <button className="brand" onClick={() => go("Home")}>
            Kyo <small>PORTFOLIO / 2026</small>
          </button>
          <nav className={menu ? "nav-links open" : "nav-links"}>
            {pages.map((p, i) => (
              <button
                key={p}
                className={page === p ? "selected" : ""}
                onClick={() => go(p)}>
                <span>0{i + 1}</span>
                {p}
              </button>
            ))}
          </nav>
          <button
            className="menu-btn"
            onClick={() => setMenu(!menu)}
            aria-label="Toggle navigation">
            {menu ? <X /> : <Menu />}
          </button>
        </header>
        {page === "Home" && (
          <>
            <section className="hero">
              <div className="hero-kicker">
                <span className="live-dot" /> AVAILABLE FOR OPPORTUNITIES{" "}
                <span>BASED IN THE PHILIPPINES</span>
              </div>
              <div className="hero-title">
                <TechText text="Portfolio" />
                <div className="hero-side">
                  A DIGITAL SPACE
                  <br />
                  FOR IDEAS & WORK.
                </div>
              </div>
              <div className="hero-bottom">
                <p>
                  I'm Kyo — a BSIT student exploring the intersection of
                  technology, design, and creative problem-solving.
                </p>
                <button className="round-link" onClick={() => go("About")}>
                  DISCOVER MORE <ArrowUpRight size={17} />
                </button>
                <span className="scroll-label">
                  <ArrowDown size={14} /> SCROLL TO EXPLORE
                </span>
              </div>
            </section>
            <ScrollExpand
              src="https://images.unsplash.com/photo-1519608487953-e999c86e7455?w=1800&q=85"
              alt="Night sky with stars"
              title="Curiosity into creation">
              <p>
                Learning, building, and finding new ways to bring ideas to life.
              </p>
            </ScrollExpand>
            <section className="section">
              <div className="section-head">
                <span>01 / SELECTED WORK</span>
                <button onClick={() => go("Projects")}>
                  ALL PROJECTS <ArrowUpRight size={15} />
                </button>
              </div>
              <CircularCarousel items={projects} />
            </section>
          </>
        )}
        {page === "About" && (
          <section className="page-section">
            <div className="eyebrow">02 / THE PERSON BEHIND THE PIXELS</div>
            <h1>
              Curious by nature.
              <br />
              <em>Driven to create.</em>
            </h1>
            <div className="about-grid">
              <div className="about-image">
                <img
                  src="https://images.unsplash.com/photo-1519681393784-d120267933ba?w=900&q=85"
                  alt="Mountain beneath a starry sky"
                />
              </div>
              <div className="about-copy">
                <h2>A little about me</h2>
                <p>
                  Hi, I'm Kyo, a Bachelor of Science in Information Technology
                  student. I'm interested in how technology can turn simple
                  ideas into useful, thoughtful experiences.
                </p>
                <p>
                  I'm currently building my skills in programming, web
                  development, and design. This portfolio is a place to document
                  what I learn and the projects I create along the way.
                </p>
                <div className="fact-list">
                  <div>
                    <span>01</span> EDUCATION <b>BS Information Technology</b>
                  </div>
                  <div>
                    <span>02</span> INTERESTS{" "}
                    <b>Web development · Design · Tech</b>
                  </div>
                  <div>
                    <span>03</span> APPROACH <b>Learn, experiment, improve</b>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
        {page === "Skills" && (
          <section className="page-section">
            <div className="eyebrow">03 / WHAT I'M LEARNING</div>
            <h1>
              Tools for the
              <br />
              <em>next idea.</em>
            </h1>
            <p className="lead">
              A growing toolkit shaped by coursework, practice, and curiosity.
            </p>
            <div className="skill-grid">
              {[
                ["01", "Web development", "HTML · CSS · JavaScript"],
                ["02", "Programming", "Python · Problem solving"],
                ["03", "Creative tools", "UI layout · Visual design"],
                ["04", "Foundations", "Computer systems · Networking"],
              ].map(([n, t, d]) => (
                <article className="skill-card" key={n}>
                  <span>{n}</span>
                  <h2>{t}</h2>
                  <p>{d}</p>
                  <div className="skill-line" />
                </article>
              ))}
            </div>
            <p className="note">
              Will update this section as I learn new skills and tools.
            </p>
          </section>
        )}
        {page === "Projects" && (
          <section className="page-section">
            <div className="eyebrow">04 / SELECTED WORK</div>
            <h1>
              Ideas made
              <br />
              <em>visible.</em>
            </h1>
            <p className="lead">
              A visual collection and a starting point for showcasing my work.
            </p>
            <AccordionGallery items={gallery} />
            <div className="project-note">
              <span>01 — 05</span>
              <p>
                Will update this when I have projects to showcase. Or if I want to show some of my photography work.
              </p>
            </div>
          </section>
        )}
        {page === "Contact" && (
          <section className="page-section contact-page">
            <div className="eyebrow">05 / SAY HELLO</div>
            <h1>
              Have an idea?
              <br />
              <em>Let's connect.</em>
            </h1>
            <div className="contact-grid">
              <div>
                <p className="lead">
                  Have a question, a project, or just want to connect? Send me a
                  message.
                </p>
                <a className="email-link" href="mailto:hello@example.com">
                  hello@example.com <ArrowUpRight size={18} />
                </a>
                <div className="socials">
                  <a href="https://github.com" target="_blank" rel="noreferrer">
                    <Github /> GitHub
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noreferrer">
                    <Instagram /> Instagram
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noreferrer">
                    <Linkedin /> LinkedIn
                  </a>
                </div>
              </div>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert(
                    "This demo form is ready to connect to an email service.",
                  );
                }}>
                <label>
                  Your name
                  <input required placeholder="Name" />
                </label>
                <label>
                  Email address
                  <input required type="email" placeholder="you@example.com" />
                </label>
                <label>
                  Message
                  <textarea
                    required
                    rows="4"
                    placeholder="Tell me what's on your mind..."
                  />
                </label>
                <button className="submit-btn" type="submit">
                  SEND MESSAGE <ArrowUpRight size={16} />
                </button>
                <small>
                  Demo form — connect an email service to receive submissions.
                </small>
              </form>
            </div>
          </section>
        )}
        <footer className="footer">
          <span>© 2026 Kyo</span>
          <span>
            DESIGNED WITH CURIOSITY <b>✳</b>
          </span>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            BACK TO TOP ↑
          </button>
        </footer>
      </div>
    </main>
  );
}
export default App;
