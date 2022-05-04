import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm() {
  return (
    <form>
      <div className="flex justify-center pt-4 m-3">
        <div>Title</div>
        <input className="border-2 mr-4 ml-2" type="text" />

        <div>Amount</div>
        <input
          className="border-2 mr-4 ml-2"
          type="number"
          min="0.01"
          step="0.01"
        />

        <div>Date:</div>
        <input className="border-2 mr-4 ml-2" type="date" />
      </div>
      <div className="flex justify-center">
        <button>Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
