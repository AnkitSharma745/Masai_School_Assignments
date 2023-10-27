import './TodoList.css'
import TodoItem from "./TodoItem";
function TodoList({tasks,ontoggleStatus}){


  return(
   
   <table>
        <thead > 
           <tr  >
            <th  >Task Name</th>
            <th>Status</th>
           </tr>
         </thead>
         <tbody>
          
          {
            
          tasks.map((task)=>(
          

              <TodoItem key={task.id} data={task} ontoggleStatus={ontoggleStatus} />
            
          ))
        }
         </tbody>
   </table>
   
   
  )
}
export default TodoList;