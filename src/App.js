import { useState } from "react";
import ExpensesContainer from "./components/Expenses/ExpensesContainer";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const [expenses, setExpenses] = useState([
    {
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2020, 7, 14),
      id: "e1",
    },
    {
      title: "Car Wash",
      amount: 19.97,
      date: new Date(2020, 11, 25),
      id: "e2",
    },
    {
      title: "Groceries",
      amount: 115.43,
      date: new Date(2021, 3, 10),
      id: "e3",
    },
    { title: "Babysitter", amount: 30.0, date: new Date(2021, 1, 8), id: "e4" },
  ]);

  const addExpenseHandler = (expenseData) => {
    setExpenses((prevExpenses) => {
      return [expenseData, ...prevExpenses]
    })
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <ExpensesContainer expenses={expenses} />
    </div>
  );
}

export default App;
