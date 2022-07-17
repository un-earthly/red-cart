import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <div className="ui borderless fixed main menu">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingRight: "10px", width: '100%' }} className="ui text">
                <div className="header item">
                    <Link to='/'><h2 style={{ color: 'red' }}>RED CART</h2></Link>
                </div>
                <div>

                    <a href="https://github.com/un-earthly" target="_blank" rel="noopener noreferrer">
                        <i className="bi-github"></i>
                    </a>
                    <a href="https://alaminmd.web.app/" target="_blank" rel="noopener noreferrer">
                        <i style={{ 'margin': '20px' }} className="bi bi-globe"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/alamin-md" target="_blank" rel="noopener noreferrer">
                        <i className="bi bi-linkedin"></i>
                    </a>
                </div>
            </div>
        </div>
    )
}
