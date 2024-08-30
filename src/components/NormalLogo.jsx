import React from 'react'
import {ReactComponent as Logo} from "../assets/Logo.svg"
import {ReactComponent as Stick} from "../assets/stick.svg"
import "./LogoAnimation.css"
import NavBar from './NavBar'

const NormalLogo = () => {
  return (
    <>
    <NavBar/>
    <div className='mainBody' >
        <div className='mainDiv' >
          <div className='logoParent'>
            
        <Logo className='logoDiv'/>
    
          </div>
        <div className='text'>Own Your Future</div>
  
      </div>
    </div>
    </>
  )
}

export default NormalLogo
//repo 2