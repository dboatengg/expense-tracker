import { useState } from 'react';
import ExpenseList from './components/ExpenseList';
import ExpenseFilter from './components/ExpenseFilter';
import ExpenseForm from './components/ExpenseForm';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('');
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
    {
      id: 4,
      description: 'New Book',
      amount: 12.99,
      category: 'Entertainment',
    },
  ]);

  if (expenses.length === 0) return null;

  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;

  return (
    <div className='container mt-5'>
      <div className='mb-5'>
        <ExpenseForm />
      </div>
      <div className='mb-3'>
        <ExpenseFilter
          onSelectCategory={(category) => setSelectedCategory(category)}
        />
      </div>
      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      />
    </div>
  );
}

export default App;
