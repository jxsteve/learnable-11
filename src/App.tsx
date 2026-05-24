import jobs from "./data/jobs";
import JobList from "./components/JobList";
import "./App.css";

function App() {
  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="header__container">
          <h1 className="header__title">JobBoard</h1>
          <p className="header__subtitle">
            Discover your next career opportunity
          </p>
        </div>
      </header>

      {/* Job Listings */}
      <main className="main">
        <JobList jobs={jobs} />
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2026 JobBoard. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
