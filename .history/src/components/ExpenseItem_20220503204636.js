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
    <li>
      <div className="expense-item bg-transparent border-x-cyan-100 ">
        <ExpenseDate date={props.date} />

        <div className="expense-item__description">
          <h2>{props.title}</h2>

          <div className="expense-item__price bg-sky-800">${props.amount}</div>
        </div>
        <button
          className="p-2 ml-4 border-transparent rounded-full border-0 
        bg-sky-800 font-bold text-slate-50"
          onClick={clickHandler}
        ></button>
      </div>
    </li>
  );
}

export default ExpenseItem;
