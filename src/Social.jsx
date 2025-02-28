import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faGrinStars, faHouse } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFontAwesome, faFacebook } from '@fortawesome/free-brands-svg-icons'


export default function Social() {
  
  return (
    <div className='icon' style={{backgroundcolor: "red"}}>
     
        <FontAwesomeIcon icon={faCoffee}/>
        <FontAwesomeIcon icon={faFacebook}/>
    </div>
  )
}
