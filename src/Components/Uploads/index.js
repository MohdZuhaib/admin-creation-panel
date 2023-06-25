import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { store } from "../../store";
import { setCurrentTab } from "../../Slices/uploads";
import { useSelector } from "react-redux";
import PublishIcon from "@mui/icons-material/Publish";
import { images } from "./staticData";
import Photos from "./Tabs/photos";
import Graphics from "./Tabs/graphics";
import Icons from "./Tabs/icons";
import "./index.css";

const Uploads = () => {
  const setCurrentTabHandler = (name) => store.dispatch(setCurrentTab(name));
  const currentTab = useSelector((state) => state.uploadReducer.currentTab);
  const classCheck = (name) => {
    if (currentTab === name) {
      return "selected-tab";
    } else return "";
  };
  const variantCheck = (name) => {
    if (currentTab === name) {
      return "selected-tab";
    } else return "";
  };
  const currentTabRender = () => {
    switch (currentTab) {
      case "photos":
        return <Photos />;
      case "graphics":
        return <Graphics />;
      case "icons":
        return <Icons />;
    }
  };
  return (
    <Box>
      <Box width borderBottom="1px solid #000">
        <Typography variant="h6" fontWeight="bold" fontSize="20px">
          Uploads
        </Typography>
      </Box>
      <Box
        display="flex"
        justifyContent="space-between"
        mt={2}
        maxWidth="300px"
        overflow="auto"
      >
        <Button
          variant={variantCheck("photos")}
          className={classCheck("photos")}
          name="photos"
          onClick={() => setCurrentTabHandler("photos")}
          sx={{ mr: 2 }}
        >
          Photos
        </Button>
        <Button
          name="graphics"
          variant={variantCheck("graphics")}
          className={classCheck("graphics")}
          onClick={() => setCurrentTabHandler("graphics")}
          sx={{ mr: 2 }}
        >
          Graphics
        </Button>
        <Button
          name="icons"
          variant={variantCheck("icons")}
          className={classCheck("icons")}
          onClick={() => setCurrentTabHandler("icons")}
          sx={{ mr: 2 }}
        >
          Icons
        </Button>
        <Button
          name="videos"
          variant={variantCheck("videos")}
          className={classCheck("videos")}
          onClick={() => setCurrentTabHandler("videos")}
          mx={2}
          sx={{ mr: 2 }}
        >
          Videos
        </Button>
        <Button
          name="watermarks"
          variant={variantCheck("watermarks")}
          className={classCheck("watermarks")}
          onClick={() => setCurrentTabHandler("watermarks")}
          sx={{ mr: 2 }}
        >
          Watermarks
        </Button>
      </Box>
      {currentTabRender()}
    </Box>
  );
};

export default Uploads;
