import React from 'react'
import { data } from '../data/data'
import DataCard from './DataCard'

const DataList = () => {
    const filteredData = []
    return (
        <div>
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