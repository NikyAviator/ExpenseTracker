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

  // Render One ExpenseItem per element in the array! 1. Single curly bracer. Med map! POG AF
  // We made another array from one array
  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {props.items.map((expense) => (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
}
