import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header'
import Video from './components/Video'
import Apresentation from './components/Apresentation'

import './styles/global.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Video />
    <Apresentation />
  </React.StrictMode>,
)
