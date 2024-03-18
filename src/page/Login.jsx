import React from 'react'
import "../App.css"
import Navbar from '../components/Navbar'
function Login() {
  return (
    <>
      <div className="">
        <Navbar />
      </div>
      <div className='flex bg-orange-200 w-full h-screen '>
        <div className="flex w- justify-items-center">
            <div className='container1'>
                image Section
            </div>
            <div className='container2'>
                login portion
            </div>
        </div>
      </div>
    </>
  )
}

export default Login
