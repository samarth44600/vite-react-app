import React from 'react'

const DataCard = ({ userId, id, title, completed }) => {
    return (
        <a href={`/${id}`}>
            <p>{id}. {title}</p>
            <p>{completed ? "Completed" : "Not Completed"}</p>
            
        </a>
    )
}

export default DataCard