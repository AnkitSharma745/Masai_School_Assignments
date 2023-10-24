import { useState } from 'react'
import './App.css'

function App() {
    
  const[text,setText]= useState("")
  const[taskList,setTaskList]= useState([])
  function handleChange(e){
    setText(e.target.value)
  }
  function addTodo(){
const newTask= text;
const updatedTaskList = [...taskList,newTask]
setTaskList(updatedTaskList)
  }

  return (
    <>
    <div className='container'>
    <label htmlFor="task-input"></label>
    <input type="text" id='task-input' onChange={handleChange}  placeholder='Enter the todos' value={text} />
    <button onClick={addTodo}>Add</button>
    
    {
      taskList.map(function(item,index){
        return(
          <div className='tds'>
          <p  key={index}>{item}</p>
          </div>
        )
      })
    }
    
    
     </div>

    </>
  )
}

export default App
