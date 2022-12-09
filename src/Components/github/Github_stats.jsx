import React from "react";
import "./Github_stats.css";
import GitHubCalendar from "react-github-calendar";

export default function Github_stats() {
  return (
    <div>
      <p id="github" className="head">
        Github
      </p>
      <div>
        <p className="title">My GitHub stats</p>
        <div className="stats">
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
        <div className="calender">
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
