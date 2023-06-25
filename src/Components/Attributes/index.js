import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";
import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import paint from "../../Assets/paint.svg";
import home from "../../Assets/home.svg";
import group from "../../Assets/group.svg";
import check from "../../Assets/check.svg";
import { store } from "../../store";
import {
  setAttributeState,
  setAttributeTeam,
  setColorAttribute,
} from "../../Slices/leftpanelSecondary";
import { setCurrentColor } from "../../Slices/colorSlice";
import { useSelector } from "react-redux";

const ColorList = ({
  text,
  code,
  team,
  selectAttributeColor,
  label,
  currentTeam,
  currentAttributeColor,
}) => (
  <Box
    display="flex"
    justifyContent="space-between"
    className="pointer"
    py={2}
    borderBottom="1px solid rgba(170, 175, 221, 0.42)"
    onClick={() => selectAttributeColor(label, code, team)}
  >
    <Typography variant="body1"> {text}</Typography>
    {currentTeam === team && currentAttributeColor === label && (
      <img src={check} alt="check" />
    )}
  </Box>
);
const colors = [
  { color: "Primary Color", code: "#d42626", label: "primary" },
  { color: "Secondary Color", code: "#0074ff", label: "secondary" },
  { color: "Tertiary Color", code: "#a600ff", label: "tertiary" },
];
const Attribute = () => {
  const selectAttributeColor = (label, code, team) => {
    store.dispatch(setColorAttribute(label));
    store.dispatch(setCurrentColor(code));
    store.dispatch(setAttributeTeam(team));
    store.dispatch(setAttributeState(true));
  };

  const currentTeam = useSelector(
    (state) => state.leftPanelReducer.attributeTeam
  );
  const currentAttributeColor = useSelector(
    (state) => state.leftPanelReducer.attributeColor
  );

  return (
    <Box>
      {" "}
      <Box width>
        <Typography variant="h6" fontWeight="bold" fontSize="20px">
          Attribute
        </Typography>
      </Box>
      <Box>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <img src={paint} alt="paint" />
            <Typography variant="body1" sx={{ ml: 1 }} fontWeight="bold">
              Color attribute
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <img src={home} alt="home" />
                <Typography variant="body1" sx={{ ml: 1 }} fontWeight="bold">
                  Home Team
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ pl: 8 }}>
                {colors.map(({ color, code, label }) => (
                  <ColorList
                    text={color}
                    code={code}
                    label={label}
                    team="home"
                    selectAttributeColor={selectAttributeColor}
                    currentTeam={currentTeam}
                    currentAttributeColor={currentAttributeColor}
                  />
                ))}
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <img src={group} alt="group" />
                <Typography variant="body1" sx={{ ml: 1 }} fontWeight="bold">
                  Away Team
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ pl: 8 }}>
                {colors.map(({ color, code, label }) => (
                  <ColorList
                    text={color}
                    code={code}
                    label={label}
                    team="away"
                    selectAttributeColor={selectAttributeColor}
                    currentTeam={currentTeam}
                    currentAttributeColor={currentAttributeColor}
                  />
                ))}
              </AccordionDetails>
            </Accordion>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Box>
  );
};

export default Attribute;
