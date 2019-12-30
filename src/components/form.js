import React from 'react'
import {MdSend} from 'react-icons/md'
const ExpenseForm = ({charge,amount,handleAmount,handleCharge,handleSubmit, edit}) => {
    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <div  className="form-center">
                    <div className="form-group">
                        <label htmlFor="charge">charge</label>
                        <input
                        className="form-control"
                         type='text' id="charge" 
                         name="charge" placeholder="school"
                         value={charge}
                         onChange = {handleCharge}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="amount">amount</label>
                        <input
                        className="form-control" type='number'
                         id="amount" name="amount" 
                         placeholder="300" value={amount}
                         onChange={handleAmount}
                        />
                    </div>
                </div>
                <button className="btn btn-danger ">{edit ? "edit": "submit"} <MdSend/></button>
            </form>
        </div>
    )
}
export default ExpenseForm