import Singup from './components/Singup'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Login from './components/Login'

function App() {
	return (
		<BrowserRouter>
			<div className='App'>
				<Routes>
					<Route path='/' element={<Singup />} />
					<Route path='/Login' element={<Login />} />
				</Routes>
			</div>
		</BrowserRouter>
	)
}

export default App
