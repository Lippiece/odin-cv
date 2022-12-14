import CheckIcon from "@mui/icons-material/Check";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import ListItemSecondaryAction from "@mui/material/ListItemSecondaryAction";
import ListItemText from "@mui/material/ListItemText";
import TextField from "@mui/material/TextField";
import { useEffect, useState  } from "react";

const ExperienceItem = ( {
  index,
  item,
  setExperience,
  experience,
  submitted
} ) => {

  const [
    edit,
    setEdit,
  ] = useState( false );
  const [
    experienceItem,
    setExperienceItem,
  ] = useState( item );
  useEffect(
    () => {

      // update the experience array with the current experienceItem
      setExperience( [
        ...experience.slice(
          0,
          index
        ),
        experienceItem,
        ...experience.slice( index + 1 ),
      ] );

    },
    [ experienceItem ]
  );
  const handleDelete = () => {

    setExperience( [
      ...experience.slice(
        0,
        index
      ),
      ...experience.slice( index + 1 ),
    ] );

  };

  const handleEdit = () => {

    setEdit( !edit );

  };

  return (
    <ListItem
      key={ index }
    >
      <ListItemText
        hidden={ edit }
        primary={ `${ item.company }: ${ item.start } - ${ item.end }`}
        secondary={ item.position }
      />
      { edit && (
        <form
          className="experience-item-form">
          { Object.keys( experienceItem )
            .map( key =>
              (
                <TextField
                  id={ key }
                  key={ key }
                  label={ key }
                  onChange={ event =>
                    setExperienceItem( {
                      ...experienceItem,
                      [ key ]: event.target.value,
                    } ) }
                  size    = "small"
                  value   = { experienceItem[ key ] }
                  variant = "outlined"
                />
              ) ) }
        </form>
      ) }
      <ListItemSecondaryAction
        hidden={ submitted }
      >
        <IconButton
          edge="end"
          onClick={ handleDelete }
        >
          <DeleteIcon />
        </IconButton>
        <IconButton
          edge="end"
          onClick={ handleEdit }
        >
          { edit
            ? <CheckIcon />
            : <EditIcon />
          }
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );

};

export default ExperienceItem;
