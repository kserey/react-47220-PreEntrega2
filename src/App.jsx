import './App.css'

// Components
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

// Pages
import FaqPage from './components/Pages/FaqPage/FaqPage'
import About from './components/Pages/About/About'
import PortadaPage from './components/Pages/PortadaPage/PortadaPage'
import PortfolioPage from './components/Pages/PortfolioPage/PortfolioPage'

function App() {
  return (
    <div>

      <Header />
      <PortadaPage />
      <About />
      <PortfolioPage />
      <FaqPage />

      <Footer />
    
    </div>
  )
}

export default App
