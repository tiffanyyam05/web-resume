function PageControls({ page, total, onPrevious, onNext }) {
  return (
    <div className="page-controls">
      <button className="arrow-btn" onClick={onPrevious} disabled={page === 0} aria-label="Previous page">←</button>
      <div className="page-indicator">{page + 1} / {total}</div>
      <button className="arrow-btn" onClick={onNext} disabled={page === total - 1} aria-label="Next page">→</button>
    </div>
  );
}

export default PageControls;
