import './Expenses.css'
import Card from '../UI/Card'
import ExpensesList from './ExpensesList'
import ExpenseFilter from './ExpenseFilter'

const Expenses = (props) => {
    return (
        <div>
            <Card className="expenses">
                <ExpenseFilter />
                <ExpensesList items={props.expenses} />
            </Card>
        </div>
    )
}

export default Expenses