import React, { useState } from "react";
import styles from "../css/clarifications.module.css";

export default function QuestionForm({ submitQuestion }) {
    const [questionText, setQuestionText] = useState("");
  
    const handleQuestionChange = (e) => {
      setQuestionText(e.target.value);
    };
  
    const handleSubmit = () => {
      if (questionText.trim() !== "") {
        submitQuestion(questionText);
        setQuestionText("");
      }
    };
  
    return (
      <div>
        <textarea
          rows="4"
          cols="50"
          placeholder="Type your announcement here"
          value={questionText}
          onChange={handleQuestionChange}
        />
        <button className={styles["submit-button"]} onClick={handleSubmit}>
          Announce
        </button>
      </div>
    );
  }