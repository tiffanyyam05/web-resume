function Sidebar({ sections, currentSection, onSectionChange }) {
  return (
    <aside className="sidebar">
      <nav aria-label="Resume sections">
        {sections.map((section) => (
          <button
            key={section}
            className={`nav-button ${currentSection === section ? "active" : ""}`}
            onClick={() => onSectionChange(section)}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </button>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;
