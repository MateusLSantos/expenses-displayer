/*
This component holds a group of expenses and displays them together.
*/

import "./ExpensesContainer.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList.js"
import { useState } from "react";

function ExpensesContainer(props) {
  const [enteredFilter, setEnteredFilter] = useState("2020");

  const filteredItems = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === enteredFilter;
  });

  const changeFilterHandler = (filterData) => {
    setEnteredFilter(filterData);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={enteredFilter}
          onChangeFilter={changeFilterHandler}
        />
        <ExpensesList items={filteredItems} />
      </Card>
    </div>
  );
}

export default ExpensesContainer;
