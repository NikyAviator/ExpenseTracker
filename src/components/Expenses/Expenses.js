import React, { useState } from 'react';

import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';

export default function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2020'); // getter and setter å default

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  // filters a new array that we keep or not depending on what we return is true or not!
  // in this case we cheching if the year stored in the date is the same year as the selected in the filter, return false otherwise.
  // original array is not lost!
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  // Render One ExpenseItem per element in the array! 1. Single curly bracer. Med map! POG AF
  // We made another array from one array
  // VIKTIGT MED key={expense.id}!
  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
}
