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
      </div>
    </form>
  );
}

export default ExpenseForm;
