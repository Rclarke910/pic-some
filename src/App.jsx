import React from "react"
import Header from "./components/Header"
import Cart from "./components/Cart"
import Photos from "./components/Photos"
import {Routes, Route} from 'react-router-dom'

const App = () => {    
    return (
      <div>

      <Header />
      
      <Routes>
        <Route exact path = '/' element={<Photos />} />
        <Route path = '/cart' element={<Cart />} />
      </Routes>
      
      </div>
    )
}

export default App;