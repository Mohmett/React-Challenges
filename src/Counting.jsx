import { useState } from "react";

const Counting=()=>{

    const [count,setCount]=useState(0)
    

    const handdleDecrement =()=>{
        setCount((prev)=>prev-1);
    }
     const handdleIncrement =()=>{
        setCount((prev)=>prev+1);
    }

    return(
        <div>
            <h1>Counting: <span>{count}</span></h1>
            <button disabled={count==0} onClick={handdleDecrement}>Decerement</button>
            <button onClick={handdleIncrement}>Incerement</button>

        </div>
    )
}


export default Counting;