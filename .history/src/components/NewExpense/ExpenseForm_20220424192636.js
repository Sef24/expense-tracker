import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm() {
  return (
    <form className=" justify-items-center">
      <div>
        <label>Title</label>
        <input type="text" />

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
