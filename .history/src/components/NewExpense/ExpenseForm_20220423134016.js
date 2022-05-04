import React from "react";
import "./ExpenseForm.css";

function ExpenseForm() {
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="text" />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="text" />
        </div>
      </div>
    </form>
  );
}

export default ExpenseForm;
