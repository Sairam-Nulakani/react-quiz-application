import { useEffect, useState } from "react";
import data from "../Database/Data";
import { useDispatch } from "react-redux";
import * as Action from "../store/QuestionReducer";

export const useFetchQuestion = () => {
  const dispatch = useDispatch;
  const [getData, setGetData] = useState({
    isLoading: false,
    apiData: [],
    serverError: null,
  });
  useEffect(() => {
    setGetData((prev) => ({ ...prev, isLoading: true }));
    (async () => {
      try {
        let question = await data;
        if (question.length > 0) {
          setGetData((prev) => ({ ...prev, isLoading: false }));
          setGetData((prev) => ({ ...prev, apiData: question }));
          dispatch(Action.startExamAction(question));
        } else {
          throw new Error("No Question Available");
        }
      } catch (err) {
        setGetData((prev) => ({ ...prev, isLoading: false }));
        setGetData((prev) => ({ ...prev, serverError: err }));
      }
    })();
  }, [dispatch]);
  return [getData, setGetData];
};
