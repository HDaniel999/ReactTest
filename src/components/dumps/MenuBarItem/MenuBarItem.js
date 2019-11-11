import React from 'react'
import './MenuBarItem.css'

export default function MenuBarItem (props) {
    if (!props.path) {
        return (
        <span className='MenuBarItem MenuBarItem--disabled'>
            {props.children}
        </span>
        )
    }
    return (
        <a className='MenuBarItem MenuBarItem--enabled' href={props.path} {...props}>
            {props.children}
        </a>
    )
}