import { Box, Typography } from "@mui/material";
import React from "react";
import leftItems from "./staticData";
import "./index.css";
import { useSelector } from "react-redux";
import Background from "../Background";
import { store } from "../../store";
import { setCurrentSecondary } from "../../Slices/leftpanelSecondary";
import Uploads from "../Uploads";
import Attribute from "../Attributes";
import { BgIcon } from "../../Assets/icons/bg";
import { UploadIcon } from "../../Assets/icons/uploads";
import { TextIcon } from "../../Assets/icons/Text";
import { LayerIcon } from "../../Assets/icons/layers";

const LeftPanelItem = ({
  image,
  text,
  handleScreen,
  leftSecondaryComponent,
  renderNavIcon,
}) => (
  <Box
    mb={3}
    display="flex"
    flexDirection="column"
    alignItems="center"
    onClick={() => handleScreen(text)}
    py={2}
    px={4}
    bgcolor={leftSecondaryComponent === text ? "#F1EDEE" : "#fff"}
    className="pointer"
  >
    {renderNavIcon(text)}

    <Typography variant="body1" className="icon-label" mt="3px">
      {text}
    </Typography>
  </Box>
);

const leftPanelSecondary = (component) => {
  switch (component) {
    case "Background":
      return <Background />;
    case "Uploads":
      return <Uploads />;
    case "Attribute":
      return <Attribute />;
    default:
      return <Background />;
  }
};
const NavBar = () => {
  const leftSecondaryComponent = useSelector(
    (state) => state.leftPanelReducer.component
  );
  const handleScreen = (text) => store.dispatch(setCurrentSecondary(text));
  const renderNavIcon = (text) => {
    const checkCurrentComponent = () =>
      leftSecondaryComponent === text ? "#D90429" : "#888996";
    console.log("test", checkCurrentComponent());
    switch (text) {
      case "Background":
        return <BgIcon color={checkCurrentComponent()} />;
      case "Uploads":
        return <UploadIcon color={checkCurrentComponent()} />;
      case "Text":
        return <TextIcon color={checkCurrentComponent()} />;
      case "Layers":
        return <LayerIcon color={checkCurrentComponent()} />;
      default:
        <BgIcon color={checkCurrentComponent()} />;
    }
  };
  return (
    <Box display="flex" backgroundColor="#F0F0F5    ">
      <Box
        width="110px"
        backgroundColor="#FFFFFF;
"
      >
        {leftItems.map(({ text, icon }) => (
          <LeftPanelItem
            text={text}
            image={icon}
            handleScreen={handleScreen}
            leftSecondaryComponent={leftSecondaryComponent}
            renderNavIcon={renderNavIcon}
          />
        ))}
      </Box>
      <Box backgroundColor="#FFFFFF" py={1} px={2} width={310}>
        {leftPanelSecondary(leftSecondaryComponent)}
      </Box>
    </Box>
  );
};

export default NavBar;
