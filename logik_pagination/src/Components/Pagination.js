import React from 'react'
import './Pagination.css'

function Pagination({ data, totalPages, handlePagination }) {

    // Zahlen haben feur Pagination
    const numberPage = []
    for (let i = 1; i <= Math.ceil(data / totalPages); i++) {
        numberPage.push(i)
    }

    return (
        <nav className='navPagination'>
            <ul>
                {numberPage.map((numbers) => (
                    <li onClick={() => handlePagination(numbers)} key={numbers}> <a href='!#'>{numbers}</a> </li>
                    // sehr wichtiger Punkt ( href='!#' )
                ))}
            </ul>
        </nav>
    )
}

export default Pagination