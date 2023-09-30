import React, { useState } from "react";
import styles from "../css/competitionPortal.module.css";
import ScoreComponent from "../components/scoreComponent";

export default function Leaderboard() {
  const [scores, setScores] = useState([
    {
      teamName: "Team 1",
      division: "Advanced",
      score: 100,
    },
    {
      teamName: "Team 2",
      division: "Novice",
      score: 20,
    },
    {
      teamName: "Team 3",
      division: "Novice",
      score: 120,
    },
  ]);

  const [search, setSearch] = useState("");
  const [divisionFilter, setDivisionFilter] = useState("Advanced");
  const [searching, setSearching] = useState(false);

  const filteredScores = scores
    .filter((scoreScore) => {
      const scoreName = scoreScore.teamName.toLowerCase();
      const scoreDivision = scoreScore.division.toLowerCase();
      return (
        (scoreName.includes(search) || scoreDivision.includes(search)) &&
        (scoreDivision === divisionFilter.toLowerCase())
      );
    })
    .sort((a, b) => b.score - a.score);

  return (
    <div className={styles.hScreen}>
      <div className={styles.container}>
        <div className={styles.outerHeader}>
          <div className={styles.innerHeader}>
            <h1 className={styles.title}>Leaderboard</h1>
            <div className={styles.searchContainer}>
              <select
                value={divisionFilter}
                onChange={(event) => setDivisionFilter(event.target.value)}
                className={styles.dropdown}
              >
                <option value="Advanced">Advanced</option>
                <option value="Novice">Novice</option>
              </select>
              <input
                type="text"
                placeholder="Search"
                className={`${styles.input} ${searching ? styles.focused : ""}`}
                onClick={() => setSearching(true)}
                onChange={(event) => setSearch(event.target.value)}
              />
            </div>
          </div>
        </div>

        <div className={styles.problemsContainer}>
          {filteredScores.map((score) => (
            <ScoreComponent key={score.teamName} team={score}  />
          ))}
        </div>
      </div>
    </div>
  );
}
