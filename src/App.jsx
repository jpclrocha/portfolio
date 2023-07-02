import AboutMe from './Components/AboutMe/AboutMe'
import Contact from './Components/Contact/Contact'
import LandingPage from './Components/LandingPage/LandingPage'
import MyProjects from './Components/MyProjects/MyProjects'
import Navbar from './Components/Navbar/Navbar'

function App() {
	return (
		<>
			<Navbar />
			<LandingPage />
			<AboutMe />
			<MyProjects />
			<Contact />
		</>
	)
}

export default App
