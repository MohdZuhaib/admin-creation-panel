import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  component: "",
  isAttribute: false,
  attributeColor: "",
  attributeTeam: "",
};

const leftPanelSlice = createSlice({
  name: "leftPanelSlice",
  initialState,
  reducers: {
    setCurrentSecondary: (state, { payload }) => {
      state.component = payload;
    },
    setAttributeState: (state, { payload }) => {
      state.isAttribute = payload;
    },
    setColorAttribute: (state, { payload }) => {
      state.attributeColor = payload;
    },
    setAttributeTeam: (state, { payload }) => {
      state.attributeTeam = payload;
    },
  },
});

export const {
  setCurrentSecondary,
  setColorAttribute,
  setAttributeTeam,
  setAttributeState,
} = leftPanelSlice.actions;

export default leftPanelSlice.reducer;
