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
    <div className="expense-item bg-gradient-to-r  from-blue-700 via-emerald-400 to-indigo-700 ... ">
      <ExpenseDate date={props.date} />

      <div className="expense-item__description">
        <h2>{props.title}</h2>

        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button
        className="p-2 ml-4 border-transparent rounded-full border-0 
        bg-sky-400 font-bold text-slate-50"
        onClick={clickHandler}
      >
        Change Title
      </button>
    </div>
  );
}

export default ExpenseItem;
