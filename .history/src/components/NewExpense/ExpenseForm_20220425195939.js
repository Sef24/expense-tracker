import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm() {
  return (
    <form>
      <div className="flex justify-center pt-4">
        <div>Title</div>
        <input type="text" />

        <div>Amount</div>
        <input type="number" min="0.01" step="0.01" />

        <div>Date</div>
        <input type="date" />
      </div>
      <div className="flex justify-center">
        <button>Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
