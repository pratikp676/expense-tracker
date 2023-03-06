import React, { useState } from 'react';
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from './ExpensesList';

function Expenses(props) {

  const [filteredYear, setFilteredYear] = useState("2020")

  const filterChangeHandler =(selectedYear) => {
    setFilteredYear(selectedYear);
    console.log("In Expense.js")
    console.log(selectedYear)
  }
  const filteredYearRecords = props.items.filter(item => item.date.getFullYear() === Number(filteredYear))
  // console.log(filteredYearRecords)

  


  return (
    <div>
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}></ExpensesFilter>
      <ExpensesList items={filteredYearRecords}/>
    </Card>
    </div>
  );
}

export default Expenses;
