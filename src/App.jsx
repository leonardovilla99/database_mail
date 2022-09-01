import { useState } from 'react'
import './index.css'

import Form from './form'

function App() {

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

export default App
