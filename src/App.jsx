import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Base from './Components/Base';
import { Button } from 'reactstrap';


function App() {

  return (
    <>
       <Base>
       <h1>This is base Components</h1>
       <Button color='warning'>Click here</Button>
      </Base>
    </>
  )
}

export default App
