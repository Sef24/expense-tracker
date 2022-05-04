import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm() {
  return (
    <form>
      <div>
        <div>Title</div>
        <input type="text" />

        <div>Amount</div>
        <input type="number" />

        <div>Date</div>
      </div>
      <div>
        <button>Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
