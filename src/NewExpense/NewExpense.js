import { useState } from 'react'
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'

const NewExpense = (props) => {

    const [addNewExpense, setAddNewExpense] = useState(false)

    const addNewExpenseHandler = () => {
        setAddNewExpense(!addNewExpense)
    }

    const cancelAddNewExpenseHandler = (cancelAddExpense) => {
        setAddNewExpense(cancelAddExpense)
    }


    const saveExpenseDataHandler = (enteredExpensedData) => {
        const expenseData = { ...enteredExpensedData, id: Math.random().toString() }
        props.onAddExpense(expenseData)
    }


    return (
        <div className="new-expense">
            {
                addNewExpense
                    ? <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} addNewExpense={cancelAddNewExpenseHandler} />
                    : <button type="submit" onClick={addNewExpenseHandler}>Add New Expense</button>
            }
        </div>
    )
}

export default NewExpense