import React, { useEffect, useState } from 'react'
import { data } from '../data/data'
import DataCard from './DataCard'

const DataList = () => {
    const [searchQuery, setSearchQuery] = useState("")
    const [filteredData, setFilteredData] = useState([])
    // let filteredData = data
    const handleSearch = () => {
        // const filter = searchQuery ? data.filter((d) => d.title == searchQuery) : data
        const filter = searchQuery ? data.filter((d) => d.title.trim().toLowerCase().includes(
            searchQuery.trim().toLowerCase()
        )) : data
        setFilteredData(filter)
        // filteredData = filter
        console.log("filteredData", filteredData)
    }
    useEffect(() => {
        handleFetch()
    }, [])
    const handleFetch =  () => {
         fetch('http://jsonplaceholder.typicode.com/posts').then((res) => res.json()).then((res) => {
            setFilteredData(res)
        })
    }
    return (
        <div className='listPage'>
            <input className='searchInput' type='text' value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
            <button className='searchButton' onClick={handleSearch} >Search</button>
            <div className='data-list'>

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

        </div>
    )
}

export default DataList