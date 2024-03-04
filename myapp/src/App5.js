import React from 'react';

export default function App5() {
    // let names=["John","Mike","Andrew"];
    let products=[
        {id:1, name:"Product 1", price:440},
        {id:1, name:"Product 1", price:440},
    ]
  return (
    <ul>
        {products.map((e,i) =>(
            <li key={i}>{e.name}-{e.price}</li>
        ))}
    </ul>
  );
}
