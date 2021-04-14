/*
This component holds a group of expenses and displays them together.
*/

import "./ExpensesContainer.css";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";

function ExpensesContainer(props) {
  const [enteredFilter, setEnteredFilter] = useState("");
  const changeFilterHandler = (filterData) => {
    setEnteredFilter(filterData);
    console.log(filterData);
  };

  const expenses = props.expenses;
  return (
    <div>
      <Card className="expenses">
        <h1>{enteredFilter}</h1>
        <ExpensesFilter onChangeFilter={changeFilterHandler} />
        <ExpenseItem
          title={expenses[0].title}
          amount={expenses[0].amount}
          date={expenses[0].date}
          id={expenses[0].id}
        />
        <ExpenseItem
          title={expenses[1].title}
          amount={expenses[1].amount}
          date={expenses[1].date}
          id={expenses[1].id}
        />
        <ExpenseItem
          title={expenses[2].title}
          amount={expenses[2].amount}
          date={expenses[2].date}
          id={expenses[2].id}
        />
        <ExpenseItem
          title={expenses[3].title}
          amount={expenses[3].amount}
          date={expenses[3].date}
          id={expenses[3].id}
        />
      </Card>
    </div>
  );
}

export default ExpensesContainer;
