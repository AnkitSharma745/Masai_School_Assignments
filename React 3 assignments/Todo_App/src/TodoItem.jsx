function TodoItem({data,ontoggleStatus}){

  return (
    <>
    <tr onClick={()=>ontoggleStatus(data.id)} > 
      
      <td  >{data.todo}</td>
      <td
       style={
        {color:data.status?"red":"#000099"}
      }>{data.status?"True":"False"}</td>
    </tr>
    
    
    
    
    </>
  )
}


export default TodoItem;