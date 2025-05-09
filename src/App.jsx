import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Main from './pages/Main'
import LoanAndOffer from './pages/LoanAndOffer'
import Calculator from './pages/Caluclator'
import ProcessOfWork from './pages/ProcessOfWork'
import MapAndLocation from './pages/MapAndLocation'
import Footer from './pages/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (

    <>
      <Main />
      <LoanAndOffer />
      <Calculator />
      <ProcessOfWork />
      <MapAndLocation />
      <Footer/>
    </>
  )
}

export default App
