import Button from "@mui/material/Button";
import List from "@mui/material/List";
import { useState } from "react";

import SkillsItem from "./SkillsItem";

const Skills = ( {
  skills,
  setSkills,
}) => {

  const [
    submitted,
    setSubmitted,
  ] = useState( false );
  return (
    <section
      id="skills">
      <h2>
        Skills
      </h2>
      <List
        dense>
        {skills.map( (
          item, index
        ) =>
          (
            <SkillsItem
              index     = {index}
              item      = {item}
              key       = {index}
              setSkills = {setSkills}
              skills    = { skills }
              submitted = { submitted }
            />
          ) )}
      </List>
      <Button
        hidden={submitted}
        onClick={() =>
          setSkills( [
            ...skills,
            {
              description: "Description",
              skill      : "Skill",
            },
          ] )
        }
        variant="contained"
      >
        Add Skill
      </Button>
      <Button
        hidden={submitted || skills.length === 0}
        onClick={() =>
          setSubmitted( true )
        }
        variant="contained"
      >
        Submit
      </Button>
    </section>
  );

};

export default Skills;
