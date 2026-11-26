// Header component receives activeTab and setActiveTab as props from App.jsx
function Header({ activeTab, setActiveTab, taskStats }) {
  return (
    <header className="app-header">
      <div className="header-top">
        <h1>TaskFlow</h1>
        {/* Navigation buttons to switch between views */}
        <nav className="nav-tabs">
          <button
            className={activeTab === 'tasks' ? 'nav-btn active' : 'nav-btn'}
            onClick={() => setActiveTab('tasks')}
          >
            My Tasks
          </button>
          <button
            className={activeTab === 'about' ? 'nav-btn active' : 'nav-btn'}
            onClick={() => setActiveTab('about')}
          >
            About
          </button>
        </nav>
      </div>

      {/* Displays dynamic task statistics passed via props */}
      <p className="subtitle">
        Total: {taskStats.total} | Completed: {taskStats.completed} | Pending: {taskStats.pending}
      </p>
    </header>
  );
}

export default Header;