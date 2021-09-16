import React, { useState } from "react";
import Cards from "../UI/Cards";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpenseFilter";
import "./Expenses.css";
const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  let expensesContent = <p>No Expense Found</p>;
  if(filteredExpenses.length>0){
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ))
  }
  return (
    <Cards className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {expensesContent}
    </Cards>
  );
};

export default Expenses;
