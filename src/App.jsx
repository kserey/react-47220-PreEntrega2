import { useState } from 'react'

import './App.css'
import Header from './components/Header/Header'
import Card from './components/Card/Card'
import Portada from './components/Portada/Portada'
import About from './components/Pages/About/About'
import Collections from './components/Pages/Collections/Collections'
import FAQ from './components/Pages/Faq/Faq'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div>

      <Header />
      <Portada />
      <About />
      <Collections />
      <div>
        <Card />
      </div>
      <FAQ />
      <Footer />
    
    </div>
  )
}

export default App
