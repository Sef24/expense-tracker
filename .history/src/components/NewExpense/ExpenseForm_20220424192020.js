import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm() {
  return (
    <form>
      <div>
        <div>
          {" "}
          Title
          <input type="text" />
        </div>
      </div>
    </form>
  );
}

export default ExpenseForm;
