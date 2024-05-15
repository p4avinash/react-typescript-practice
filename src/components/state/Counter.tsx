import React, { useReducer } from "react"

type CounterState = {
  count: number
}

type UpdateAction = {
  type: "increment" | "decrement"
  payload: number
}

type ResetAction = {
  type: "reset"
}

type CounterAction = UpdateAction | ResetAction

const initialState = { count: 0 }

function reducer(state: CounterState, action: CounterAction) {
  if (action.type === "increment") {
    return { count: state.count + action.payload }
  } else if (action.type === "decrement") {
    return { count: state.count - action.payload }
  } else if (action.type === "reset") {
    return initialState
  } else {
    return state
  }
}

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: "increment", payload: 1 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "decrement", payload: 1 })}>
        Decrement
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </>
  )
}

export default Counter
