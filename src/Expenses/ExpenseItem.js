import "./ExpenseItem.css"
import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card'

const ExpenseItem = (props) => {
    return (
        <Card className="expenses">
            <div className="expense-item">
                <ExpenseDate />
                <div className="expense-item__description">
                    <h2>Car Insurance</h2>
                    <div class="expense-item__price">$10000</div>
                </div>
            </div>
        </Card>
    )
}

export default ExpenseItem