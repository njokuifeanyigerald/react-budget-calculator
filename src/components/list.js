import React from 'react'
import Item from "./item";
import {MdDelete} from 'react-icons/md'
const List = ({expenses, clearItems, handleEdit, handleDelete}) => {
    return (
        <div>
            <ul className="list-group text-capitalize">
            {expenses.map((expense) => {
                return <Item key={expense.id} expense={expense}  handleDelete={handleDelete} handleEdit={handleEdit} />;
            })}
            </ul>
            {expenses.length > 0 && <button className="btn btn-danger" onClick={clearItems}>clear expenses  
                <MdDelete className="btn-icon" />
            </button>}
        </div>
    );
};


export default List