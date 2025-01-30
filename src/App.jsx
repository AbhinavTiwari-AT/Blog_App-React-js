import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Base from './Components/Base';
import { Button } from 'reactstrap';
import {BrowserRouter,Routes,Route} from 'react-router';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import Home from './Pages/Home';
import About from './Pages/About';


function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/About" element={<About/>}/>      
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
