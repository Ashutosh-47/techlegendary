import React from "react";
import "./Pagination.css";

const Pagination = ({ usersPerPage, totalUsers, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {   // we got 50
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {
         
        pageNumbers.map((number) =>  (
          <li  key={number} className={currentPage === number ? "active" : ""} onClick={() => paginate(number)} >
       
        <a href="#">{number}</a>
          </li>
          
        ))} 

      </ul>
    </nav>
  );
};

export default Pagination;
