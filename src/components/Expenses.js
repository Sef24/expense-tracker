import React, { useState } from "react";

import "./Expenses.css";
import ExpensesList from "./ExpensesList";
import ExpensesFilter from "./NewExpense/ExpensesFilter";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2022");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <div className="expenses bg-gradient-to-tr from-purple-700 ... border-0 ">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesList items={filteredExpenses} />
      </div>
    </div>
  );
}

export default Expenses;
