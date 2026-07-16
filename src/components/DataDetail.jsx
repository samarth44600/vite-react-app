import React from 'react'
import { useParams } from 'react-router'
import { data } from '../data/data'

const DataDetail = () => {
    const { id } = useParams()

    const currentData = data.find((d) => d.id === parseInt(id))
    console.log("currentData", currentData)
    return (
        <div>DataDetail {currentData ? currentData?.title : "No TItle"} </div>
    )
}

export default DataDetail