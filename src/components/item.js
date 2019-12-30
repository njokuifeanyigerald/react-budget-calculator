import React, {Component} from 'react'
import { MdEdit, MdDelete } from 'react-icons/md';
const Item = ({expense, handleEdit, handleDelete}) => {
    const {id, charge, amount} = expense;
    return(
        <li className="list-group-item">
            <span className="float-left">{charge}</span>
            <span className="text-center bg-danger white-text">$ {amount}</span>
            
            <div>
                <button className=" btn-success float-right " 
                 aria-label="edit button" onClick={() => handleEdit(id)}><MdEdit/></button>
            </div>
            <div>
                <button className=" btn-danger float-right "
                  aria-label="delete button" onClick={() => handleDelete(id)}>< MdDelete /></button>
            </div>
            
        </li>
    )
}
export default Item