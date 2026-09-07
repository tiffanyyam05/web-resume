import { useEffect, useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import "./App.css";

const pages = { home: Home, education: Education, experience: Experience, projects: Projects, skills: Skills, certifications: Certifications };

function App() {
  const [currentSection, setCurrentSection] = useState("home");
  const CurrentPage = pages[currentSection];
  useEffect(() => { window.scrollTo({ top: 0, behavior: "smooth" }); }, [currentSection]);
  return <div className="app"><Header /><div className="layout"><Sidebar sections={Object.keys(pages)} currentSection={currentSection} onSectionChange={setCurrentSection} /><main className="content"><CurrentPage /></main></div></div>;
}
export default App;
