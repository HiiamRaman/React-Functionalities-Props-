import { useState } from 'react'

import './App.css'
import  Devio from './Components/Devui'
export default  function App() {

 
let Add={
  sum:"a+b"
}
  return (
  <div>
    <h1 className='bg-green-300 text-gray-950 p-5 rounded-xl mb-8'> Tailwind is working or not?? </h1>

     <Devio name="Bored Ape"  price="Free"   />
     <Devio name="COOlGIF"  price="no-need" />
  </div>

  

  )
}


