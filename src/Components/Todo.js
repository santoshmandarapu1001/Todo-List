import React, { useState } from 'react'
import Adding from './Adding'
// In your component file
import 'bootstrap/dist/css/bootstrap.min.css';


function Todo() {

    const [item,setItem]=useState("")
    const [list,setList]=useState([])

    let changing=e=>{
        setItem(e.target.value)
    }

    let submitting=e=>
    {
        e.preventDefault()
        const newList=[...list,item]
        setList(newList)
        setItem("")
        
    }

    let deleting=(indexvalue)=>
    {
        const newList=list.filter((todo,index)=>index!==indexvalue)
        setList(newList)
    }

  return (
    <div>
        <h3 class="display-3">To Do Management</h3>
        <div>
        <form onSubmit={submitting}>
            
            <input type="text" class="form-control custom-width" value={item}  onChange={changing} placeholder="Enter text"></input>
            <button  class="btn btn-primary ">add</button>


        </form>
        </div>
        <Adding todos={list} deleting={deleting}></Adding>

    </div>
  )
}

export default Todo