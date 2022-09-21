import React from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const onSaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.floor(Math.random() * 100).toString(),
    };
    props.onAddExpense(expenseData); // hämtar från App.js å matar in expenseData
  };

  return (
    <div className='new-expense'>
      <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} />
    </div>
  );
};
// shows that a function triggers when something happens with  ExpenseForm (onSaveExpenseData)
// we point on the onSaveEDH func
export default NewExpense;
