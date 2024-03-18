import { useReducer } from "react";
import ReactDOM from "react-dom/client";

function reducer(s, action) {
  switch (action.type) {
    case "increment": 
      return { count: s.count + 1 };
    case "decrement":
      return { count: s.count - 1 };
    default:
      return { count: s };
  }
}
export default function App21() {
  const [s, d] = useReducer(reducer, { count: 0 });
  function increment() {
    d({ type: "increment" });
  }
  function decrement() {
    d({ type: "decrement" });
  }
  return (
    <>
      <input type="button" onClick={decrement} value="-"></input>
      {s.count}
      <input type="button" onClick={increment} value="+"></input>
    </>
  );
}