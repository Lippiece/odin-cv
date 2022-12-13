/* This component should render the education section of the resume.

   The component should render a list of education items.

   Each education item should have the following properties:
   - school
   - degree
   - fieldOfStudy
   - startYear
   - endYear
   - description

   The component should render the buttons to add, edit, and delete education items. */

import Button from "@mui/material/Button";
import List from "@mui/material/List";
import { useState } from "react";

import EducationItem from "./EducationItem";

const Education = () => {

  const [
    education,
    setEducation,
  ] = useState( [] );

  return (
    <section
      id="education"
    >
      <h1>
        Education
      </h1>
      <List
        dense
      >
        { education.map( (
          item, index
        ) =>
          (
            <EducationItem
              education    = { education }
              index        = { index }
              item         = { item }
              key          = { index }
              setEducation = { setEducation }
            />
          ) ) }
      </List>
      <Button
        onClick={ () =>
          setEducation( [
            ...education,
            {
              degree      : "Degree",
              description : "Description",
              endYear     : "End Year",
              fieldOfStudy: "Field of Study",
              school      : "School",
              startYear   : "Start Year",
            },
          ] ) }
        variant="contained"
      >
        Add Education
      </Button>
    </section>
  );

};

export default Education;