import { useState } from "react";
import type { Job } from "../data/jobs";

interface JobCardProps {
  job: Job;
}

const JobCard: React.FC<JobCardProps> = ({ job }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="job-card">
      <div className="job-card__header">
        <div className="job-card__company-badge">
          {job.company.charAt(0)}
        </div>
        <div className="job-card__header-info">
          <h3 className="job-card__title">{job.title}</h3>
          <p className="job-card__company">{job.company}</p>
        </div>
      </div>

      <div className="job-card__tags">
        <span className="job-card__tag job-card__tag--location">
          {job.location}
        </span>
        <span className="job-card__tag job-card__tag--type">
          {job.type}
        </span>
        <span className="job-card__tag job-card__tag--salary">
          {job.salary}
        </span>
      </div>

      {showDetails && (
        <div className="job-card__details">
          <div className="job-card__description">
            <h4>Description</h4>
            <p>{job.description}</p>
          </div>
          <div className="job-card__requirements">
            <h4>Requirements</h4>
            <ul>
              {job.requirements.map((req, index) => (
                <li key={index}>{req}</li>
              ))}
            </ul>
          </div>
          <p className="job-card__posted">
            Posted: {new Date(job.postedDate).toLocaleDateString("en-NG", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>
      )}

      <button
        className={`job-card__toggle ${showDetails ? "job-card__toggle--active" : ""}`}
        onClick={() => setShowDetails(!showDetails)}
      >
        {showDetails ? "Hide Details" : "Show Details"}
      </button>
    </div>
  );
};

export default JobCard;
