import React from 'react'
import NAvbar from './NAvbar'
import './Mainpage.css'

import Heroslider from './Heroslider'
import Collaction1 from './Collaction1'
import Check from './Check'
export default function Mainpage() {
    return (
        <div>
            <NAvbar />
            <div className="main-sec">
                <div className="side-bar ps-3">
                    <Check />
                </div>
                <div className="main-cont">
                    <Heroslider />
                    <Collaction1 />
                </div>
            </div>
        </div>
    )
}
