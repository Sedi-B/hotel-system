import React from 'react'

const LandingArea = () => {
  return (
    <div className='grid grid-cols-2 items-center text-6xl h-screen'>
        <select className=''>
        <label>Select User Type...</label>
    
        <option >User</option>
        <option>Administrator</option>
        </select>
    </div>
  )
}

export default LandingArea