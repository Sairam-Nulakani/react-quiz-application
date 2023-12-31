import React, { useEffect } from "react";
import Questions from "./Questions";
import { useSelector } from "react-redux";

const Quiz = () => {
  const state = useSelector((state) => state);

  useEffect(() => {
    console.log(state);
  }, []);
  const handleNextPage = () => {
    console.log("On Next Click");
  };
  const handlePrevPage = () => {
    console.log("On Prev Click");
  };

  return (
    <div className="container">
      <h1 className="title text-light">Quiz Application</h1>
      <Questions />
      <div className="grid">
        <button className="btn prev" onClick={handlePrevPage}>
          Prev
        </button>
        <button className="btn next" onClick={handleNextPage}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Quiz;
