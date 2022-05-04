import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm() {
  const [titleHandler, setTitleHandler] = useState("");
  const [amountHandler, setAmountHandler] = useState("");
  const [dateHandler, setDateHandler] = useState("");

  const titleInputHandler = (event) => {
    setTitleHandler(event.target.value);
  };
  const amountInputHandler = (event) => {
    setAmountHandler(event.target.value);
  };
  const dateInputHandler = (event) => {
    setDateHandler(event.target.value);
  };
  console.log(ExpenseForm);

  return (
    <form>
      <div>
        <div>
          <label>Title</label>
          <input type="text" onChange={titleInputHandler} />
        </div>

        <div>
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountInputHandler}
          />
        </div>

        <div>
          <label>Date:</label>
          <input type="date" onChange={dateInputHandler} />
        </div>

        <div>
          <button>Add Expenses</button>
        </div>
      </div>
    </form>
  );
}

export default ExpenseForm;
