import React, { useState } from "react";
import "./Expenses.css";
import Card from "../Ui/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2022");

  const filterChangeHandler = (selectedYear) => {
    console.log(selectedYear)
    setFilteredYear(selectedYear);
  };

  const checkYear = (expense) => {
    console.log("actual year: " + expense.date.toDate().getFullYear().toString());
    console.log("filtered year: " + filteredYear);
    return (
      expense.date.toDate().getFullYear().toString() ===
      filteredYear
    );
  };

   const expensesContent = props.items
      .filter(checkYear)

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onSaveFilteredList={filterChangeHandler}
        />
        <ExpensesChart expenses={expensesContent} />
        <ExpensesList items={expensesContent} />
      </Card>
    </div>
  );
};

export default Expenses;

/*
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
*/
