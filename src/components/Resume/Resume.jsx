import "../../css/Resume.css";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

// data is
/* {
    education : [
            ...education,
            {
              degree      : "Degree",
              description : "Description",
              endYear     : "End Year",
              fieldOfStudy: "Field of Study",
              school      : "School",
              startYear   : "Start Year",
            },
          ],
    experience: [
            ...experience,
            {
              company : "Company",
              end     : "End",
              position: "Position",
              start   : "Start",
            },
          ],
    interests : [
            ...interests,
            {
              description: "Description",
              interest   : "Interest",
            },
          ],
    skills    : [
            ...skills,
            {
              description: "Description",
              skill      : "Skill",
            },
          ],
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
  } */
const Resume = ( { data } ) => {

  const {
    education,
    experience,
    interests,
    skills,
    summary,
  } = data;

  return (
    <section
      id="resume">
      <h1>
        Resume
      </h1>
      <h2>
        Summary
      </h2>
      <List
        dense>
        <ListItem>
          <ListItemText
            primary={ summary.name }
            secondary={"Name"}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={ summary.email }
            secondary={"Email"}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={ summary.website }
            secondary={"Website"}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={ summary.city }
            secondary={"City"}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={ summary.country }
            secondary={"Country"}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={ summary.summary }
            secondary={ "Summary" }
          />
        </ListItem>
      </List>
      <h2>
        Skills
      </h2>
      <List
        dense>
        {skills.map( (
          {
            description,
            skill,
          }, index
        ) =>
          (
            <ListItem
              key={index}>
              <ListItemText
                primary={ `${ skill }: ${ description }` }
              />
            </ListItem>
          ) )}
      </List>
      <h2>
        Experience
      </h2>
      <List
        dense>
        {experience.map( (
          {
            company,
            end,
            position,
            start,
          }, index
        ) =>
          (
            <ListItem
              key={index}>
              <ListItemText
                primary={ `${ company }: ${ position }` }
                secondary={ `${ start } - ${ end }` }
              />
            </ListItem>
          ) )}
      </List>
      <h2>
        Education
      </h2>
      <List
        dense>
        {education.map( (
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
              key={index}>
              <ListItemText
                primary={ `${ school }: ${ degree } in ${ fieldOfStudy }, ${ startYear } - ${ endYear }` }
                secondary={ `${ description }` }
              />
            </ListItem>
          ) )}
      </List>
      <h2>
        Interests
      </h2>
      <List
        dense>
        {interests.map( (
          {
            description,
            interest,
          }, index
        ) =>
          (
            <ListItem
              key={index}>
              <ListItemText
                primary={ `${ interest }: ${ description }` }
              />
            </ListItem>
          ) ) }
      </List>
    </section>
  );

};
export default Resume;
