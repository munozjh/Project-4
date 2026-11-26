function AboutSection() {
  return (
    <section className="about-section">
      <h2>About This Project</h2>
      <p>
        <strong>TaskFlow</strong> is a responsive frontend task management application
        designed to help users organize daily activities efficiently.
      </p>
      <h3>Key Features & React Concepts Used:</h3>
      <ul>
        <li><strong>Components & Props:</strong> Modular UI broken into reusable components.</li>
        <li><strong>State & LocalStorage:</strong> Real-time updates persisted in the browser.</li>
        <li><strong>Filtering & Search:</strong> Instant task filtering by status and keyword.</li>
        <li><strong>Conditional Rendering:</strong> Dynamic UI states for views, badges, and empty states.</li>
      </ul>
    </section>
  );
}

export default AboutSection;