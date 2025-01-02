import { useState } from 'react'

import './App.css'

export default  function App() {
 
  return (
  <>
<h1 className='bg-green-300 text-gray-950 p-5 rounded-xl mb-8'> Tailwind is working or not??</h1>
<div className="flex flex-col rounded-xl  p-4"
        style={{
          border: '0.88px solid',
  
          backdropFilter: 'saturate(180%) blur(14px)',
          background: ' #ffffff0d',
        }}
      >
        <div>
          <img
            src="https://res.cloudinary.com/ddcg0rzlo/image/upload/v1652470298/9StaF0UBJfih_df0248.gif"
            alt="nft-gif"
            width="400"
            height="400"
            className="rounded-xl"
          />
        </div>
        <div className="flex flex-col  rounded-b-xl py-4 ">
          <div className="flex justify-between">
            
            <h1 className="font-bold font-RubikBold">Alien</h1>
          </div>
          
        </div>
      </div>
  </>

  )
}


