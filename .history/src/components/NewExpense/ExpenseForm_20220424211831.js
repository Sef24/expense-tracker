import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm() {
  return (
    <form>
      <div>
        <div>
          <label>Title</label>
          <input type="text" />
        </div>

        <div>
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" />
        </div>
      </div>
    </form>
  );
}

export default ExpenseForm;
