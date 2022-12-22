import "../../css/Summary.css";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState } from "react";

const Summary = ( {
  summary,
  setSummary,
} ) => {

  const [
    submitted,
    setSubmitted,
  ] = useState( false );
  return (
    <section
      className="summary">
      <h2>
        Summary
      </h2>
      <form
        hidden={ submitted }
      >
        {Object.keys( summary )
          .map( key =>
            (
              <TextField
                id={ key }
                key={ key }
                label={ key }
                maxRows={Number.POSITIVE_INFINITY}
                multiline
                onChange={ event =>
                  setSummary( {
                    ...summary,
                    [ key ]: event.target.value,
                  } ) }
                value={ summary[ key ] }
                variant="outlined"
              />
            ) ) }
        <Button
          hidden={ submitted || Object.values( summary )
            .includes( "" ) }
          onClick={ () =>
            setSubmitted( true )}
          variant="contained"
        >
          Submit
        </Button>
      </form>
      <div
        hidden={ !submitted }
      >
        <p>
          {summary.name}
        </p>
        <p>
          {summary.city}
        </p>
        <p>
          {summary.country}
        </p>
        <p>
          {summary.email}
        </p>
        <p>
          {summary.github}
        </p>
        <p>
          {summary.linkedin}
        </p>
        <p>
          {summary.summary}
        </p>
        <p>
          {summary.website}
        </p>
      </div>
    </section>
  );

};

export default Summary;
