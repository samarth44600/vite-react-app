import React, { useState } from 'react'
import { data } from '../data/data'
import DataCard from './DataCard'

const DataList = () => {
    const [searchQuery, setSearchQuery] = useState("")
    const [filteredData, setFilteredData] = useState(data)

    const handleSearch = () => {
        // const filter = searchQuery ? data.filter((d) => d.title == searchQuery) : data
        const filter = searchQuery ? data.filter((d) => d.title.trim().toLowerCase().includes(
            searchQuery.trim().toLowerCase()
        )) : data
        setFilteredData(filter)
        console.log("filteredData", filteredData)
    }
    return (
        <div>
            <input type='text' value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
            <button onClick={handleSearch} >Search</button>
            {
                filteredData.map((d, i) => <DataCard
                    key={i}
                    userId={d.userId}
                    id={d.id}
                    title={d.title}
                    completed={d.completed}

                />)
            }
        </div>
    )
}

export default DataList