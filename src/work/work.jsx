/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";

const Work = () => {
  const [repos, setRepos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRepos = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          "https://api.github.com/users/ahmed-morshedy/repos"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch repos");
        }
        const data = await response.json();
        setRepos(data);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };

    fetchRepos();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <ul>
        {repos.map((repo) => (
          <li key={repo.id}>
            <p>{repo.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Work;
