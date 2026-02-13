
import { useState } from "react"

const ToggleExercise4=()=>{

    const [value,setValue]=useState(false);

    const turnToggle=()=>{
        setValue(!value)
    }

return (
    <>
    <div style={{padding:"40px"}}>
    <p>Turned <span style={{color:"orange", fontWeight:"bold"}}>{value?"ON" : "OFF"}</span></p>
    <button onClick={turnToggle}>Turn {!value?"ON" : "OFF"}</button>
    </div>
    </>
)
}

export default ToggleExercise4;