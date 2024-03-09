import React from 'react'

export default function App7() {
    const handleClick=(msg)=>{
        alert(msg)
    }
  return (
    <div>
        <button onClick={()=>handleClick('Hi John')}>Click</button>
    </div>
  );
}
