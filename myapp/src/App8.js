import React from 'react'

export default function App8(props) {
    App8.defaultprops = {name:"Catchy",age : 20};
  return (
    <div>
        Hello{props.name}.You are {props.age}
    </div>
  );
}
