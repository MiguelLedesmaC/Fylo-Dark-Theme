import React from 'react';



const Testimonial = ({name, img, work}) => {
  return (
    <div>
        <div className='bg-DarkBlueTestimonialsBackground p-10 max-w-[25rem]'>
                <p className='mb-5 text-[.88rem] leading-6'>Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.</p>
                <div className='flex items-center gap-4'>
                    <img className='rounded-full w-[20%]' src={img} alt="Image from profile" />
                    <div>
                        <p>{name}</p>
                        <small>{work}</small>
                    </div>
                </div>
              </div>
    </div>
  )
}

export default Testimonial