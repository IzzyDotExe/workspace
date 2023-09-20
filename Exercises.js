import {useState} from "react";

export function Sushi({ name, type }) {
  
  let clicks = useState(0)
  return (
    <>
      <h1>{name}</h1>
      <p>{type}</p>
    </>
  );
} 
