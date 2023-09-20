import {useState} from "react";

export function Sushi({ name, type }) {
  
  const [count, setCount] = useState(0);

  function HandleClick() {
    setCount(count+1)
  }

  return (
    <section onClick={HandleClick}>
      <h1>{name}</h1>
      <p>{type}{count}</p>
    </section>
  );
} 
