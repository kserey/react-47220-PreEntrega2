import './App.css'

// Components
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

// Pages
import FaqPage from './components/Pages/FaqPage/FaqPage'
import About from './components/Pages/About/About'
import Portada from './components/Portada/Portada'
import PortfolioPage from './components/Pages/PortfolioPage/PortfolioPage'

function App() {
  return (
    <div>

      <Header />
      <Portada />
      <About />
      <PortfolioPage />
      <FaqPage />

      <Footer />
    
    </div>
  )
}

export default App
