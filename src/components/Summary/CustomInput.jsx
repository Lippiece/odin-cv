import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import {
  useEffect, useState,
} from "react";

const CustomInput = ( {
  summary,
  setSummary,
} ) => {

  const [
    customInput,
    setCustomInput,
  ] = useState( {
    name : "",
    value: "",
  } );
  const [
    active,
    setActive,
  ] = useState( false );

  // on custom input change, add it to the summary object
  useEffect(
    () => {

      if ( customInput.name !== "" && customInput.value !== "" ) {

        setSummary( {
          ...summary,
          [ customInput ]: "",
        } );

      }

    },
    [ customInput ]
  );

  return (
    <>
      <Button
        onClick={ () =>
          setActive( !active ) }
        variant="contained">
        Add Custom Input
      </Button>
      { active && (
        <>
          <TextField
            label="Property Name"
            onChange={ event =>
              setCustomInput( {
                ...customInput,
                name: event.target.value,
              } ) }
            value={ customInput.name }
            variant="outlined"
          />
          <TextField
            label="Property Value"
            onChange={ event =>
              setCustomInput( {
                ...customInput,
                value: event.target.value,
              } ) }
            value={ customInput.value }
            variant="outlined"
          />
        </>
      ) }
    </>
  );

};
export default CustomInput;
