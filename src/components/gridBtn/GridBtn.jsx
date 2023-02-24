// @flow 

import { useState } from "react";


export const GridBtn = ({setGrid}) => {
    const[index, setIndex] = useState(1)
    const className = [
        {
            classBtn:"grid__item_3",
            classGrid:"grid-3"
     
        },  
        {
            classBtn:"grid__item_4",
            classGrid:"grid-5"
           
        }
    
    
    ]
    const onGrid = (i,classGrid)=> {
        setIndex(i)
        setGrid(classGrid)
    }
    return (
       <>
        {className.map((item,i) => 
        <button
        key={i} 
        className={`grid__item ${item.classBtn} ${index === i ? "_active": ""} `}
        onClick={() => onGrid(i,item.classGrid)}
        ></button> )}
       </>
    );
};