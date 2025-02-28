import React from 'react'
import './Shoes.css' 

export default function NAvbar() {
    return (
        <div>
            <nav>
                <div className="head">
                    <div className="head-logo">
                        <h1>shopes</h1>
                    </div>
                    <div className="head-items">
                        <div className="item">Home</div>
                        <div className="item">About</div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
