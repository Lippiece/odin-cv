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
import { useEffect, useMemo, useState } from "react";

import EducationItem from "./EducationItem";

const Education = ( { education, setEducation } ) => {

  const [
    submitted,
    setSubmitted,
  ] = useState( false );

  const educationItems = useMemo(
    () =>
      education.map( (
        item, index
      ) =>
      (
        <EducationItem
          education={ education }
          index={ index }
          item={ item }
          key={ index }
          setEducation={ setEducation }
          submitted={ submitted }
        />
      ) ),
    [
      education,
      setEducation,
      submitted
    ]
  );

  useEffect(
    () => {

      if ( education.length === 0 ) {

        setSubmitted( false );

      }

    },
    [ education ]
  );
  return (
    <section
      id="education">
      <h2>
        Education
      </h2>
      <List
        dense
      >
        { educationItems }
      </List>
      <Button
        hidden={ submitted }
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
        variant="contained">
        Add Education
      </Button>
      <Button
        hidden={ submitted || education.length === 0 }
        onClick={ () =>
          setSubmitted( true ) }
        variant="contained">
        Submit
      </Button>
    </section>
  );

};

export default Education;
