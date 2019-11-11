import React from "react"
import './NavLogo.css'
export default function NavLogo (props) {
    return (
        <a href={props.url} className="navLogo">
            <h2>
                {props.children}
            </h2>
        </a>
    )
}