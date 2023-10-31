import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [todosPerPage] = useState(5);

  const fetchTodos = async () => {
    try {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/todos?_page=${currentPage}&_limit=${todosPerPage}`);
      setTodos(response.data);
      setLoading(false);
    } catch (error) {
      setError(error.message)
      setLoading(false)
    }
  };

  useEffect(() => {
    fetchTodos();
  }, [currentPage])

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div style={{width:"500px",border:"1px solid red",margin:"auto"}}>
      <h2 style={{textAlign:"center"}}>Todo List</h2>
      {todos.map((todo) => (
        <>
        <div key={todo.id} style={{border:"1px solid black",
        display:"inline-block",backgroundColor:"teal",
        margin:"10px",color:"white",width:"300px",
        height:"30px",paddingTop:"5px",textAlign:"center"}} >{todo.title}</div>
        <br/>
  
        </>
        
      ))}
      <div>
        
        <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
          Previous
        </button>
        <button onClick={() => handlePageChange(currentPage + 1)}>Next</button>
      </div>
    </div>
  );
};

export default TodoList;
