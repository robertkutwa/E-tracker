import { useState } from 'react'
import ExpenseForm from './components/ExpenseForm'
import ExpenseTable from './components/ExpenseTable'
import SearchBar from './components/SearchBar'  // Case-sensitive import
import './App.css'

function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, description: 'Groceries', amount: 150, category: 'Food', date: '2023-05-01' },
    { id: 2, description: 'Electricity', amount: 80, category: 'Utilities', date: '2023-05-05' }
  ])

  const [searchTerm, setSearchTerm] = useState('')

  const addExpense = (newExpense) => {
    setExpenses([...expenses, {
      ...newExpense,
      id: expenses.length + 1,
      amount: parseFloat(newExpense.amount)
    }])
  }

  const filteredExpenses = expenses.filter(expense => 
    expense.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    expense.category.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="app">
      <h1>Expense Tracker</h1>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <ExpenseForm addExpense={addExpense} />
      <ExpenseTable expenses={filteredExpenses} />
    </div>
  )
}

export default App