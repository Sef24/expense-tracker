import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle("Updated");
    console.log(title);
  };

  return (
    <div className="expense-item bg-gradient-to-r  from-blue-700 via-emerald-600 to-indigo-700 ... ">
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
    </div>
  );
}

export default ExpenseItem;
