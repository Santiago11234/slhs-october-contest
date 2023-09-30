import React, { useState, useEffect } from "react";
import Problem from "../components/problem";
import styles from "../css/competitionPortal.module.css";

export default function CompetitionPortal() {
  const [teamId, setTeamId] = useState({});
  const [scoreData, setScoreData] = useState([]);
  const [runsData, setRunsData] = useState([]);
  const [questionsData, setQuestionsData] = useState([ {number: 1, name: "name"}, {number: 2, name: "name2"}, {number: 3, name: "name3"}]);


  const [search, setSearch] = useState("");
  const [searching, setSearching] = useState(false);

  // fetch teams
  useEffect(() => {
    fetch("/api/auth", {
      method: "POST",
      body: JSON.stringify({ username: "", password: "" }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.status === 401) {
          //smth bad happens
        }
        return response.json();
      })
      .then((data) => {
        setTeamId(data.team);
        // i should prob use a local storage or smth to make this secure but whatever
      });
  }, []);

  // fetch scores
  useEffect(() => {
    fetch("/api/score")
      .then((response) => response.json())
      .then((data) => {
        setScoreData(data);
      });
  }, []);

  // fetch runs
  useEffect(() => {
    fetch("/api/runs")
      .then((response) => response.json())
      .then((data) => {
        setRunsData(data);
      });
  }, []);

  // fetch questions
  useEffect(() => {
    fetch("/api/questions")
      .then((response) => response.json())
      .then((data) => {
        setQuestionsData(data);
      });
  }, []);

  // all gets will have time stamp

  //add sscore change listener val

  const filteredQuestions = questionsData.filter((problem) => {
    const problemName = problem.name.toLowerCase();
    const searchTerm = search.toLowerCase();
    return problemName.includes(searchTerm);
  });

  return (
    <div className={styles.hScreen}>
      <div className={styles.container}>
        <div className={styles.outerHeader}>
          <div className={styles.innerHeader}>
            <h1 className={styles.title}>Problems</h1>
            <input
              type="text"
              placeholder="Search"
              className={`${styles.input} ${searching ? styles.focused : ""}`}
              onClick={() => setSearching(true)}
              onChange={(event) => setSearch(event.target.value)}
            />
          </div>
        </div>

        <div className={styles.problemsContainer}>
        {filteredQuestions.map((question) => (
          <Problem key={question.number} question={question} />
        ))}

      </div>


      </div>
    </div>
  );
}
