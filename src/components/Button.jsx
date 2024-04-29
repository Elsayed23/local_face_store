import React from 'react'

const Button = ({ children }) => {
    return (
        <button className='bg-[#AB572D] hover:bg-opacity-80 duration-300 border-none rounded-md px-6 py-3 font-bold text-white capitalize'>
            {children}
        </button>
    )
}

export default Button