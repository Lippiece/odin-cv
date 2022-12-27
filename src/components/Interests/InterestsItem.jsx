import CheckIcon from "@mui/icons-material/Check";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import ListItemSecondaryAction from "@mui/material/ListItemSecondaryAction";
import ListItemText from "@mui/material/ListItemText";
import TextField from "@mui/material/TextField";
import { useEffect, useState } from "react";

const InterestsItem = ( {
  index,
  item,
  setInterests,
  interests,
  submitted,
} ) => {

  const [
    edit,
    setEdit,
  ] = useState( false );
  const [
    interestsItem,
    setInterestsItem,
  ] = useState( item );
  useEffect(
    () => {

      // update the interests array with the current interestsItem
      setInterests( [
        ...interests.slice(
          0,
          index
        ),
        interestsItem,
        ...interests.slice( index + 1 ),
      ] );

    },
    [ interestsItem ]
  );
  const handleDelete = () => {

    setInterests( [
      ...interests.slice(
        0,
        index
      ),
      ...interests.slice( index + 1 ),
    ] );

  };
  const handleEdit   = () => {

    setEdit( !edit );

  };
  return (
    <ListItem
      key={ index }
    >
      <ListItemText
        hidden={ edit }
        primary={ interestsItem.interest }
        secondary={ interestsItem.description }
      />
      { edit && (
        <form>
          {
            Object.keys( interestsItem )
              .map( key =>
                (
                  <TextField
                    key={ key }
                    label={ key }
                    onChange={ event =>
                      setInterestsItem( {
                        ...interestsItem,
                        [ key ]: event.target.value,
                      } )
                    }
                    value={ interestsItem[ key ]
                    } />
                ) )
          }
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
            : <EditIcon />}
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );

};
export default InterestsItem;
