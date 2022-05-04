import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm() {
  return (
    <form className="">
      <div className="w-full flex-wrap justify-between border-4 bg-slate-400 gap-1">
        <label>Title</label>
        <input type="text" className="border-2 rounded-md ml-2" />

        <label className="pl-2">Amount</label>
        <input
          type="number"
          min="0.01"
          step="0.01"
          className="border-2 rounded-md ml-2"
        />

        <label>Date:</label>
        <input type="date" />

        <div className="">
          <button>Enter Expenses</button>
        </div>
      </div>
    </form>
  );
}

export default ExpenseForm;
