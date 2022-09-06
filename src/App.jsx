import { useState } from 'react'
import './index.css'
import { useParams,useLocation} from "react-router-dom"

import Form from './form'

function App() {
  Invoice()
  return (
    <div>
      <div className="app">
        <div className='container'>
          <img src="./logo-form.png" className='logo'/>
          <Form />
        </div>
      </div>
      <p className='info'>This informations will be use for information porposes</p>
    </div>
  )
}

function Invoice() {
  const params = new URLSearchParams(window.location.pathname);
  console.log(params.get("userId"))
}

export default App
