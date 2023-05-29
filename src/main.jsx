import React from 'react'
import ReactDOM from 'react-dom/client'
import Video from './components/Video'
import Apresentation from './components/Apresentation'
import SlideDepoiment from './components/SlideDepoiment'
import Footer from './components/Footer'

import './styles/global.css'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    
    <Video />
    <Apresentation />
    <div className='bg-gradient-to-r from-[#175367] to-[#2689AC] animateGradientX text-white'>
      <SlideDepoiment />
    </div>
    <Footer />
    
  </React.StrictMode>,
)
