import CheckIcon from "@mui/icons-material/Check";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import ListItemSecondaryAction from "@mui/material/ListItemSecondaryAction";
import ListItemText from "@mui/material/ListItemText";
import TextField from "@mui/material/TextField";
import { useEffect, useState } from "react";

const SkillsItem = ( { index,
  item,
  setSkills,
  skills } ) => {

  const [
    edit,
    setEdit,
  ]             = useState( false );
  const [
    skillsItem,
    setSkillsItem,
  ] = useState( item );
  useEffect(
    () => {

      setSkills( [
        ...skills.slice(
          0,
          index
        ),
        skillsItem,
        ...skills.slice( index + 1 ),
      ] );

    },
    [ skillsItem ]
  );
  const handleDelete = () =>
    setSkills( [
      ...skills.slice(
        0,
        index
      ),
      ...skills.slice( index + 1 ),
    ] );
  const handleEdit   = () =>
    setEdit( !edit );
  return (
    <ListItem
      key={ index }>
      <ListItemText
        hidden    = { edit }
        primary   = { skillsItem.skill }
        secondary = { skillsItem.description }
      />
      { edit && (
        Object.keys( skillsItem )
          .map( key =>
            (
              <TextField
                key      = { key }
                label    = { key }
                onChange = { event =>
                  setSkillsItem( {
                    ...skillsItem,
                    [ key ]: event.target.value,
                  } )
                }
                value={ skillsItem[ key ] }
              />
            ) )
      ) }
      <ListItemSecondaryAction>
        <IconButton
          edge    = "end"
          onClick = { handleDelete }
        >
          <DeleteIcon />
        </IconButton>
        <IconButton
          edge    = "end"
          onClick = { handleEdit }
        >
          { edit
            ? <CheckIcon />
            : <EditIcon />}
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );

};
export default SkillsItem;
