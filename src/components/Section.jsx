import React, { useState } from 'react';

// Components
import FeatureComponent from './FeatureComponent';
import ButtonGradiant from './ButtonGradiant';
import Testimonial from './Testimonial';

// Images
import imgDevices from '../assets/images/icon-access-anywhere.svg';
import imgSecurity from '../assets/images/icon-security.svg';
import imgCollaboration from '../assets/images/icon-collaboration.svg';
import imgStore from '../assets/images/icon-any-file.svg';
import imgTeams from '../assets/images/illustration-stay-productive.png';
import arrow from '../assets/images/icon-arrow.svg';
import quotes from '../assets/images/bg-quotes.png';
import satishImg from '../assets/images/profile-1.jpg';
import bruceImg from '../assets/images/profile-2.jpg';
import ivaImg from '../assets/images/profile-3.jpg';



const SectionStarter = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');


  const handleOnChange = (e)=> {
    setEmail(e.target.value);
  }
  // Validate email function
  const validate = () => {
    const regExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
    if(regExp.test(email)){
      setMessage('');
      alert('We have registered your email')
    }else {
      setMessage('Invalid Email');
    }
  }

  return (
    <>
        <section className='p-7 flex flex-col gap-20 items-center justify-center'>
          <article className='grid md:grid-cols-2 gap-20'>
          <FeatureComponent 
            img={imgDevices} 
            title={'Access your files, anywhere'}
            text={'The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.'}/>

          <FeatureComponent 
              img={imgSecurity} 
              title={'Security you can trust'}
              text={'2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.'}/>

          <FeatureComponent 
              img={imgCollaboration} 
              title={'Real-time collaboration'}
              text={' Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.'}/>

          <FeatureComponent 
              img={imgStore} 
              title={'Store any type of file'}
              text={"Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared."}/>
                      
          </article>

          <article className='mb-20 flex flex-col justify-center items-center text-White'>
              <img className='' src={imgTeams} alt="Image from people team" />
              <div>
                <h4 className='text-xl font-bold font-Raleway mt-14 mb-8 text-center'>Stay productive, wherever you are</h4>
                <p className='text-left text-[.96rem] mb-4'>
                Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs.
                <br />
                <br />
                Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.
                </p>
                <div className='hover:border-b-[2px] border-b-[2px] border-transparent hover:border-BlueGradient pb-2 w-[13.5rem]'>
                <a className='flex items-center font-semibold hover:no-underline gap-4 text-xl text-CyanGradient' href="#">See how Fylo works <img  width={20} src={arrow} alt="Arrow for go link" /> </a>
                </div>
              </div>
          </article>
          <article className='text-White'>
              <img width={35} src={quotes} alt="Img quotes" />
              <div className='flex flex-wrap gap-7'>
              <Testimonial 
              name={'Satish Patel'}
              img={satishImg}
              work={'Founder & CEO, Huddle'}/>
              <Testimonial 
              name={'Bruce Mckenzie'}
              img={bruceImg}
              work={'Founder & CEO, Huddle'}/>
              <Testimonial 
              name={'Bruce Mckenzie'}
              img={ivaImg}
              work={'Founder & CEO, Huddle'}/>
              </div>
              <div className='flex quotes-end'>
                <img className='rotate-180 ml-[23rem]' width={35} src={quotes} alt="Img quotes" />
              </div>
              
          </article>
          <article className='bg-DarkBlueIntroAndEmail w-full md:p-10 max-w-[50rem] p-5 pt-10 pb-10 rounded-md text-White text-center'>
          <div className='mb-8'>
            <h3 className='text-xl font-bold mb-5' >Get early access today</h3>
            <p className='leading-5 '>It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you.</p>
          </div>
          <form className='grid md:grid-cols-2 gap-6 w-full' action="/"
          onSubmit={e => e.preventDefault()} >
            <input className='p-4 pl-7 placeholder:text-[.9rem] justify-self-center rounded-full w-full max-w-[30rem] text-DarkBlueMainBackground' 
            type="email" name="email" 
            placeholder='email@example.com' 
            value={email} 
            onChange={handleOnChange} />
            
            <ButtonGradiant
            onClick={validate}
            classBtnForm={'form-btn'}
            width={'w-full'}
            text={'Get Started For Free'} />
            <p className='text-red-600 col-start-1 text-left '>{message}</p>
          </form>
          </article>
        </section>
    </>
  )
}




export default SectionStarter;
