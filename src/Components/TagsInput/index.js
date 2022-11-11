import React, { useState, useRef } from "react";

// Material UI Components
import { TextField, Box, Chip, Button } from "@mui/material";

function TagsInput(props) {
  const [tags, setTags] = useState([]);
  const tagRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    !tagRef.current.value
      ? setTags([...tags])
      : setTags([...tags, tagRef.current.value]);
    tagRef.current.value = "";
    console.log(tags);
  };

  const handleDelete = (index) => {
    let data = [...tags];
    data.splice(index, 1);
    setTags(data);
  };

  return (
    <React.Fragment>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", margin: 10 }}
      >
        <TextField
          label={props.label}
          inputRef={tagRef}
          InputProps={{
            startAdornment: (
              <Box sx={{ margin: "0 0.2rem 0 0", display: "flex" }}>
                {tags.map((tag, index) => {
                  return (
                    <Chip
                      label={tag}
                      key={index}
                      onDelete={() => handleDelete(index)}
                    />
                  );
                })}
              </Box>
            ),
          }}
        />
        <Button
          variant={props.variant}
          color={props.color}
          onClick={handleSubmit}
          sx={{ marginTop: 2 }}
        >
          {props.buttonText}
        </Button>
      </form>
    </React.Fragment>
  );
}

export { TagsInput };
