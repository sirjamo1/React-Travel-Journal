import React from "react";

export default function Name(props) {
  return (
    <div>
      <p>My first name is {props.first}</p>
      <p>My secound name is {props.last}</p>
      <hr />
    </div>
  );
}
