import { useState } from "react";
import PageControls from "./PageControls";

function Projects() {
  const [page, setPage] = useState(0);
  const pages = [
    <>
      <div className="eyebrow">Projects</div>
      <h2>Online Resume</h2>
      <p className="meta">React · TypeScript · HTML · CSS · Vercel</p>
      <p>A responsive personal resume website with multiple sections, independent page navigation, and a purple-themed interface.</p>
    </>,
    <>
      <div className="eyebrow">Projects</div>
      <h2>Roblox Escape Room</h2>
      <p className="meta">Lua · Roblox Studio · 3D Design</p>
      <p>A multiplayer escape-room game featuring custom environments, Lua scripting, and optimized game assets.</p>
      <h2>URL Shortener</h2>
      <p className="meta">MongoDB · Web Development</p>
      <p>A URL-shortening project using MongoDB for data storage.</p>
    </>
  ];
  return <section className="section-with-controls"><article className="resume-page">{pages[page]}</article><PageControls page={page} total={pages.length} onPrevious={() => setPage(page - 1)} onNext={() => setPage(page + 1)} /></section>;
}
export default Projects;
