import {
  AppBar,
  Toolbar,
  Grid,
  Button,
  Container,
  Select,
  FormControl,
  MenuItem,
} from "@mui/material";
// import EditIcon from "@mui/icons-material/Edit";
// import ShareIcon from "@mui/icons-material/Share";
import SaveIcon from "@mui/icons-material/Save";
// import GetAppIcon from "@mui/icons-material/GetApp";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
// import * as htmlToImage from "html-to-image";
import logo from "../../Assets/reelMedia-logo.svg";
import schoolDrop from "../../Assets/school-drop.svg";
import profile from "../../Assets/avatar.svg";
import templateName from "../../Assets/template-name.svg";
import "./index.css";
// import { useSelector } from "react-redux";
import { useState } from "react";
const Header = () => {
  const [age, setAge] = useState(10);

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <>
      <AppBar
        position="static"
        sx={{ backgroundColor: "#fff", mb: "12px", boxShadow: "none" }}
      >
        <Toolbar>
          <Container maxWidth="xxl">
            <Grid container>
              <Grid item md={5}>
                <img src={logo} alt="logo" width="55px" />
              </Grid>
              <Grid item md={3} sx={{ display: "flex", alignItems: "center" }}>
                <img src={schoolDrop} alt="logo" width="200px" />
              </Grid>
              <Grid item md={2}>
                <div id="google_translate_element"></div>
              </Grid>

              <Grid
                item
                md={2}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={profile}
                  alt="logo"
                  width="30px"
                  height="30px"
                  className="profile-img"
                />
                <FormControl>
                  <Select
                    id="demo-simple-select"
                    value={age}
                    sx={{
                      border: "none",
                      ".MuiOutlinedInput-notchedOutline": { border: 0 },
                    }}
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>Esther Howard</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </Container>
        </Toolbar>
      </AppBar>
      <AppBar position="static" sx={{ backgroundColor: "#fff" }}>
        <Toolbar>
          <Container maxWidth="xxl">
            <Grid container justifyContent="space-between">
              <Grid
                item
                // md={2}
              >
                <Button
                  variant="outlined"
                  color="secondary"
                  className="outlined-btn-basic"
                  size="small"
                >
                  <ArrowBackIosIcon fontSize="small" />
                  Go Back
                </Button>
              </Grid>
              <Grid item sx={{ display: "flex", alignItems: "center" }}>
                <img src={templateName} alt="name" />
                {/* Template Name/Event/Layout */}
              </Grid>

              <Grid
                item
                // md={5}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <Button
                  sx={{ mx: 2 }}
                  variant="contained"
                  className="app-red-btn-contained"
                >
                  <SaveIcon fontSize="small" sx={{ mr: 2 }} />
                  Save
                </Button>
              </Grid>
            </Grid>
          </Container>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
