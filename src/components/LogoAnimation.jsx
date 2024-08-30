import React from 'react'
import {ReactComponent as Logo} from "../assets/Logo.svg"
import {ReactComponent as Stick} from "../assets/stick.svg"
import "./LogoAnimation.css"

const LogoAnimation = () => {
  return (
    <div className='mainBody' >
        <div className='mainDiv' >
          <div className='logoParent'>
            
        <Logo className='logoDiv'/>
        <Stick className='stickDiv'/>
          </div>
        <div className='text'>Own Your Future</div>

      </div>
    </div>
  )
}

export default LogoAnimation
//repo 1
