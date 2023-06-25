import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import editorSlice from "./Slices/imageEditor";
import leftPanelSlice from "./Slices/leftpanelSecondary";
import uploadSlice from "./Slices/uploads";
import colorSlice from "./Slices/colorSlice";

const combineReducer = combineReducers({
  editorReducer: editorSlice,
  leftPanelReducer: leftPanelSlice,
  uploadReducer: uploadSlice,
  colorReducer: colorSlice,
});

export const store = configureStore({
  reducer: combineReducer,
});
