import React from "react";
import "./App.css";
import Expenses from './Expenses/Expenses'

const DUMMY_EXPENSES = [{
  title: "Car Insurance",
  amount: "100000",
  date: new Date(2018, 5, 19)
},
{
  title: "House Insurance",
  amount: "100000",
  date: new Date(2019, 6, 19)
},
{
  title: "Computer Insurance",
  amount: "100000",
  date: new Date(2020, 7, 19)
},
{
  title: "Phone Insurance",
  amount: "100000",
  date: new Date(2021, 8, 19)
}]

const App = () => {
  return (
    <div className="App">

      <Expenses expenses={DUMMY_EXPENSES} />
    </div>
  )
};

export default App;