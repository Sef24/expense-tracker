import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle("Updated");
    console.log(title);
  };

  return (
    <Card className="expense-item ">
      <ExpenseDate date={props.date} />

      <div className="expense-item__description">
        <h2>{props.title}</h2>

        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button
        className="p-2 ml-4 border-transparent rounded-full border-0 
        bg-gradient-to-r from-green-400 to-blue-500 
        hover:from-pink-500 hover:to-yellow-500 ...
        active:opacity-75"
        onClick={clickHandler}
      >
        Change Title
      </button>
    </Card>
  );
}

export default ExpenseItem;
