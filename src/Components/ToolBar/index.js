import { Box, IconButton } from "@mui/material";
import React from "react";
import { primaryTools, secondaryTools } from "./staticData";

const ToolButton = ({ icon }) => (
  <IconButton aria-label="delete" color="secondary">
    <img src={icon} />
  </IconButton>
);
const ToolBar = () => {
  return (
    <Box display="flex">
      <Box
        bgcolor="#fff"
        className="primary-toolbox"
        display="flex"
        py={2}
        px={3}
      >
        {primaryTools.map(({ icon }) => (
          <ToolButton icon={icon} />
        ))}
      </Box>
      <Box
        bgcolor="#fff"
        display="flex"
        className="secondary-toolbox"
        py={2}
        px={3}
        ml={2}
        width={800}
      >
        {secondaryTools.map(({ icon }) => (
          <ToolButton icon={icon} />
        ))}
      </Box>
    </Box>
  );
};

export default ToolBar;
