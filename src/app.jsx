import { useState } from 'preact/hooks'
import './app.css'
import Header from './Components/Header'
import Banner from './Components/Banner'
import About from './Components/About'
import Services from './Components/Services'
import Expertise from './Components/Expertise'
import Footer from './Components/Footer'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Banner/>
    <About/>
    <Services/>
    <Expertise/>
    <Footer/>
   
    </>
  )
}
