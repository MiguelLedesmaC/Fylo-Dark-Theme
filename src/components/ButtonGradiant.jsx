import React from 'react'

const ButtonGradiant = ({ text, width, classBtnForm, onClick }) => {
  return (
    <div>
        <button onClick={onClick} type='submit' className={`p-4 ${width} ${classBtnForm} btn-started font-semibold font-OpenSans bg-gradient-to-r from-CyanGradient to-BlueGradient rounded-full max-w-[30rem]`}>
            <p className='relative hover:no-underline '>{text}</p>
        </button>
    </div>
  )
}

export default ButtonGradiant