import React, { useReducer } from "react";

const initialState = { count: 0, step: 1 };

const reducer = (state, action) => {
    switch (action.type) {
        case "INCREMENT":
            return { ...state, count: state.count + state.step };
        case "DECREMENT":
            return { ...state, count: state.count - state.step };
        case "RESET":
            return { ...state, count: 0 };
        case "SET_STEP":
            return { ...state, step: action.payload };
        default:
            return state;
    }
};

function Counter() {
    const [state, dispatch] = useReducer(reducer, initialState);

    const handleIncrement = () => {
        dispatch({ type: "INCREMENT" });
    };

    const handleDecrement = () => {
        dispatch({ type: "DECREMENT" });
    };

    const handleReset = () => {
        dispatch({ type: "RESET" });
    };

    const handleStepChange = (event) => {
        const newStep = Number(event.target.value);
        dispatch({ type: "SET_STEP", payload: newStep });
    };

    return (
        <div className="Counter componentBox">
            <h2>Count: {state.count}</h2>
            <h3>Step: {state.step}</h3>
            <input
                type="number"
                value={state.step}
                onChange={handleStepChange}
            />
            <div>
                <button onClick={handleIncrement}>Increment</button>
                <button onClick={handleDecrement}>Decrement</button>
                <button onClick={handleReset}>Reset</button>
            </div>
        </div>
    );
}

export default Counter;