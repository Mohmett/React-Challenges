import { useReducer } from "react";

// const initaialValue = { count: 0};
const initaialValue = { countA: 0, countB:0 };




const reducer = (state, action) => {
console.log(state.countA)

  switch (action.type) {
    case "incrementA":
      return {...state, countA: state.countA + 1 };
    case "decrementA":
      return {...state,countA: state.countA > 0 ? state.countA - 1 : 0 };
      case "incrementB":
        return{...state,countB: state.countB+1}
        case "decrementB":
            return{...state, countB: state.countB > 0 ? state.countB - 1 : 0  }
    case "reset":
      return initaialValue;
  }
};
const Counter = () => {

    const [state,depatcher]=useReducer(reducer,initaialValue);

  return (
    <>
    <div>
      <h1>Counter A: <span>{state.countA}</span> </h1>
      <button onClick={()=>{depatcher({type:"incrementA"})}}>Increase</button>
      <button onClick={()=>{depatcher({type:"decrementA"})}}>Decrease</button>
    </div>

    <div>
      <h1>Counter B: <span>{state.countB}</span> </h1>
      <button onClick={()=>{depatcher({type:"incrementB"})}}>Increase</button>
      <button onClick={()=>{depatcher({type:"decrementB"})}}>Decrease</button>
    </div>
      <button onClick={()=>{depatcher({type:"reset"})}}>Reset</button>

    </>
  );
};

export default Counter;
