import React from 'react'

const DataCard = ({ userId, id, title, completed }) => {
    return (
        <a href={`/${id}`}>
            <p>{id}. {title}</p>
            
        </a>
    )
}

export default DataCard