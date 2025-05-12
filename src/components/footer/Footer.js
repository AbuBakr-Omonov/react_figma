import React from 'react'
import "./Footer.css"
const Footer = () => {
    return (
        <>
           <footer className='footer'>
  <div className="container">
    <div className='footer__wrapper'>
      <div className="footer__title">
        <p>Stay in Touch</p>
      </div>
      <form className="footer__form">
        <input className='footer__input' type="email" placeholder='Enter your email address' />
        <button className='footer__btn'>Submit</button>
      </form>
      <div className='foo__wrapper'>
        <h1 className='footer__logo'>Escape.</h1>
        <ul className='footer__item'>
          <li className='footer__li'><a href="#">Home</a></li>
          <li className='footer__li'><a href="#">Categories</a></li>
          <li className='footer__li'><a href="#">About</a></li>
          <li className='footer__li'><a href="#">Contact</a></li>
        </ul>
      </div>
    </div>
  </div>
</footer>


        </>
    )
}

export default Footer