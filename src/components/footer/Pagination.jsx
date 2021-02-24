import React from 'react'

const Pagination = ({ currentPage, onPageChange, todosPerPage, totalTodos, totalSearchTodos }) => {
    const totalPages = Math.ceil(totalSearchTodos && totalTodos / todosPerPage)

    return (
        <div className="pagination">
            <button
                className="fas fa-chevron-left"
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage <= 1}
            ></button>
            <button
                className="fas fa-chevron-right"
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage >= totalPages}
            ></button>
        </div>
    )
}

export default Pagination;
