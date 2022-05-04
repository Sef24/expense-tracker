import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm() {
  const [enteredTitle, setEnteredTitle] = useState("");

  const titleChangedHandler = (event) => {
    console.log(event.target.value);
  };

  return (
    <form className="flex items-center justify-evenly">
      <div className="w-full flex-wrap justify-between border-4 bg-slate-200 gap-1">
        <label>Title</label>
        <input
          type="text"
          className="border-2 rounded-md ml-2"
          onChange={titleChangedHandler}
        />

        <label className="pl-2">Amount</label>
        <input
          type="number"
          min="0.01"
          step="0.01"
          className="border-2 rounded-md ml-2"
        />

        <label className="pl-2">Date:</label>
        <input type="date" className="border-2 rounded-md ml-2" />

        <div className="flex items-center justify-center">
          <button className="border-2 p-2 mt-2 rounded-full bg-sky-500 border-sky-500 hover:bg-sky-600">
            Enter Expenses
          </button>
        </div>
      </div>
    </form>
  );
}

export default ExpenseForm;
