import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "../styles/Main.css";

const Main = () => {
  const inputRef = useRef(null);
  return (
    <div className="container">
      <h1 className="title text-light">Quiz Application</h1>
      <ol>
        <li>
          In this Quiz Application we have 10 questions asked one after another
        </li>
        <li>10 Points is Awarded for the each correct answer </li>
        <li>Each question has 3 options.You can choose only one question</li>
        <li>You can review and change the answer before the quiz finish</li>
        <li>The result will be declared at the end of the Quiz</li>
      </ol>
      <form id="form">
        <input
          type="text"
          placeholder="Username"
          ref={inputRef}
          className="userid"
        />
      </form>
      <div className="start">
        <Link to="/quiz" className="btn">
          Start Quiz
        </Link>
      </div>
    </div>
  );
};

export default Main;
