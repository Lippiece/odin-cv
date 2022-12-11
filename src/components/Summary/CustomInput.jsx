import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState } from "react";

const CustomInput = ( { setSummary } ) => {

  const [
    customInput,
    setCustomInput,
  ] = useState( "" );
  const [
    active,
    setActive,
  ]             = useState( false );
  return (
    <>
      <Button
        onClick={ () =>
          setActive( !active ) }
        variant="contained">
        Add Custom Input
      </Button>
      { active && (
        <TextField
          id="customInput"
          label="customInput"
          onChange={ event =>
            setCustomInput( event.target.value ) }
          value={ customInput }
          variant="outlined"
        />
      ) }
    </>
  );

};
export default CustomInput;
