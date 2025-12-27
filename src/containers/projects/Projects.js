import React, { useState, useEffect } from "react";
import "./Project.css";
import GithubRepoCard from "../../components/githubRepoCard/GithubRepoCard";
import Button from "../../components/button/Button";
import { openSource, greeting } from "../../portfolio";
import projectsData from "../../shared/opensource/projects.json";

export default function Projects(props) {
  const [repo, setrepo] = useState([]);
  const theme = props.theme;

  useEffect(() => {
    // Directly using data from projects.json
    setrepo(projectsData.data);
  }, []);

  return (
    <div className="main" id="opensource">
      <h1 className="project-title" style={{ color: theme.text }}>
        Open Source Projects
      </h1>
      <div className="repo-cards-div-main">
        {repo.map((v, i) => {
          return <GithubRepoCard repo={v} key={v.id} theme={theme} />;
        })}
      </div>
      <Button
        text={"More Projects"}
        className="project-button"
        href={greeting.githubProfile}
        newTab={true}
        theme={theme}
      />
    </div>
  );
}
