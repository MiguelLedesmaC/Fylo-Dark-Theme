import React from 'react';



const FeatureComponent = ( {img, title, text } ) => {
  return (
    <>
        <div className='flex flex-col'>
              <div className='flex flex-col items-center gap-3 text-white pl-12 pr-12  text-center'>
                <img className='mb-6' src={img} alt="imagen Devices" />
                <h2 className='font-semibold text-2xl'>{title}</h2>
                <p className='text-lg'>{text}</p>
              </div>
          </div>
    </>
  )
}

export default FeatureComponent