import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm() {
  const [inputHandler, setInputHandler] = useState("");

  const titleInputHandler = (event) => {
    setInputHandler(event.target.value);
  };

  return (
    <form>
      <div>
        <div>
          <label>Title</label>
          <input type="text" onChange={titleInputHandler} />
        </div>

        <div>
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" />
        </div>

        <div>
          <label>Date:</label>
          <input type="date" />
        </div>

        <div>
          <button>Add Expenses</button>
        </div>
      </div>
    </form>
  );
}

export default ExpenseForm;
