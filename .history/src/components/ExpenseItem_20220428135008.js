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
    <div className="expense-item bg-gradient-to-r  from-slate-700  to-slate-800 ... ">
      <ExpenseDate date={props.date} />

      <div className="expense-item__description">
        <h2>{props.title}</h2>

        <div className="expense-item__price bg-gradient-to-r from-blue-900 via-sky-700 to-indigo-900 ...">
          ${props.amount}
        </div>
      </div>
      <button
        className="p-2 ml-4 border-transparent rounded-full border-0 
        bg-slate-800 font-bold text-slate-50"
        onClick={clickHandler}
      >
        Change Title
      </button>
    </div>
  );
}

export default ExpenseItem;
