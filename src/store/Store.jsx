import { combineReducers, configureStore } from "@reduxjs/toolkit";
import questionReducer from "./QuestionReducer";
import resultReducer from "./ResultReducer";
const rootReducer = combineReducers({
  questions: questionReducer,
  result: resultReducer,
});
export default configureStore({
  reducer: rootReducer,
});
