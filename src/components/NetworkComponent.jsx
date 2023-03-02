import React, { useState } from 'react';

const NetworkComponent = ({ svg }) => {

    const mouseIn = (e) => {
        e.target.children[0].classList.add('svg-networks')
     }
    const mouseOut = (e) => {
        e.target.children[0].classList.remove('svg-networks')
    }

    return (
        <button onMouseLeave={mouseOut} onMouseEnter={mouseIn} className='grid place-content-center border-[1px] w-10 h-10 rounded-full cursor-pointer hover:border-BlueGradient'>
            {svg}
        </button>
    )
}

export default NetworkComponent;