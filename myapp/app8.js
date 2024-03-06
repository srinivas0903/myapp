import React from 'react'

export default function app8(props) {
    app8.defaultProps={name:"Catchy",age : 20};
  return (
    <div>
        Hello{props.name}.You are {props.age}
    </div>
  )
}
