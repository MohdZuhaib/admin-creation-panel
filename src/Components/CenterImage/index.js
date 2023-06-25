import { Box, Button, CircularProgress, Typography } from "@mui/material";
import Image from "../../Assets/sample-1.jpg";
import undo from "../../Assets/undo.svg";
import RedoIcon from "@mui/icons-material/Redo";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import UndoIcon from "@mui/icons-material/Undo";
import CropIcon from "@mui/icons-material/Crop";
import UploadIcon from "@mui/icons-material/Upload";
import React from "react";
import { useSelector } from "react-redux";
import Draggable from "react-draggable";
import { store } from "../../store";
import { setFile } from "../../Slices/imageEditor";

import "./index.css";
import ToolBar from "../ToolBar";

const Center = () => {
  const show = useSelector((state) => state?.editorReducer?.showImage);
  const filter = useSelector((state) => state?.editorReducer?.filter);
  const imageUrl = useSelector((state) => state?.editorReducer?.imageUrl);
  const opacity = useSelector((state) => state?.editorReducer?.opacity);
  const isLoading = useSelector((state) => state?.editorReducer?.isLoading);
  const overlayText = useSelector((state) => state?.editorReducer?.overlayText);
  const bgColor = useSelector((state) => state.colorReducer.color);
  const opacityValue = opacity / 100;
  const uploadImageHandler = (e) => store.dispatch(setFile(e.target.files[0]));
  console.log("image", imageUrl, "||", show);
  return isLoading ? (
    <Box width="60%" display="flex" justifyContent="center" alignItems="center">
      <CircularProgress />
    </Box>
  ) : (
    <Box
      minHeight="85vh"
      width="80%"
      backgroundColor="#F0F0F5"
      textAlign="center"
      pt={3}
      pl={3}
      className="sec-wrapper"
    >
      <ToolBar />
      <Box
        width="60%"
        height={600}
        backgroundColor={bgColor}
        // bgImage={bgColor}
        sx={{ backgroundImage: bgColor }}
        display="flex"
        justifyContent="center"
        alignItems="center"
        ml={10}
        mt={11}
      >
        {show && imageUrl !== "" && (
          <Box
            className="main-center-container center-image-1"
            id="center-image"
          >
            <img
              src={imageUrl}
              alt="main-frame"
              className={filter === "b&w" ? "b" : `${filter} center-image-1`}
              width="100%"
              style={{ opacity: opacityValue }}
            />
            <Draggable>
              <Typography
                className="pointer"
                variant="h5"
                sx={{ color: "#fff" }}
              >
                {overlayText}
              </Typography>
            </Draggable>
          </Box>
        )}

        <Box mt={5}>
          {/* {imageUrl !== "" && (
            // <Box className="dynamic-buttons">
            //   <Button
            //     disabled
            //     variant="outlined"
            //     size="small"
            //     sx={{ fontWeight: "bold" }}
            //   >
            //     <UndoIcon fontSize="small" sx={{ mr: 1 }} />
            //     Undo
            //   </Button>
            //   <Button variant="outlined" className="actions" size="small">
            //     {" "}
            //     <RedoIcon fontSize="small" sx={{ mr: 1 }} />
            //     Redo
            //   </Button>
            //   <Button
            //     variant="outlined"
            //     className="actions"
            //     size="small"
            //     sx={{ border: "1px solid #dadada" }}
            //   >
            //     <CropIcon fontSize="small" sx={{ mr: 1 }} />
            //     Crop Image
            //   </Button>
            //   <Button variant="outlined" className="actions" size="small">
            //     <FullscreenIcon fontSize="small" sx={{ mr: 1 }} />
            //     Full Screen
            //   </Button>
            // </Box>
          )} */}
          {/* 
          <div class="upload-btn-wrapper">
            <Button variant="outlined" className="btn actions" size="small">
              <UploadIcon fontSize="small" sx={{ mr: 1 }} />
              Upload Image
            </Button>
            <input type="file" name="myfile" onChange={uploadImageHandler} />
          </div> */}
        </Box>
      </Box>
    </Box>
  );
};

export default Center;
