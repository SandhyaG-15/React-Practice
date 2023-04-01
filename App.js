import './App.css';
import ExpenseItem from './Components/ExpenseItem'
function App() {
    const Expense = [{
        Title: "Car Insurance",
        Date: new Date(2023,4,1),
        Amount: "$204.50"
    },
    {
        Title: "Home Loan",
        Date: new Date(2023,4,2),
        Amount: "$104.50"
    }];
  return (
      <div className="App">
          <ExpenseItem Title={Expense[0].Title} Date={Expense[0].Date} Amount={Expense[0].Amount}></ExpenseItem>
          <ExpenseItem Title={Expense[1].Title} Date={Expense[1].Date} Amount={Expense[1].Amount}></ExpenseItem>
    </div>
  );
}

export default App;
