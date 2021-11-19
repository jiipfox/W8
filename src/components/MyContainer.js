import MyList from "./MyList.js";
import React, { useState } from 'react';

function MyContainer(){
    const texts = ["Item 1", "Item 2", "Item 3"];

    const [count, setCount] = useState(texts.length)

    const [items, setItems] = useState([
        {id: "1", text: texts[0]},
        {id: "2", text: texts[1]},
        {id: "3", text: texts[2]}]
        );

    function incrementCount(){
        setCount(prevCount => prevCount + 1)
    }

    console.log(count);
    console.log(items);


    // current state ja funktio joka muuttaa
    //const [currentState, functionThatUpdatesTheState] = useState(value);
    const header = "Not so interesting list component";
    
    return (
        <>
        <MyList header={header} items={items} />
        <textarea id="textarea"></textarea>
        <p>{count}</p>
        <button onClick={incrementCount}>Append item</button>
      </>
    )
}

export default MyContainer