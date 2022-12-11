// import required modules from mui
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState } from "react";

const Summary = () => {

  // initially, this is the form that has to be filled out
  const [
    summary,
    setSummary,
  ] = useState( {
    city    : "",
    country : "",
    email   : "",
    github  : "",
    linkedin: "",
    name    : "",
    summary : "",
    website : "",
  } );
  return (
    <div
      className="summary">
      <h1>
        Summary
      </h1>
      <form>
        {Object.keys( summary )
          .map( key =>
            (
              <TextField
                id={ key }
                label={ key }
                onChange={ e => {

                  setSummary( {
                    ...summary,
                    [ key ]: e.target.value,
                  } );

                } }
                value={ summary[ key ] }
                variant="outlined"
              />
            ) ) }
        <CustomInput
          setSummary={ setSummary }
        />
        <Button
          onClick={ () =>
            console.log( summary ) }
          variant="contained">
          Submit
        </Button>

      </form>
    </div>
  );

};

export default Summary;
