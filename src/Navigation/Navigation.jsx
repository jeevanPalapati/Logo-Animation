import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LogoAnimation from '../components/LogoAnimation'
import NormalLogo from '../components/NormalLogo'

const Navigation = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
<Route path='/' element={<LogoAnimation/>}/>
<Route path='/normal' element={<NormalLogo/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Navigation
