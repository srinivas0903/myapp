import React, { useState } from 'react';

export default function Hoo() {
    const [inputValue,setInputValue]=useState("HI");

    let onChange=(event)=>{
        const newValue=event.target.value;
        setInputValue(newValue)

    };
  return (
    <div>
        <input placeholder='Write Something' onChange={onChange}></input>
        {inputValue}
    </div>
  )
};
