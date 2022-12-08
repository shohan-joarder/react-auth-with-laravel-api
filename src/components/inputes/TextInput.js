import React from "react";
import classes from "../styles/TextInput.module.css";

export default function TextInput({ ...rest }) {
  return (
    <div>
      <input className={classes.textInput} {...rest} />
    </div>
  );
}
