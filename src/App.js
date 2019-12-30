import React,{useState, useEffect} from 'react';
import './App.css';
import ExpenseForm from "./components/form";
import Alert from "./components/alert";
import List from "./components/list";
import uuid from 'uuid/v4'
// const initialExpense = [
//   {'id':uuid(), charge:"rent", amount:1020},
//   {'id':uuid(), charge:"house", amount:1040},
//   {'id':uuid(), charge:"school", amount:2340},
// ]
const initialExpense = localStorage.getItem('expenses')? JSON.parse(localStorage.getItem('expenses')):[]
function App() {
  // state values
  // all expenses, add expense
  const [expenses, setExpenses] = useState(initialExpense);

// single charge
  const   [charge, setCharge] = useState("");
  // single amount
  const [amount, setAmount] = useState("");

const [alert,setAlert] = useState({show:false})
//  edit
const [edit, setEdit] = useState(false)
// edit item
const [id, setId] = useState(0)

// use effect
useEffect(() => {
  console.log("we called useEffect ")
  localStorage.setItem("expenses", JSON.stringify(expenses))
}, [expenses])
// functionality

// makeSelection(event){
//   const {name,  value} = event.target
//   this.setState({
//       [name]: value,
//       converted: null
//   }, this.recalculate);

// }
  const handleCharge = e => {
    setCharge(e.target.value);
  }
  const handleAmount = e => {
    // console.log(`amount ${e.target.value}`)
    setAmount(e.target.value);
  }
  const handleAlert = ({type,text}) => {
    setAlert({show:true, type,text});
    setTimeout(() =>{
        setAlert({show:false})
    }, 3500)
  }
  const handleSubmit = e => {
    e.preventDefault();
    if(charge !== "" && amount > 0){
      if (edit){
        let tempExpenses = expenses.map( item => {
          return item.id === id? {...item, charge,amount} :item
        });
        setExpenses(tempExpenses);
        setEdit(false)
      }
      else{
        const singleExpense = {id:uuid(),charge,amount}
        setExpenses([...expenses,singleExpense])
        handleAlert({type:"success", text: "item successfully added"})
        
      }
      setCharge('');
      setAmount('');
        
    }else{
      handleAlert({type:"danger", text: "amount or charge can't be empty or Zero"})
    }
  };
  const clearItems = () => {
    setExpenses([]);
    handleAlert({type:"danger",  text: "all items deleted"})
  };
  const handleDelete = id => {
    // console.log(`item deleted : ${id}`);
    let tempExpenses = expenses.filter(item => item.id !== id);
    setExpenses(tempExpenses);
    handleAlert({type: "danger", text: "item successfully deleted"})
  };
  const handleEdit = id => {
    let expense = expenses.find(item => item.id === id);
    let {charge, amount} = expense;
    setCharge(charge);
    setAmount(amount);
    setEdit(true);
    setId(id)
  };
  return (
    <div className={"container white-text  text-center text-capitalize"} >
      <br/>
      {alert.show && <Alert type={alert.type} text={alert.text} />}
      {/* <Alert  /> */}
      <br/>
      <h2 >react calculator</h2>
      <div className={"jumbotron black-text"} style={{background: "whitesmoke"}}>

        <ExpenseForm
         charge={charge} amount={amount}
          handleAmount={handleAmount} 
          handleCharge={handleCharge} 
          handleSubmit={handleSubmit} 
          edit={edit}/>
        <List
         expenses={expenses} clearItems={clearItems}  
         handleDelete={handleDelete} handleEdit={handleEdit} />

      </div>
      <h1>total: {" "} 
        <span>
          ${" "}
          {expenses.reduce((acc, curr) => {
              return (acc += parseInt(curr.amount));
          }, 0)}
        </span>
      </h1>
    </div>

  );
}

export default App;
