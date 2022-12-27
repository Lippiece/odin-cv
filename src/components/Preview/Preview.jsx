import "../../css/Resume.css";

import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";

const Resume = ( { data } ) => {

  const {
    education,
    experience,
    interests,
    skills,
    summary,
  } = data;
  const reference = useRef();

  const doPrint = useReactToPrint( {
    content: () =>
      reference.current
  } );

  return (
    <div>
      <section
        id="resume"
        ref={ reference }
      >
        <h1>
          Resume
        </h1>
        <h2>
          Hi, I'm
          { " " }
          { summary.name }
        </h2>
        <h2>
          Summary
        </h2>
        <List
          dense
        >
          <ListItem>
            <ListItemText
              primary={ summary.email }
              secondary={ "Email" }
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary={ summary.website }
              secondary={ "Website" }
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary={ summary.city }
              secondary={ "City" }
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary={ summary.country }
              secondary={ "Country" }
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary={ summary.summary }
            />
          </ListItem>
        </List>
        <h2>
          Skills
        </h2>
        <List
          dense>
          { skills.map( (
            {
              description,
              skill,
            }, index
          ) =>
          (
            <ListItem
              key={ index }>
              <ListItemText
                primary={ `${ skill }: ${ description }` }
              />
            </ListItem>
          ) ) }
        </List>
        <h2>
          Experience
        </h2>
        <List
          dense>
          { experience.map( (
            {
              company,
              end,
              position,
              start,
            }, index
          ) =>
          (
            <ListItem
              key={ index }>
              <ListItemText
                primary={ `${ company }: ${ position }` }
                secondary={ `${ start } - ${ end }` }
              />
            </ListItem>
          ) ) }
        </List>
        <h2>
          Education
        </h2>
        <List
          dense>
          { education.map( (
            {
              degree,
              description,
              endYear,
              fieldOfStudy,
              school,
              startYear,
            }, index
          ) =>
          (
            <ListItem
              key={ index }>
              <ListItemText
                primary={ `${ school }: ${ degree } in ${ fieldOfStudy }, ${ startYear } - ${ endYear }` }
                secondary={ `${ description }` }
              />
            </ListItem>
          ) ) }
        </List>
        <h2>
          Interests
        </h2>
        <List
          dense>
          { interests.map( (
            {
              description,
              interest,
            }, index
          ) =>
          (
            <ListItem
              key={ index }>
              <ListItemText
                primary={ `${ interest }: ${ description }` }
              />
            </ListItem>
          ) ) }
        </List>
      </section>
      <Button
        color="primary"
        onClick={ doPrint }
        variant="contained"
      >
        Print
      </Button>
    </div>
  );

};

export default Resume;
