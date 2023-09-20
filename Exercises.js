import {useState} from "react";

export function Sushi({ name, type }) {
  
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>{name}</h1>
      <p>{type}{count}</p>
    </>
  );
} 
