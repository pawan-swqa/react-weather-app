import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { bankActionCreators, State, wheatherActionCreators } from "./state";
import React, { useEffect } from "react";
import BarChart from "./components/bar-chart";

function App() {
  const dispatch = useDispatch();
  const { depositMoney, withdrawMoney, bankrupt } = bindActionCreators(
    bankActionCreators,
    dispatch
  );
  const { getWheather } = bindActionCreators(wheatherActionCreators, dispatch);
  const amount = useSelector((state: State) => state.bank);
  // getWheather('/todos/1');
  // const data = useSelector((state: State) => state.wheatherData);
  // console.log(data , "in state");

  // ComponentDidMount
  useEffect(() => {
    console.log("Behavior before the component is added to the DOM");
    getWheather("/todos/1");
  }, []); // Mark [] here.

  const data = useSelector((state: State) => state.wheatherData);
    console.log(data, "in state");

  //ComponentDidUpdate
  useEffect(() => {
    console.log("Behavior when the component receives new state or props.");
  });

  return (
    <div className="App">
      {/* <h1>{amount}</h1>
      <button
        onClick={() => {
          depositMoney(10000);
        }}
      >
        Deposit
      </button>
      <button
        onClick={() => {
          withdrawMoney(5000);
        }}
      >
        Withdraw
      </button>
      <button
        onClick={() => {
          bankrupt();
        }}
      >
        Bankrupt
      </button> */}

      <div style={{width:"50%"}}>
        <BarChart></BarChart>
      </div>
    </div>
  );
}

export default App;
