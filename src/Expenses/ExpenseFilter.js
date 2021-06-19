import './ExpenseFilter.css'

const ExpenseFilter = (props) => {
    console.log(props)
    return (
        <div className="expenses-filter">
            <div className="expenses-filter__control">
                <label>Filter by Year</label>
                <select>
                    <option>2018</option>
                    <option>2019</option>
                    <option>2020</option>
                    <option>2021</option>
                </select>
            </div>
        </div>
    )
}

export default ExpenseFilter