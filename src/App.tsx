import { useState } from 'react';
import ExpenseList from './components/ExpenseList';

function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, description: 'Milk', amount: 3.5, category: 'Groceries' },
    {
      id: 2,
      description: 'Electricity Bill',
      amount: 50.25,
      category: 'Utilities',
    },
    {
      id: 3,
      description: 'Movie Tickets',
      amount: 15.0,
      category: 'Entertainment',
    },
    { id: 4, description: 'New Book', amount: 12.99, category: 'Other' },
  ]);

  if (expenses.length === 0) return null;

  return (
    <div>
      <ExpenseList
        expenses={expenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      />
    </div>
  );
}

export default App;
