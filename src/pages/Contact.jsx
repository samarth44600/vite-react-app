import React, { useState } from 'react'

export default function Contact({ name, location, classes }) {


    const [isOpen, setOpen] = useState(false)

    if (isOpen) {
        return <div>
            <div>Contact {name}</div>
            <div>lOCATION {location}</div>
            <Test class={classes} />
            <button onClick={() => setOpen(false)}>Close</button>

        </div>
    }
    return (
        <div>This is contact page
            <button onClick={() => setOpen(true)}>Open</button>
        </div>

    )
}

export function Test(props) {
    return (
        <div>Class {props.class}</div>
    )
}
