import Singup from './components/Singup'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Login from './components/Login'
import Header from './components/UI/Header'
import { useCallback, useState } from 'react'

function App() {
	// const [logines, setLogines] = useState([])
	// const [isLoding, setIsLoading] = useState(false)
	// const [error, setError] = useState(null)

	// const fethLoginesHandler = useCallback(async () => {
	// 	setIsLoading(true),
	// 	setError(null)
	// 	try {
	// 		const response = await fetch('https://react-http-login-12058-default-rtdb.firebaseio.com/logines.json')
	// 		if(!response.ok){
	// 			throw new Error('Something want')
	// 		}
	// 		const data = await response.json();
	// 	}
	// })





	return (
		<BrowserRouter>
		<Header />
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
