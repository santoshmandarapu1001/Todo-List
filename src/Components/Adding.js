import React from 'react'


function Adding({todos,deleting}) {
  return (
    <div>
       {todos.map((todo,index)=>
        <div key={index}>
            <h3>{todo}</h3> <button  class="btn btn-danger " onClick={()=>deleting(index)}>remove</button>
        </div>
       )}

    </div>
  )
}

export default Adding