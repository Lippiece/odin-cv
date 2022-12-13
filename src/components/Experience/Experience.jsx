import Button from "@mui/material/Button";
import List from "@mui/material/List";
import { useState } from "react";

import ExperienceItem from "./ExperienceItem";

const Experience = () => {

  // experience is an array of objects
  const [
    experience,
    setExperience,
  ] = useState( [] );
  return (
    <section
      id="experience"
    >
      <h1>
        Experience
      </h1>
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
            />
          ) ) }
      </List>
      <Button
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
    </section>
  );

};

export default Experience;
