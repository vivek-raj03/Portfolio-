import React from 'react'

const Button = (props) => {
  return (
    <button className='bg-orange-600 text-white py-2 px-6 rounded-full md:ml-8 hover:bg-orange-400 
    duration-500 hover:text-black font-roberto'>
      {props.children}
    </button>
  )
}

export default Button