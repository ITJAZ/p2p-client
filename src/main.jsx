import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App.jsx'
import Host from './component/Host.jsx'
import Client from './component/Client.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}></Route>
        <Route path='/host' element={<Host />}></Route>
        <Route path='/client/:roomId?' element={<Client />}></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
