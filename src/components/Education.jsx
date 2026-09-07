import { useState } from "react";
import PageControls from "./PageControls";

function Education() {
  const [page, setPage] = useState(0);
  const pages = [
    <>
      <div className="eyebrow">Education</div>
      <div class="grid">
        <article class="entry">
          <h2>Boston University</h2>
          <div class="entry-header">
            <h3>B.A. in Computer Science</h3>
            <div class="date">Sept 2023 - Dec 2026</div>
          </div>
          <p>
            I'm currently a senior at Boston University studying computer 
            science. I am expected to graduate December 2026.
          </p>
          <p>
            My current GPA is 3.67.
          </p>
          <div className="list">
            <p>Relevant coursework:</p>
            <ul>
              <li>Introduction to Databases</li>
              <li>Introduction to Artificial Intelligence</li>
              <li>Software Engineering</li>
              <li>Full-Stack App Design & Development</li>
              <li>Web Application Development</li>
              <li>Foundations of Data Science</li>
              <li>Fundamentals of Computing Systems</li>
              <li>Analysis of Algorithms</li>
              <li>Concepts of Programming Languages</li>
              <li>Probability in Computing</li>
              <li>Computer Systems</li>
              <li>Geometric Algorithms</li>
              <li>Combinatoric Structures</li>
            </ul>
          </div>
        </article>
      </div>
    </>
  ];
  return <section className="section-with-controls"><article className="resume-page">{pages[page]}</article><PageControls page={page} total={pages.length} onPrevious={() => setPage(page - 1)} onNext={() => setPage(page + 1)} /></section>;
}
export default Education;
