import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm() {
  return (
    <form className="w-full rounded-lg items-center justify-evenly mt-6 m-4">
      <div>
        <label>Title</label>
        <input type="text" className="border-2 rounded-md ml-2" />

        <label>Amount</label>
        <input type="number" min="0.01" step="0.01" />

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
