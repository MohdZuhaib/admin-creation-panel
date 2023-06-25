import {
  Badge,
  Box,
  Button,
  FormControl,
  MenuItem,
  Select,
  Switch,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import {
  ChromePicker,
  HuePicker,
  MaterialPicker,
  PhotoshopPicker,
  SketchPicker,
  SliderPicker,
  SwatchesPicker,
  TwitterPicker,
} from "react-color";
import "./index.scss";
import { useSelector } from "react-redux";
import { store } from "../../store";
import { setCurrentColor } from "../../Slices/colorSlice";
import { TimelineDot } from "@mui/lab";
import link from "../../Assets/link.svg";
import { LinkIcon } from "../../Assets/icons/link";
import {
  setAttributeState,
  setCurrentSecondary,
} from "../../Slices/leftpanelSecondary";
import { DetachIcon } from "../../Assets/icons/detach";
import GradientPicker from "./GradientPicker";

const Background = () => {
  const [selectedColorType, setSelectedColor] = useState("solid");

  const color = useSelector((state) => state.colorReducer.color);
  const currentAttributeColor = useSelector(
    (state) => state.leftPanelReducer.attributeColor
  );
  const isAttributed = useSelector(
    (state) => state.leftPanelReducer.isAttribute
  );
  const selectColor = (e) => setSelectedColor(e.target.value);
  const handleColor = (color) => store.dispatch(setCurrentColor(color.hex));
  const detachAttribute = () => store.dispatch(setAttributeState(false));
  const handleAttribute = () =>
    store.dispatch(setCurrentSecondary("Attribute"));

  return (
    <Box width>
      <Box width>
        <Typography variant="h6" fontWeight="bold" fontSize="20px">
          Background
        </Typography>
      </Box>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mt={2}
      >
        <Typography variant="body1" fontWeight="bold">
          Color
        </Typography>
        <FormControl>
          <Select
            id="demo-simple-select"
            size="small"
            variant="outlined"
            value={selectedColorType}
            sx={{
              borderRadius: "13px",
              // border: "1px solid rgba(170, 175, 221, 0.42)",
              // boxShadow: "none",
            }}
            onChange={selectColor}
          >
            <MenuItem value="solid">Solid color</MenuItem>
            <MenuItem value="gradient">Gradient</MenuItem>
          </Select>
        </FormControl>
      </Box>
      {isAttributed ? (
        <Box
          mt={2}
          px={2}
          py={"18px"}
          border="1px solid rgba(170, 175, 221, 0.42)
        "
          borderRadius="16px"
        >
          <Box
            className="color-wrapper"
            border="1px solid rgba(170, 175, 221, 0.42)
            "
            display="flex"
            alignItems="center"
            borderRadius="16px"
            px="18px"
            py="15px"
          >
            <Box
              border="1px solid rgba(170, 175, 221, 0.42)
              "
              borderRadius="16px"
              width={14}
              height={14}
              sx={{
                backgroundColor: color,
                borderRadius: "50%",
              }}
            />
            <Typography variant="body1" ml={1}>
              {currentAttributeColor} color
            </Typography>
          </Box>
          <Box>
            <Button
              fullWidth
              variant="outlined"
              color="error"
              sx={{
                mt: "21px",
                fontWeight: "bold",
                py: 1.5,
                borderRadius: "8px",
                borderColor: "rgba(170, 175, 221, 0.42)",
              }}
              onClick={detachAttribute}
            >
              <DetachIcon color="#D90429" style={{ marginRight: "10px" }} />
              Detach Color
            </Button>
          </Box>
        </Box>
      ) : (
        <>
          {" "}
          {/* -------------  color-picker-wrapper -------- */}
          {selectedColorType === "solid" ? (
            <Box
              className="color-picker-wrapper"
              mt={2}
              border="1px solid rgba(170, 175, 221, 0.42)
            "
              px={2}
              pb={1.5}
              pt={2.2}
              borderRadius="16px"
            >
              <ChromePicker color={color} onChange={handleColor} />
              <HuePicker color={color} onChange={handleColor} />
              <Box
                className="current-color-display"
                display="flex"
                alignItems="center"
                border="1px solid rgba(170, 175, 221, 0.42)
            "
                borderRadius="13px"
                mt={3}
              >
                <Box
                  pl={2.25}
                  py={2}
                  borderRight="1px solid rgba(170, 175, 221, 0.42)
            "
                  display="flex"
                  alignItems="center"
                  width="65%"
                >
                  <Box
                    width={14}
                    height={14}
                    sx={{
                      backgroundColor: color,
                      borderRadius: "50%",
                    }}
                  />
                  <Typography variant="body1" fontWeight="bold" ml={1}>
                    {color}
                  </Typography>
                </Box>

                <Box display="flex" justifyContent="center" width="25%">
                  <Typography variant="body1" fontWeight="bold" ml={1}>
                    100%
                  </Typography>
                </Box>
              </Box>
            </Box>
          ) : (
            <GradientPicker />
          )}
          {/* -------------  color-picker-wrapper-end -------- */}
          {/* -------------  color-editable-wrapper -------- */}
          <Box mt={3} display="flex" justifyContent="space-between">
            <Box>
              <Typography variant="body1" fontWeight="bold">
                Color Non Editable
              </Typography>
              <Typography
                variant="body1"
                mt={1}
                color="#888996"
                fontWeight={400}
              >
                User will not be able to edit this colour further in their
                marketing panel
              </Typography>
            </Box>
            <Switch />
          </Box>
          {/* -------------  color-editable-wrapper-end -------- */}
          {/* -------------  link-attribute -------- */}
          <Button
            fullWidth
            variant="outlined"
            color="error"
            sx={{
              mt: "21px",
              fontWeight: "bold",
              py: 1.5,
              borderRadius: "8px",
            }}
            onClick={handleAttribute}
          >
            <LinkIcon color="#D90429" style={{ marginRight: "10px" }} />
            Link Attribute
          </Button>
        </>
      )}
    </Box>
  );
};

export default Background;
