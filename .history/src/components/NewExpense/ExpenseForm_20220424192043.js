import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm() {
  return (
    <form>
      <div>
        <label>
          Title
          <input type="text" />
        </label>
      </div>
    </form>
  );
}

export default ExpenseForm;
