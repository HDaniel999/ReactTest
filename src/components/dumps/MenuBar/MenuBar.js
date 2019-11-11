import React from 'react'
import './MenuBar.css'
export default function MenuBar (props) {
    return (
        <nav className='MenuBar'>
            {props.children}
        </nav>
    )
}