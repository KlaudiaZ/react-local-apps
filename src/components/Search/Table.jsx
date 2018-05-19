import React from 'react';

const Table = (props) => {
    return (
        <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Type</th>
            <th>Rate</th>
          </tr>
        </thead>
        <tbody>
            {props.movies.map((movie, index) => {
                return (
                    <tr key={index}>
                        <td>{movie.title}</td>
                        <td>{movie.type}</td>
                        <td>{movie.rate} / 10</td>
                    </tr> 
                )
            })}
        </tbody>
        </table> 
    )
}

export default Table;