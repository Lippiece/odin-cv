import Button from "@mui/material/Button";
import List from "@mui/material/List";
import { useState } from "react";

import SkillsItem from "./SkillsItem";

const Skills = () => {

  const [
    skills,
    setSkills,
  ] = useState( [] );
  return (
    <section
      id="skills">
      <h1>
        Skills
      </h1>
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
              skills    = {skills}
            />
          ) )}
      </List>
      <Button
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
    </section>
  );

};

export default Skills;
