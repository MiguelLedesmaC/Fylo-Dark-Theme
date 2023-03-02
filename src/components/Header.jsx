import React, { useState } from 'react';
import logo from '../assets/images/logo.svg';
import hamburguer from '../assets/images/icon-hamburger.svg';
import closeHamburguer from '../assets/images/icon-close.svg'
import imgIntro from '../assets/images/illustration-intro.png';
import bgWavesMobile from '../assets/images/bg-curvy-mobile.svg'
import ButtonGradiant from './ButtonGradiant';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const openMenu = () => {
        !isOpen ? setIsOpen(true): setIsOpen(false);
    }
  return (
    <header className=' w-full flex flex-col items-center  justify-center bg-DarkBlueIntroAndEmail mb-24'>
        <div className='flex items-center justify-between p-7  w-full'>
        <img className='w-[30%] max-w-[10rem] ' src={logo} alt="logo Fylo" />
        <img onClick={openMenu} className='z-10 lg:hidden cursor-pointer' src={`${isOpen ? closeHamburguer: hamburguer }`} alt="Hamburguer" />
        <nav className={`${isOpen ? 'block': 'hidden'} absolute top-[5.4rem] right-6 bg-gradient-to-r from-BlueGradient to-CyanGradient w-[90%] pt-10 pb-10 pr-4 rounded-lg lg:hidden z-20 `}>
            <ul className='flex flex-col gap-10 items-center justify-center text-xl'>
                <li><a href="#features">Features</a></li>
                <li><a href="#Team">Team</a></li>
                <li><a href="#Sign In">Sign In</a></li>
            </ul>
        </nav>
        <nav className='hidden lg:block'>
            <ul className='flex items-center gap-14 text-xl p-4'>
                <li className='li-nav-desktop'><a className='font-semibold'  href="#features">Features</a></li>
                <li className='li-nav-desktop'><a className='font-semibold'  href="#Team">Team</a></li>
                <li className='li-nav-desktop'><a className='font-semibold'  href="#Sign In">Sign In</a></li>
            </ul>
        </nav>
        </div>
        
        <div className='relative mb-24 w-full max-w-[105rem]  self-center '>
                <img className='relative z-10 w-[90%] max-w-[45rem] m-auto ' src={imgIntro} alt="Image Intro" />
                <img className='absolute -bottom-[8rem] md:-bottom-[15rem] lg:-bottom-[18rem] w-full max-w-[90rem] right-0 ' src={bgWavesMobile} alt="Background Waves" />
        </div>

        <div className='text-White relative text-center bg-DarkBlueMainBackground pt-7 w-full pl-7 pr-7'>
                <h1 className='text-3xl font-bold font-Raleway mb-5 leading-10'>All your files in one secure location, accesible anywhere</h1>
                <p className='leading-7 mb-6'>Fylo stores all your most important files in one secure location. Access them wherever you need, share and collaborate with friends family, and co-workers.</p>
                <ButtonGradiant 
                    width={'w-[85%]'}
                    text={'Get Started'} />
            </div>
            

    </header>
  )
}

export default Header