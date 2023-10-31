import React, { useState } from 'react';
import TodoList from './TodoList';
import Pagination from './Pagination';

  function App(){
  const [currentPage, setCurrentPage] = useState(1);



  return (
    <div>
      <TodoList />
      <Pagination totalPages={5} />
    </div>
  );
};

export default App;
