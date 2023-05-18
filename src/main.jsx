import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './Header'
import Video from './video'
import Apresentation from './apresentation'

import './styles/global.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Video />
    <Apresentation />
  </React.StrictMode>,
)
