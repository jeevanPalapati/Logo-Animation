import React from 'react'
import {ReactComponent as Logo} from "../assets/Logo.svg"
import {ReactComponent as Stick} from "../assets/stick.svg"
import "./NormalLogo.css"
import NavBar from './NavBar'

const NormalLogo = () => {
  return (
    <>
    <NavBar/>
    <div className='mainBodyNormal' >
        <div className='mainDivNormal' >
          <div className='logoParentNormal'>
            
        <Logo className='logoDivNormal'/>
    
          </div>
        <div className='textNormal'>Own Your Future</div>
  
      </div>
    </div>
    </>
  )
}

export default NormalLogo
//repo 2