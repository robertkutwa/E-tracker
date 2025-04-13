import { useState } from 'react'

export default function ExpenseForm({ addExpense }) {
  const [formData, setFormData] = useState({
    description: '',
    amount: '',
    category: '',
    date: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.description || !formData.amount) return
    addExpense(formData)
    setFormData({
      description: '',
      amount: '',
      category: '',
      date: ''
    })
  }

  return (
    <form onSubmit={handleSubmit} className="expense-form">
      <h2>Add New Expense</h2>
      <div className="form-group">
        <label>Description:</label>
        <input
          type="text"
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Amount ($):</label>
        <input
          type="number"
          name="amount"
          value={formData.amount}
          onChange={handleChange}
          min="0"
          step="0.01"
          required
        />
      </div>
      <div className="form-group">
        <label>Category:</label>
        <input
          type="text"
          name="category"
          value={formData.category}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Date:</label>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Add Expense</button>
    </form>
  )
}