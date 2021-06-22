import { useState } from 'react'
import './Expenses.css'
import Card from '../UI/Card'
import ExpensesList from './ExpensesList'
import ExpenseFilter from './ExpenseFilter'
import ExpensesChart from './ExpensesChart'

const Expenses = (props) => {
    const [filteredYear, setSelectedYear] = useState("2018")
    const filterChangedHandler = (selectedVal) => {
        setSelectedYear(selectedVal)
    }

    const filteredExpenses = props.expenses.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear
    })

    return (
        <div>
            <Card className="expenses">

                <ExpenseFilter
                    onChangeFilter={filterChangedHandler}
                    selected={filteredYear}
                />
                <ExpensesChart expenses={filteredExpenses} />
                <ExpensesList items={filteredExpenses} />
            </Card>
        </div>
    )
}

export default Expenses


// const Expenses = (props) => {
//     const [option, setOption] = useState(2021)

//     const handleOption = event => {
//       setOption(parseInt(event.target.value))
//     }

//     return(
//       <div>
//         <Card className="expenses">
//           <ExpensesFilter items={props.expenses} handleOption={handleOption} option={option}/>
//           <ExpensesList items={props.expenses} option={option}/>
//         </Card>
//       </div>

//     )

//   }