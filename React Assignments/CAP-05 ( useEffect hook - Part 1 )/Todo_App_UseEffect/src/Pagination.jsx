import { useState } from 'react';
const Pagination = ({ totalPages}) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);

  };

  return (
    <div>
     
    </div>
  );
};

export default Pagination;
