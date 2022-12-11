import "./css/App.css";

import CssBaseline from "@mui/material/CssBaseline";
import {
  createTheme, ThemeProvider,
} from "@mui/material/styles";

import Summary from "./components/Summary/Summary.jsx";

const darkTheme = createTheme( { palette: { mode: "dark" } } );

const App = () =>
  (
    <ThemeProvider
      theme={ darkTheme }>
      <CssBaseline />
      <Summary />
      {/* <Experience /> */}
      {/* <Education /> */}
      {/* <Skills /> */}
      {/* <Interests /> */}
    </ThemeProvider>
  );

export default App;
