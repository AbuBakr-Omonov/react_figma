import React from 'react'
import "./Section.css"

const Section = () => {
  return (
    <>
     <section className='section__item'>
       <div className='container'>
         <div className='section__wrapper'  >
            <p className='section__category'>Nature</p>
            <p className='section__category'>Photography</p>
            <p className='section__category'>Relaxation</p>
            <p className='section__category'>Vacation</p>
            <p className='section__category'>Travel</p>
            <p className='section__category'>Adventure</p>
        </div>
       </div>
     </section>
    </>
  )
}

export default Section