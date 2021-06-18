import React from "react";
import "./App.css";
import ExpenseItem from './Expenses/ExpenseItem'
import Card from "./UI/Card"

const App = () => {
  return (
    <div className="App">
      <Card className="expenses">
        <ExpenseItem />
      </Card>
    </div>
  )
};

export default App;