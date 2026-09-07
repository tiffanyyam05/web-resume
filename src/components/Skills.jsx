import { useState } from "react";
import PageControls from "./PageControls";

function Skills() {
  const [page, setPage] = useState(0);
  const pages = [
    <>
      <div className="eyebrow">Skills</div>
      <div class="grid">
        <article class="entry">
          <h2>Programming</h2>
          <div className="bubble-list">
            <span className="pill">Python</span>
            <span className="pill">Java</span>
            <span className="pill">C</span>
            <span className="pill">JavaScript</span>
            <span className="pill">TypeScript</span>
            <span className="pill">HTML</span>
            <span className="pill">CSS</span>
            <span className="pill">SQL</span>
            <span className="pill">Lua</span>
          </div>
        </article>
        <article class="entry">
          <h2>Frameworks & Libraries</h2>
          <div className="bubble-list">
            <span className="pill">React</span>
            <span className="pill">Vite</span>
            <span className="pill">NumPy</span>
            <span className="pill">Pandas</span>
            <span className="pill">Matplotlib</span>
          </div>
        </article>
        <article class="entry">
          <h2>Tools & Technologies</h2>
          <div className="bubble-list">
            <span className="pill">Git/GitHub</span>
            <span className="pill">Vercel</span>
            <span className="pill">MongoDB</span>
            <span className="pill">Roblox Studio</span>
            <span className="pill">Blender</span>
          </div>
        </article>
      </div>
    </>
  ];
  return <section className="section-with-controls"><article className="resume-page">{pages[page]}</article><PageControls page={page} total={pages.length} onPrevious={() => setPage(page - 1)} onNext={() => setPage(page + 1)} /></section>;
}
export default Skills;
