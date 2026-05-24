import type { Job } from "../data/jobs";
import JobCard from "./JobCard";

interface JobListProps {
  jobs: Job[];
}

const JobList: React.FC<JobListProps> = ({ jobs }) => {
  if (jobs.length === 0) {
    return (
      <div className="job-list__empty">
        <div className="job-list__empty-icon">
          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
          </svg>
        </div>
        <h2>No jobs available at the moment.</h2>
        <p>Please check back later for new opportunities.</p>
      </div>
    );
  }

  return (
    <div className="job-list">
      <p className="job-list__count">
        Showing <strong>{jobs.length}</strong> job{jobs.length !== 1 ? "s" : ""}
      </p>
      <div className="job-list__grid">
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default JobList;
