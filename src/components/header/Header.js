import React from 'react'
import "./Header.css"

const Header = () => {
    return (
        <>
            <div className='header  '>
                <div className='container'>
                    <div className='header__wrapper'>
                        <h1 className='header__logo '>Escape.</h1>
                        <ul className='header__item'>
                            <li className='header__li'><a href="#">Home</a></li>
                            <li className='header__li'><a href="#">Categories</a></li>
                            <li className='header__li'><a href="#">About</a></li>
                            <li className='header__li'><a href="#">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header