import React from "react";
import { TagsInput } from "./Components/TagsInput";
import "./App.css";

function App() {
  return (
    <div className="App">
      <TagsInput
        buttonText={"Enviar Información"}
        color={"secondary"}
        label="label"
        variant="contained"
      />
    </div>
  );
}

export default App;
