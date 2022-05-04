import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./NewExpense/ExpensesFilter";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <div>
      <div className="expenses  bg-slate-800 ... ">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />

        {props.items.map((expenses) => (
          <ExpenseItem
            title={expenses.title}
            amount={expenses.amount}
            date={expenses.date}
          />
        ))}
      </div>
    </div>
  );
}

export default Expenses;
