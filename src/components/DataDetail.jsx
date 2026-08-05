import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { data } from '../data/data'

const DataDetail = () => {
    const { id } = useParams()
    const [currentData, setCurrentData] = useState();

    useEffect(() => {
        handleFetch()
    }, [])
    const handleFetch = () => {
        fetch(`http://jsonplaceholder.typicode.com/posts/${id}`).then((res) => res.json()).then((res) => {
            setCurrentData(res)
        })
    }
    console.log("currentData", currentData)
    return (
        <div>
            DataDetail
            <p>
                <strong>Title: </strong>
                {currentData ? currentData?.title : "No TItle"}

            </p>
            <p>
                <strong>Description: </strong>
                {currentData ? currentData?.body : "No Description"}

            </p>
        </div>
    )
}

export default DataDetail