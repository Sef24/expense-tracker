import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm() {
  return (
    <form className="flex items-center justify-between">
      <div>
        <div>Title</div>
        <input type="text" />

        <div>Amount</div>
        <input type="number" min="0.01" step="0.01" />

        <div>Date</div>
        <input type="date" />
      </div>
      <div className="">
        <button>Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
