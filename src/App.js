import React, {useState} from 'react';
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import Heading from './components/UI/Heading';

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "iPhone 13 Pro",
    amount: 999.99,
    date: new Date(2021, 8, 17),
  },
  { 
    id: "e2", 
    title: "New TV", 
    amount: 799.49, 
    date: new Date(2019, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2022, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2022, 5, 12),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const addExpenseHandler = expense =>{
    setExpenses((prevExpenses)=>{
      return [expense, ...prevExpenses];
    });
  }

  return (
    <div>
      <Heading />
      <NewExpense onAddExpense = {addExpenseHandler} />
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
