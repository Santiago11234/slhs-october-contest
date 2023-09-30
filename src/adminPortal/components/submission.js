import React, { useState } from "react";
import styles from "../css/submissions.module.css";

function Problem({ submition }) {
  const [submissionStatus, setSubmissionStatus] = useState("submit");
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);

  return (
    <div className={styles.problemContainer}>
      <div className={styles.problemInfo}>
        <h2>{submition.name}</h2>
      </div>

      <div className={styles.problemActions}>

      <button
          className={styles.submitButton}
        >
          Submition
        </button>

        <button
          className={styles.statusButton}
        >
          Status
        </button>
      </div>
    </div>
  );
}

export default Problem;
