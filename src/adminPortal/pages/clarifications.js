import React, { useState, useRef } from "react";
import styles from "../css/clarifications.module.css";
import QuestionForm from "../components/QuestionForm";

export default function Clarifications() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isResponseModalOpen, setIsResponseModalOpen] = useState(false);
  const responseModalRef = useRef(null);
  const [questions, setQuestions] = useState([
    { question: "Question 1?", answer: "Answer 1" },
    { question: "Question 2?", answer: "Answer 2" },
  ]);
  const modalRef = useRef(null);
  const [isPending, setIsPending] = useState(false);
  const [pendingIndex, setPendingIndex] = useState(null);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const submitQuestion = (question) => {
    setPendingIndex(questions.length);
    setQuestions([...questions, { question, answer: "" }]);
    closeModal();
    setIsPending(true);
  };

  const handleModalClick = (e) => {
    if (modalRef.current === e.target) {
      closeModal();
    }
  };

  const responseOpenModal = () => {
    setIsResponseModalOpen(true);
  };

  const responseCloseModal = () => {
    setIsResponseModalOpen(false);
  };

  const responseSubmitQuestion = (question) => {
    responseCloseModal();
  };

  const responseHandleModalClick = (e) => {
    if (responseModalRef.current === e.target) {
      responseCloseModal();
    }
  };

  return (
    <div>
      <div className={styles["clarifications-header"]}>
        <div className={styles["announcement-header"]}>
          <h2>Clarifications</h2>
          <div className={styles["announcement-left-side"]}>
            <button
              className={styles["ask-question-button"]}
              onClick={openModal}
            >
              Announce
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          ref={modalRef}
          className={styles["modal-overlay"]}
          onClick={handleModalClick}
        >
          <div className={styles["modal-content"]}>
            <h2>Make An Announcement</h2>
            <QuestionForm submitQuestion={submitQuestion} />
          </div>
        </div>
      )}

      {/* response modal */}
      {isResponseModalOpen && (
        <div
          ref={responseModalRef}
          className={styles["modal-overlay"]}
          onClick={responseHandleModalClick}
        >
          <div className={styles["modal-content"]}>
            <h2>Respond to Question</h2>
            <QuestionForm submitQuestion={submitQuestion} />
          </div>
        </div>
      )}

      {/* new questions */}

      <div className={styles.newQuestions}>
        <h3>New Questions</h3>
        <div className={styles["announcements"]}>
          {questions.map((q, index) => (
            <div key={index} className={styles["question-card"]}>
              <div className={styles.cardInside}>
                <div className={styles["question-section"]}>
                  <div className={styles.time}>
                    <h2>Question</h2>
                    <p> time</p>
                  </div>
                  <p>{q.question}</p>
                </div>
                <button
                  className={styles["respond-question-button"]}
                  onClick={responseOpenModal}
                >
                  Respond
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* responded questions */}

      <div className={styles.newQuestions}>
      <h3>Old Questions</h3>
      <div className={styles["announcements"]}>
        {questions.map((q, index) => (
          <div key={index} className={styles["question-card"]}>
            <div className={styles["question-section"]}>
              <div className={styles.time}>
                <h2>Question</h2>
                <p> time</p>
              </div>
              <p>{q.question}</p>
            </div>
            <div className={styles["answer-section"]}>
              <h2>Answer</h2>
              <p>
                {index === pendingIndex && isPending ? "pending..." : q.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>

    </div>
  );
}
