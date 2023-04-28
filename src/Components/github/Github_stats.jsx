import React from "react";
import "./Github_stats.css";
import GitHubCalendar from "react-github-calendar";

export default function Github_stats() {
  return (
    <div id="github-stats-card">
      <p id="github" className="head">
        Github
      </p>
      <div>
        <p className="title"  id="github-stats-card">My GitHub stats</p>
        <div className="stats" id="github-stats-card">
          <div>
            <img
              src="https://github-readme-stats.vercel.app/api?username=raobaba&show_icons=true&locale=en"
              alt="RajanKumar"
            />
          </div>
          <div>
            <img
              src="https://github-readme-streak-stats.herokuapp.com/?user=raobaba&"
              alt="RajanKumar"
            />
          </div>
        </div>
      </div>
      <div>
        <p className="title">My Github Calender</p>
        <div className="calender" id="github-stats-card">
          <GitHubCalendar
            username="raobaba"
            year="last"
            blockMargin={4}
            blockRadius={20}
            blockSize={20}
          />
        </div>
      </div>
    </div>
  );
}
