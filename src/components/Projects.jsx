import { useState } from "react";
import PageControls from "./PageControls";

function Projects() {
  const [page, setPage] = useState(0);
  const pages = [
    <>
      <div className="eyebrow">Projects</div>
      <h2>Online Resume</h2>
      <p>
        
      </p>
      <p><strong>Skills used:</strong></p>
      <div className="bubble-list">
        <span className="pill">React</span>
        <span className="pill">JavaScript</span>
        <span className="pill">HTML</span>
        <span className="pill">CSS</span>
      </div>
    </>,
    <>
      <div className="eyebrow">Projects</div>
      <h2>Roblox Escape Room</h2>
      <p className="meta">Lua · Roblox Studio · 3D Design</p>
      <p>
        I am currently working on a Roblox multiplayer escape room 
        game. The main setting is a large, vintage style library where 
        some areas are locked at first. Players explore the library to 
        find special books that will transport them inside an escape 
        room. Once the escape room is completed, more parts of the 
        library will be available to the player, unlocking more escape 
        rooms as the player progresses.
      </p>
      <p><strong>Skills used:</strong></p>
      <div className="bubble-list">
        <span className="pill">Roblox Studio</span>
        <span className="pill">Lua</span>
        <span className="pill">Game Design & Development</span>
        <span className="pill">3D Modeling</span>
      </div>
      <h2>URL Shortener</h2>
      <p className="meta">MongoDB · Web Development</p>
      <p>A URL-shortening project using MongoDB for data storage.</p>
    </>
  ];
  return <section className="section-with-controls"><article className="resume-page">{pages[page]}</article><PageControls page={page} total={pages.length} onPrevious={() => setPage(page - 1)} onNext={() => setPage(page + 1)} /></section>;
}
export default Projects;
