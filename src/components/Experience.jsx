import { useState } from "react";
import PageControls from "./PageControls";

function Experience() {
  const [page, setPage] = useState(0);
  const pages = [
    <>
      <div className="eyebrow">Work Experience</div>
      <div class="grid">
        <article class="entry">
          <h2>STEM Instructor</h2>
          <div class="entry-header">
            <div>
              <h3>Lavner Education · New York, NY</h3>
            </div>
            <div class="date">June - Aug 2026</div>
          </div>
          <p>
            I worked as an instructor at a summer camp on the NYU campus. 
            Over two months, I worked with over 100 students and taught 
            several classes, such as: 
          </p>
          <div className="list">
            <ul>
              <li>Agentic AI & Machine Learning</li>
              <li>Roblox with Custom Obbies & Lua Coding</li>
              <li>AI Innovators: Machine Learning, ChatGPT, & More</li>
              <li>Roblox with Game Design, AI, & Competitions</li>
              <li>CGI and Animation</li>
            </ul>
          </div>
          <br/>
          <p><strong>Skills used:</strong></p>
          <div className="bubble-list">
            <span className="pill">Python</span>
            <span className="pill">Game Design & Development</span>
            <span className="pill">3D Modeling</span>
          </div>
          <p><strong>Tools used:</strong></p>
          <div className="bubble-list">
            <span className="pill">Roblox Studio</span>
            <span className="pill">Scratch</span>
            <span className="pill">Blender</span>
          </div>
        </article>
      </div>
    </>,
    <>
      <div className="eyebrow">Work Experience</div>
      <div class="grid">
        <article class="entry">
          <h2>Teacher</h2>
          <div class="entry-header">
            <div>
              <h3>Newton Institute · New York, NY</h3>
            </div>
            <div class="date">2023, 2024</div>
          </div>
          <p>
            I worked at Newton Institute during the school year of 2023 and 
            summer of 2024. Newton Institute is an afterschool where students 
            learn English and math, do their homework, and receive tutoring.
            <br/><br/>
            There I taught classes of fourth and sixth grade students with 
            around 20 students in each class. I taught math, reading 
            comprehension, and grammar. I also checked students' daily homework 
            across multiple subjects and helped the student revise it when there 
            were errors.
          </p>
          <br/>
          <p><strong>Skills used:</strong></p>
          <div className="bubble-list">
            <span className="pill">Teaching & Tutoring</span>
            <span className="pill">Classroom Management</span>
            <span className="pill">Communication</span>
          </div>
        </article>
      </div>
    </>
  ];
  return <section className="section-with-controls"><article className="resume-page">{pages[page]}</article><PageControls page={page} total={pages.length} onPrevious={() => setPage(page - 1)} onNext={() => setPage(page + 1)} /></section>;
}
export default Experience;
