import React, { useState } from 'react';

const Pagination = ({ items, itemsPerPage }: { items: any[], itemsPerPage: number }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(items.length / itemsPerPage);

  const handleClick = (page: number) => {
    setCurrentPage(page);
  };

  const paginatedItems = items.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div>
      <ul>
        {paginatedItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <div style={{ marginTop: '10px' }}>
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => handleClick(i + 1)}
            style={{
              margin: '0 5px',
              padding: '5px 10px',
              backgroundColor: currentPage === i + 1 ? '#007bff' : '#f0f0f0',
              color: currentPage === i + 1 ? '#fff' : '#000',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Pagination;
