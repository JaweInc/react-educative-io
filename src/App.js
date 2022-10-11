import { useReducer } from 'react';
import './App.css';


const reducer = (state, action) => {
  switch(action.type) {
    case "DEPOSIT":
      return state + action.payload;

    case "WITHDRAWAL":
      return state - action.payload;

    default:
      return state
  }
}

const App = () => {

  const deposit = (amount) => {
    dispatchAmount({
      type: "DEPOSIT",
      payload: amount
    })
  }

  const withdraw = (amount) => {
    dispatchAmount({
      type: "WITHDRAWAL",
      payload: amount
    })
  }

  const [amount, dispatchAmount] = useReducer(reducer, 500)
  return (
    <div className={'text-align'}>
      <h1>{amount}</h1>
      <button onClick={() => deposit(100)}>Deposit</button>
      <button onClick={() => withdraw(100)}>Withdrawal</button>
    </div>
  )
}

export default App