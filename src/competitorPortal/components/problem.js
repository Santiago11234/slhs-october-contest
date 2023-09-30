
import React, { useState } from "react";
import styles from "../css/problem.module.css";

function Problem({ question }) {
  const [selectedLanguage, setSelectedLanguage] = useState("Java");
  const [submissionStatus, setSubmissionStatus] = useState("submit");
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const submitProblem = () => {
    if (!selectedFile) {
      console.error("No file selected.");
      return;
    }

    let progress = 0;
    const interval = setInterval(() => {
      progress += 10;
      setUploadProgress(progress);
      if (progress >= 100) {
        clearInterval(interval);
        setUploadProgress(0);
        setSubmissionStatus("pending");
      }
    }, 1000);

    // fetch("/api/submit", {
    //   method: "POST",
    //   body: JSON.stringify({
    //     question: question.id, 
    //     language: selectedLanguage,
    //     code: "save the code in some way idk how yet", 
    //     fileName: question.name,
    //   }),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     if (data.success) {
    //       setSubmissionStatus("pending");
    //     } else {
    //       setSubmissionStatus("incomplete");
    //     }
    //   })
    //   .catch((error) => {
    //     console.error("Error submitting the problem:", error);
    //     setSubmissionStatus("incomplete");
    //   });

  };

  return (
    <div className={styles.problemContainer}>
      <div className={styles.problemInfo}>
        <h2>{question.name}</h2>
      </div>

      <div className={styles.problemActions}>
        <select
          value={selectedLanguage}
          onChange={handleLanguageChange}
          className={styles.select}
        >
          <option value="Java">Java</option>
          <option value="Python">Python</option>
        </select>

        <div className={styles.uploadContainer}>
          <input
            type="file"
            id="fileInput"
            accept=".pdf"
            className={styles.fileInput}
            onChange={handleFileChange}
          />
          <label htmlFor="fileInput" className={styles.fileInputLabel}>
            {selectedFile ? selectedFile.name : "Choose PDF File"}
          </label>
        </div>

        <button
          className={styles.submitButton}
          onClick={submitProblem}
          disabled={submissionStatus !== "submit"}
        >
          {submissionStatus === "submit" ? "Submit" : "Pending"}
        </button>
      </div>
       {uploadProgress > 0 && (
            <div className={styles.progressBarContainer}>
              <progress
                className={styles.progressBar}
                value={uploadProgress}
                max="100"
              ></progress>
              <span className={styles.progressText}>
                {uploadProgress.toFixed(2)}%
              </span>
            </div>
          )}
    </div>
  );
}

export default Problem;

