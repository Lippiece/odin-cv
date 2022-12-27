import Button from "@mui/material/Button";
import List from "@mui/material/List";
import { useState } from "react";

import ExperienceItem from "./ExperienceItem";

const Experience = ( {
  experience,
  setExperience,
} ) => {

  const [
    submitted,
    setSubmitted,
  ] = useState( false );

  return (
    <section
      id="experience"
    >
      <h2>
        Experience
      </h2>
      <List
        dense
      >
        { experience.map( (
          item, index
        ) =>
          (
            <ExperienceItem
              experience    = { experience }
              index         = { index }
              item          = { item }
              key           = { index }
              setExperience = { setExperience }
            submitted={ submitted }
            />
          ) ) }
      </List>
      <Button
        hidden={ submitted }
        onClick={ () =>
          setExperience( [
            ...experience,
            {
              company : "Company",
              end     : "End",
              position: "Position",
              start   : "Start",
            },
          ] ) }
        variant="contained"
      >
        Add Experience
      </Button>
      <Button
        hidden={ submitted || experience.length === 0 }
        onClick={ () =>
          setSubmitted( true ) }
        variant="contained"
      >
        Submit
      </Button>
    </section>
  );

};

export default Experience;
