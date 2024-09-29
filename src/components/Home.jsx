import React, { useEffect, useState } from 'react'
import Cursor from './Cursor'

const Home = () => {
  const [inView , setInView] = useState(false)
  useEffect(()=>{
    console.log(inView)
  },[inView])
  return (
    <div className='bg-zinc-900 h-screen w-full relative flex items-center justify-center'>
        <Cursor inView={inView}/>
        <h1 onMouseEnter={() => setInView(true)} onMouseLeave={() => setInView(false)} className='text-8xl text-blue-50 tracking-tighter text-center font-semibold pointer-events-'>Lorem ipsum dolor sit amet.</h1>
    </div>
  )
}

export default Home