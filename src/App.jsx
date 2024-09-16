import { BrowserRouter,Route,Routes } from 'react-router-dom'

import StoreFront from './pages/StoreFront'
import ProductDetails from './pages/ProductDetails'
import { useState,useEffect } from 'react'

export default function App() {
   const [isClient, setIsClient] = useState(false)

   useEffect(()=>{
    if (typeof window !== "undefined") {
      setIsClient(true)
    }
   },[])
  return isClient ? (
<BrowserRouter>
<Routes>
  <Route path="/" element={<StoreFront/>}/>
  <Route path='/products/:id' element={<ProductDetails/>}/>
</Routes>
</BrowserRouter>
  ) : (
    <div>Loading...</div>
  )
}
