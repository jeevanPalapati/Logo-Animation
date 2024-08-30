
import LogoAnimation from './components/LogoAnimation';
import "./App.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navigation from './Navigation/Navigation';
import NormalLogo from './components/NormalLogo';
function App() {
  return (
    <div className='App'>
           <BrowserRouter>
      <Routes>
<Route path='/' element={<LogoAnimation/>}/>
<Route path='/normal' element={<NormalLogo/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
