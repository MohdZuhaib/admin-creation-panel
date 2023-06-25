import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  color: "#000",
};

const colorSlice = createSlice({
  name: "colorSlice",
  initialState,
  reducers: {
    setCurrentColor: (state, { payload }) => {
      state.color = payload;
    },
  },
});

export const { setCurrentColor } = colorSlice.actions;

export default colorSlice.reducer;
