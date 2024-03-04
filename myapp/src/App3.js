import React from "react";
import Sqr from "./Sqr";
export default function App3(){
    const sqrfunction = (num)=>{
        return num * num;
    }
    return <div><sqr n={5} f={sqrfunction}/></div>
}