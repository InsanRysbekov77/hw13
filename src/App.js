import Singup from './components/Singup';
import { BrowserRouter,  Routes, Route, Navigate} from "react-router-dom";
import './App.css';
import Login from './components/Login';

function App() {
  return (
    <BrowserRouter>
    <div className='App'>
      <Routes>
        <Route path = '*' element = {<Navigate to = '/Singup' replace/>}/>
        <Route path = './Sigup' element = {<Singup/>} />
        <Route path = '/Login' element = {<Login/>} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
