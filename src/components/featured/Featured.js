import React from 'react'
import "./Featured.css"

const Featured = () => {
  return (
    <>
      <section className='Fetured__section'>
        <div className='container'>
          <h2>Featured Posts</h2>
          <div className='featured-posts'>
            <div  className='featured-post'>
              <div>The Road Ahead<br/><small>One road might be paved, another not...</small></div>
            </div>
            <div className='featured-post2'>
              <div>From Top Down<br/><small>Balloon rides, bright colors and joy</small></div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Featured