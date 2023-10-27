import { useState } from 'react'
import TodoList from './TodoList'
import './App.css'

function Todo() {
  
  const[inputValue,setInputValue]= useState("")
  const[todoList,setTodoList] = useState([])
  function addValue(e){
    setInputValue(e.target.value)
  }
   function addTodo(){
    let obj={
      id:new Date().getTime(),
      todo:inputValue,
      status:Math.random() <0.5,
    }
    let newList = [...todoList,obj]
    setTodoList(newList);
   }
 
   function toggleStatus(id){
    const updateStatus = todoList.map((task)=>{
      if(task.id===id){
        return {...task,status: !task.status}
      }
      return task
    })
    setTodoList(updateStatus)
   }
  
   const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      addTodo();
    }
  }
  return(
 <>
   <div className="todo">
     <h1 style={{
      backgroundColor:"teal"
     }}>Todo App</h1>
    
   <div className="container">

<input style={{fontSize:"17px"}} type="text" onChange={addValue} onKeyPress={handleKeyPress} placeholder='Enter Todays task'/>
<br />
<button style={{backgroundColor:"gray",fontSize:"17px", marginTop:"15px",width:"120px",height:"35px",border:"none"}} onClick={addTodo}>Add Todo</button>
</div>
<div>
<TodoList tasks={todoList} ontoggleStatus = {toggleStatus} />
</div>


   </div>
   
   
   
   </>
  



  )
}

export default Todo;
