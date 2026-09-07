import { useState } from "react";
import PageControls from "./PageControls";

function Certifications() {
  const [page, setPage] = useState(0);
  const pages = [
    <>
      <div className="eyebrow">Certifications</div>
      <div class="grid">
        <article class="entry">
          <h2>Intermediate Technical Interview Prep</h2>
          <img className="cert" src="/public/TIP 102.png" alt="TIP 102 certificate"/>
          <br/>
          <p><strong>Skills used:</strong></p>
          <div className="bubble-list">
            <span className="pill">Python</span>
            <span className="pill">Data Structures</span>
            <span className="pill">Problem Solving</span>
          </div>
        </article>
      </div>
    </>,
    <>
      <div className="eyebrow">Certifications</div>
      <div class="grid">
        <article class="entry">
          <h2>Intro to Web Development</h2>
          <img className="cert" src="/public/WEB 101.png" alt="WEB 101 certificate"/>
          <br/>
          <p><strong>Skills used:</strong></p>
          <div className="bubble-list">
            <span className="pill">Web Development & Design</span>
            <span className="pill">JavaScript</span>
            <span className="pill">HTML</span>
            <span className="pill">CSS</span>
          </div>
        </article>
      </div>
    </>
  ];
  return <section className="section-with-controls"><article className="resume-page">{pages[page]}</article><PageControls page={page} total={pages.length} onPrevious={() => setPage(page - 1)} onNext={() => setPage(page + 1)} /></section>;
}
export default Certifications;
