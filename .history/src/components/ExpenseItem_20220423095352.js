import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props) {
  const clickHandler = () => {
    console.log("clicked");
  };
  return (
    <div className="expense-item ">
      <ExpenseDate date={props.date} />

      <div className="expense-item__description">
        <h2>{props.title}</h2>

        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button
        className="p-2 ml-4 border-4 border-transparent rounded-sm bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ..."
        onClick={clickHandler}
      >
        Change Title
      </button>
    </div>
  );
}

export default ExpenseItem;
