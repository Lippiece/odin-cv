// import required modules from mui
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState } from "react";

import CustomInput from "./CustomInput";

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
    <section
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
                key={ key }
                label={ key }
                onChange={ event =>
                  setSummary( {
                    ...summary,
                    [ key ]: event.target.value,
                  } ) }
                value={ summary[ key ] }
                variant="outlined"
              />
            ) ) }
        {/* <CustomInput
          setSummary = { setSummary }
          summary    = { summary }
        /> */}
        <Button
          onClick={ () =>
            console.log( summary ) }
          variant="contained">
          Submit
        </Button>

      </form>
    </section>
  );

};

export default Summary;
