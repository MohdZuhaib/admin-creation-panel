import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentTab: "photos",
};

const uploadSlice = createSlice({
  name: "uploadSlice",
  initialState,
  reducers: {
    setCurrentTab: (state, { payload }) => {
      state.currentTab = payload;
    },
  },
});

export const { setCurrentTab } = uploadSlice.actions;

export default uploadSlice.reducer;
