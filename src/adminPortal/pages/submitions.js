import React, { useState, useEffect } from "react";
import Submition from "../components/submission";
import styles from "../css/submitHome.module.css";

export default function Submitions() {
  const [teamId, setTeamId] = useState({});
  const [scoreData, setScoreData] = useState([]);
  const [runsData, setRunsData] = useState([]);
  const [questionsData, setQuestionsData] = useState([ {number: 1, name: "name"}, {number: 2, name: "name2"}, {number: 3, name: "name3"}]);


  const [search, setSearch] = useState("");
  const [searching, setSearching] = useState(false);


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
            <h1 className={styles.title}>Submissions</h1>
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
        {filteredQuestions.map((submition) => (
          <Submition key={submition.number} submition={submition} />
        ))}

      </div>


      </div>
    </div>
  );
}
