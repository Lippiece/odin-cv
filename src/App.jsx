import CssBaseline from "@mui/material/CssBaseline";
import {
  createTheme, ThemeProvider,
} from "@mui/material/styles";
import { useState } from "react";

import Education from "./components/Education/Education";
import Experience from "./components/Experience/Experience";
import Interests from "./components/Interests/Interests";
import Resume from "./components/Preview/Preview";
import Skills from "./components/Skills/Skills";
import Summary from "./components/Summary/Summary";

const darkTheme = createTheme( { palette: { mode: "dark" } } );

const App = () => {

  // store the data in an array to display in Resume
  const [
    data,
    setData,
  ] = useState( {
    education : [],
    experience: [],
    interests : [],
    skills    : [],
    summary   : {
      city    : "",
      country : "",
      email   : "",
      github  : "",
      linkedin: "",
      name    : "",
      summary : "",
      website : "",
    },
  } );

  return (
    <ThemeProvider
      theme={ darkTheme }
    >
      <CssBaseline />
      <h1>
        Builder
      </h1>
      {/* The components all follow almost the same structure pattern */ }
      <Summary
        setSummary={ summary =>
          setData( {
            ...data,
            summary,
          } ) }
        summary={ data.summary }
      />
      <Experience
        experience={ data.experience }
        setExperience={ experience =>
          setData( {
            ...data,
            experience,
          } ) }
      />
      <Education
        education={ data.education }
        setEducation={ education =>
          setData( {
            ...data,
            education,
          } ) }
      />
      <Skills
        setSkills={ skills =>
          setData( {
            ...data,
            skills,
          } ) }
        skills={ data.skills }
      />
      <Interests
        interests={ data.interests }
        setInterests={ interests =>
          setData( {
            ...data,
            interests,
          } ) }
      />
      <Resume
        data={ data }
      />
    </ThemeProvider>
  );

};

export default App;
