import Button from "@mui/material/Button";
import List from "@mui/material/List";
import { useState } from "react";
import InterestsItem from "./InterestsItem";
// follow the same pattern as Skills and Experience
const Interests = () => {
  const [
    interests,
    setInterests,
  ] = useState( [] );
  return (
    <section
      id="interests"
    >
      <h1>
        Interests
      </h1>
      <List
        dense
      >
        { interests.map( (
          item, index
        ) =>
          (
            <InterestsItem
              index       = { index }
              item        = { item }
              key         = { index }
              setInterests= { setInterests }
              interests   = { interests }
            />
          ) ) }
      </List>
      <Button
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
    </section>
  );
};
export default Interests;
