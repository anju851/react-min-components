import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
import { response }  from "./data.js";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = '/react-tabs-project';

const jobList = response;

function App() {

  const [activeJob, setActiveJob] = useState(jobList[0]);

  console.log("jobList: " + jobList);

  function handleJobDescription(job){
    setActiveJob(job);
  }

  return (
    <section className="section">
      <div className="title">
        <h2>experience</h2>
        <div className="underline"></div>
      </div>
      <div className="jobs-center">
        {/* btn container */}
        <div className="btn-container">
          {jobList.map((job) => (
            <ul key={job.id}>
              <button
                className="job-btn"
                onClick={() => handleJobDescription(job)}
              >
                {job.company}
              </button>
            </ul>
          ))}
        </div>

        {/* job info */}
        <article className="job-info">
          <h3>{activeJob.title}</h3>
          <h4>{activeJob.company}</h4>
          <p className="job-date">{activeJob.dates}</p>
          {activeJob.duties.map((duty) => (
            <p className="job-desc">{duty}</p>
          ))}
        </article>
      </div>
    </section>
  );
}

export default App
