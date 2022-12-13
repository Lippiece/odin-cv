import CssBaseline from "@mui/material/CssBaseline";
import {
  createTheme, ThemeProvider,
} from "@mui/material/styles";

import Education from "./components/Education/Education";
import Experience from "./components/Experience/Experience";
import Interests from "./components/Interests/Interests";
import Skills from "./components/Skills/Skills";
import Summary from "./components/Summary/Summary";

const darkTheme = createTheme( { palette: { mode: "dark" } } );

const App = () =>
  (
    <ThemeProvider
      theme={ darkTheme }>
      <CssBaseline />
      {/* The components all follow almost the same pattern */}
      <Summary />
      <Experience />
      <Education />
      <Skills />
      <Interests />
    </ThemeProvider>
  );

export default App;
