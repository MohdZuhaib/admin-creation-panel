import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// import image from "../../Assets/sample-1.jpg";
import * as FormData from "form-data";

// const path = require("path");

const initialState = {
  showImage: true,
  isLoading: false,
  filter: "none",
  opacity: 100,
  removeCheck: false,
  file: "",
  imageUrl: "",
  bgRemoved: false,
  overlayText: "",
};
function _arrayBufferToBase64(buffer) {
  var binary = "";
  var bytes = new Uint8Array(buffer);
  var len = bytes.byteLength;
  for (var i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return window.btoa(binary);
}

export const removeBackground = createAsyncThunk(
  "editorSlice/removeBackground",
  async ({ file }) => {
    console.log("inside remove bg");

    const formData = new FormData();
    formData.append("size", "auto");
    formData.append("image_file", file);

    const response = await axios({
      method: "post",
      url: "https://api.remove.bg/v1.0/removebg",
      data: formData,
      responseType: "arraybuffer",
      headers: {
        // ...formData.getHeaders(),
        "X-Api-Key": "kw7PmAmF25uUnHk29HmndhRv",
      },
      encoding: null,
    });

    console.log("response file", _arrayBufferToBase64(response.data));
    return _arrayBufferToBase64(response.data);
    // return _arrayBufferToBase64(response.data);
  }
);
const editorSlice = createSlice({
  name: "editorSlice",
  initialState,
  reducers: {
    adjustOpacity: (state, { payload }) => {
      state.opacity = payload;
    },
    toggleImage: (state, { payload }) => {
      state.showImage = !state.showImage;
    },
    setFilter: (state, { payload }) => {
      state.filter = payload;
    },
    setOverLayText: (state, { payload }) => {
      state.overlayText = payload;
    },
    setFile: (state, { payload }) => {
      state.file = payload;
      state.imageUrl = URL.createObjectURL(payload);
    },
    setImageSrc: (state, { payload }) => {
      state.imageUrl = payload;
    },

    // getCurrentCourse: (state, { payload }) => {
    //     state.data = payload;
    // }
  },
  extraReducers: {
    [removeBackground.pending]: (state, { payload }) => {
      state.isLoading = true;
      state.removeCheck = true;
    },
    [removeBackground.fulfilled]: (state, { payload }) => {
      console.log("fulfilled data", payload);
      state.file = payload;
      state.bgRemoved = true;
      state.imageUrl = `data:image/jpeg;base64,${payload}`;
      state.success = true;
      state.isLoading = false;
    },
    [removeBackground.rejected]: (state, { payload }) => {
      console.log("rejected data", payload);
      state.removeCheck = false;
      state.isLoading = false;
      state.success = false;
    },
  },
});

export const {
  adjustOpacity,
  toggleImage,
  setFilter,
  setImageSrc,
  setFile,
  setOverLayText,
} = editorSlice.actions;

export default editorSlice.reducer;
