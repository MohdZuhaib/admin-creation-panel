import { Box } from "@mui/material";
import Center from "./Components/CenterImage";
import Header from "./Components/Header";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <>
      <Header />
      <Box display="flex">
        <NavBar />
        <Center />
      </Box>
    </>
  );
}

export default App;
