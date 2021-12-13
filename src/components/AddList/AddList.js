import React, { useState } from 'react'
import store from '../../Store/Store';
import './AddList.css';

export default function AddList() {
    const [list, setList] = useState('');

    const updateValue = (evt)=>{
        let value = evt.target.value;
         setList(value);
     }

     const saveData = (evt)=>{
         evt.preventDefault();
         store.dispatch({
            id: new Date().getTime(),
            type: "ADD-LIST",
            payload: {
                id: new Date().getTime(),
                list
            }
         })
         setList('');
     }
    return <>
    <form onSubmit={saveData}>
    <div className='container1'>
    <label htmlFor="box2">AddList: </label>
            <input className="form-control " type="text" onInput={updateValue} placeholder="Enter List Name" value={list} id="box2" required/>
            <button className="btn-primary btn form-control ">Add</button><br /><br />
            </div>
    </form>
            
        </>
    
}
