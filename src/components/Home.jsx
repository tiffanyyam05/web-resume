import { useState } from "react";
import PageControls from "./PageControls";


function Home() {
  const [page, setPage] = useState(0);
  const pages = [
    <>
      <div className="eyebrow">Home</div>
      <h2>About Me</h2>
      <div className="home-intro">
        <p>
          Hi, I'm Tiffany. I'm a computer science student interested in web development and 
          game development, and I'm currently making my own Roblox game. 
          <br/><br/>
          Welcome to my online resume. On this website you can find my 
          education, work experience, projects, skills, and certifications. 
          Feel free to contact me at the email below.
        </p>
        <img className="profile-photo" src="/photos/tiffanyyam.jpg" alt="Tiffany Yam"/>
        </div>
        <div className="bubble-list">
        <span className="pill">New York, NY</span>
        <a
          className="pill"
          href="mailto:tiffanyyam05@gmail.com"
        >
          tiffanyyam05@gmail.com
        </a>
        <a
          className="pill"
          href="https://www.linkedin.com/in/tiffany-yam-2ba7912b4/"
          target="_blank"
          rel="noopener noreferrer"
        >
          My LinkedIn
        </a>
      </div>
    </>
  ];
  return <section className="section-with-controls"><article className="resume-page">{pages[page]}</article><PageControls page={page} total={pages.length} onPrevious={() => setPage(page - 1)} onNext={() => setPage(page + 1)} /></section>;
}
export default Home;