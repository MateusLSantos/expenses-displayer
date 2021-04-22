/*
This component holds a group of expenses and displays them together.
*/

import "./ExpensesContainer.css";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";

function ExpensesContainer(props) {
  const [enteredFilter, setEnteredFilter] = useState("2020");

  const filteredItems = props.expenses.filter((expense) => {
    return expense.date.getFullYear() === enteredFilter;
  });

  const changeFilterHandler = (filterData) => {
    setEnteredFilter(filterData);
  };

  let expensesContent = <p> No expenses found. </p>;

  if (filteredItems.length === 0) {
    expensesContent = filteredItems.map((expense) => {
      return (
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          key={expense.id}
        />
      );
    });
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={enteredFilter}
          onChangeFilter={changeFilterHandler}
        />
        {expensesContent}
      </Card>
    </div>
  );
}

export default ExpensesContainer;
