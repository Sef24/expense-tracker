import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./NewExpense/ExpensesFilter";

function Expenses(props) {
  <h1 className=""> Hello</h1>;
  return (
    <div>
      <div className="expenses p-3bg-gradient-to-r from-slate-700 to-slate-900 ...">
        <ExpensesFilter />
        <ExpenseItem
          title={props.items[0].title}
          amount={props.items[0].amount}
          date={props.items[0].date}
        />

        <ExpenseItem
          title={props.items[1].title}
          amount={props.items[1].amount}
          date={props.items[1].date}
        />
        <ExpenseItem
          title={props.items[2].title}
          amount={props.items[2].amount}
          date={props.items[2].date}
        />
        <ExpenseItem
          title={props.items[3].title}
          amount={props.items[3].amount}
          date={props.items[3].date}
        />
      </div>
    </div>
  );
}

export default Expenses;
