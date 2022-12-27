import CheckIcon from "@mui/icons-material/Check";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import ListItemSecondaryAction from "@mui/material/ListItemSecondaryAction";
import ListItemText from "@mui/material/ListItemText";
import TextField from "@mui/material/TextField";
import { useEffect, useState } from "react";

const EducationItem = ( {
  index,
  item,
  setEducation,
  education,
  submitted,
} ) => {

  const [
    educationItem,
    setEducationItem,
  ] = useState( item );
  const [
    edit,
    setEdit,
  ] = useState( false );

  const handleDelete = () => {

    setEducation( [
      ...education.slice(
        0,
        index
      ),
      ...education.slice( index + 1 ),
    ] );

  };

  const handleEdit = () => {

    setEdit( !edit );

  };

  useEffect(
    () => {

      setEducation( [
        ...education.slice(
          0,
          index
        ),
        educationItem,
        ...education.slice( index + 1 ),
      ] );

    },
    [
      education,
      educationItem,
      index,
      setEducation,
    ]
  );

  return (
    <ListItem
      key={ index }>
      <ListItemText
        hidden={ edit }
        primary={ `${ item.school }: ${ item.startYear } - ${ item.endYear }` }
        secondary={ `${ item.degree } in ${ item.fieldOfStudy }. ${ item.description }` }
      />
      { edit && (
        <form>
          {Object.keys( educationItem )
            .map( key =>
              (
                <TextField
                  key={ key }
                  label={ key }
                  onChange={ event =>
                    setEducationItem( {
                      ...educationItem,
                      [ key ]: event.target.value,
                    } )
                  }
                  value={ educationItem[ key ] }
                />
              ) )}
        </form>
      ) }
      <ListItemSecondaryAction
        hidden={ submitted }
      >
        <IconButton
          onClick={ handleDelete }
          variant="contained">
          <DeleteIcon />
        </IconButton>
        <IconButton
          onClick={ handleEdit }
          variant="contained">
          { edit
            ? <CheckIcon />
            : <EditIcon /> }
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );

};
export default EducationItem;
