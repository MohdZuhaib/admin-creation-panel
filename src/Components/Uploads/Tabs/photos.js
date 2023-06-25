import { Box, Button, Typography } from "@mui/material";
import PublishIcon from "@mui/icons-material/Publish";
import { images } from "../staticData";
import React from "react";
import { store } from "../../../store";
import { setFile } from "../../../Slices/imageEditor";

const Photos = () => {
  const uploadImageHandler = (e) => store.dispatch(setFile(e.target.files[0]));
  return (
    <>
      <Box width mt={2}>
        <div class="upload-btn-wrapper" style={{ width: "100%" }}>
          <Button
            fullWidth
            variant="contained"
            className="app-red-btn-contained"
            sx={{ borderRadius: "13px" }}
          >
            <PublishIcon fontSize="small" sx={{ mr: 1 }} />
            Upload
          </Button>
          <input type="file" name="myfile" onChange={uploadImageHandler} />
        </div>

        <Typography mt={1} fontSize="10px" variant="body1" fontWeight="bold">
          Photos must be in PNG or JPEG Format
        </Typography>
      </Box>
      <Box>
        {images.map(({ src }) => (
          <img
            src={src}
            alt="test"
            width="115px"
            style={{ marginLeft: "16px", marginTop: "16px" }}
          />
        ))}
      </Box>
    </>
  );
};

export default Photos;
