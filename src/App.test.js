import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from './App';
import ExpenseFilter from './Expenses/ExpenseFilter'

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });


test('renders Add Expense', () => {
  render(<App />);
  const linkElement = screen.getByText(/Add New Expense/i);
  expect(linkElement).toBeInTheDocument();
});

test('Click Add Expense will display form', () => {
  render(<App />);
  const addExpenseButton = screen.getByText(/Add New Expense/i);
  userEvent.click(addExpenseButton);
  const titleLabel = screen.getByText(/Title/i)
  expect(titleLabel).toBeInTheDocument();
});

test('Display chart', () => {
  render(<App />);
  const displayChart = screen.getByText(/Jan/i);
  expect(displayChart).toBeInTheDocument();
});


test('display $1000', () => {
  render(<App />);
  const displayAmount = screen.getByText(/1000/i);
  expect(displayAmount).toBeInTheDocument();
});

test('Display House Insurance', () => {
  render(<App />);
  // const { getByText } = render(<ExpenseFilter />)
  const filterByYear = screen.getByText(/Filter by Year/i)
  expect(filterByYear).toBeInTheDocument();
  userEvent.selectOptions(screen.getByTestId("select-multiple"), ['2019'])
  const houseInsurance = screen.getByText(/House Insurance/i)
  expect(houseInsurance).toBeInTheDocument();
})