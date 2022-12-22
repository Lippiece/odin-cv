import Button from "@mui/material/Button";
import List from "@mui/material/List";
import { useState } from "react";

import InterestsItem from "./InterestsItem";

// follow the same pattern as Skills and Experience
const Interests = ( {
  interests,
  setInterests,
} ) => {

  const [
    submitted,
    setSubmitted,
  ] = useState( false );
  return (
    <section
      id="interests"
    >
      <h2>
        Interests
      </h2>
      <List
        dense
      >
        { interests.map( (
          item, index
        ) =>
          (
            <InterestsItem
              index       = { index }
              interests   = { interests }
              item        = { item }
              key         = { index }
              setInterests= { setInterests }
            />
          ) ) }
      </List>
      <Button
        hidden={ submitted }
        onClick={ () =>
          setInterests( [
            ...interests,
            {
              description: "Description",
              interest   : "Interest",
            },
          ] ) }
        variant="contained"
      >
        Add Interest
      </Button>
      <Button
        hidden={ submitted || interests.length === 0 }
        onClick={ () =>
          setSubmitted( true ) }
        variant="contained"
      >
        Submit
      </Button>
    </section>
  );

};
export default Interests;
