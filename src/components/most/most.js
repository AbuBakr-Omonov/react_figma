import React from 'react'
import "./most.css"
import still from '../../assets/img/style.svg'
import sun from '../../assets/img/card_sunny.svg'
import water from '../../assets/img/card_water.svg'
import thoth from '../../assets/img/card_though.svg'
import avaken from '../../assets/img/card_awaken.svg'
import willyam from '../../assets/img/caed_icon.svg'


const Most = () => {
  return (
    <>
    <section className='most'>
        <div className='container'>
            <h2  className='most__title'>Most Recent</h2>
            <div className='most__wrapper'>
                <div className='most__card'>
                    <div className='most__img'>
                        <img className='most_img_img' src={still} alt="" />
                    </div>
                    <div className='most__body'>
                        <p className='most__body__title'>Still Standing Tall</p>
                        <p className='most__body__text'>Life begins at the end of your comfort zone.</p>
                        <hr />
                        <div className='most_body_text'>
                            <div className='most_body_text_img'>
                                <img src={willyam} alt="" />
                                <p>William Wong</p>
                            </div>
                            <p className='most_data'>9/25/2015</p>
                        </div>
                    </div>
                </div>
                 <div className='most__card'>
                    <div className='most__img'>
                        <img className='most_img_img'  src={sun} alt="" />
                    </div>
                    <div className='most__body'>
                        <p className='most__body__title'>Still Standing Tall</p>
                        <p className='most__body__text'>Life begins at the end of your comfort zone.</p>
                        <hr />
                        <div className='most_body_text'>
                            <div className='most_body_text_img'>
                                <img src={willyam} alt="" />
                                <p>William Wong</p>
                            </div>
                            <p className='most_data'>9/25/2015</p>
                        </div>
                    </div>
                </div>
                 <div className='most__card'>
                    <div className='most__img'>
                        <img className='most_img_img'  src={water} alt="" />
                    </div>
                    <div className='most__body'>
                        <p className='most__body__title'>Still Standing Tall</p>
                        <p className='most__body__text'>Life begins at the end of your comfort zone.</p>
                        <hr />
                        <div className='most_body_text'>
                            <div className='most_body_text_img'>
                                <img src={willyam} alt="" />
                                <p>William Wong</p>
                            </div>
                            <p className='most_data'>9/25/2015</p>
                        </div>
                    </div>
                </div>
                 <div className='most__card'>
                    <div className='most__img'>
                        <img className='most_img_img'  src={thoth} alt="" />
                    </div>
                    <div className='most__body'>
                        <p className='most__body__title'>Still Standing Tall</p>
                        <p className='most__body__text'>Life begins at the end of your comfort zone.</p>
                        <hr />
                        <div className='most_body_text'>
                            <div className='most_body_text_img'>
                                <img src={willyam} alt="" />
                                <p>William Wong</p>
                            </div>
                            <p className='most_data'>9/25/2015</p>
                        </div>
                    </div>
                </div>
                 <div className='most__card'>
                    <div className='most__img'>
                        <img className='most_img_img'  src={avaken} alt="" />
                    </div>
                    <div className='most__body'>
                        <p className='most__body__title'>Still Standing Tall</p>
                        <p className='most__body__text'>Life begins at the end of your comfort zone.</p>
                        <hr />
                        <div className='most_body_text'>
                            <div className='most_body_text_img'>
                                <img src={willyam} alt="" />
                                <p>William Wong</p>
                            </div>
                            <p className='most_data'>9/25/2015</p>
                        </div>
                    </div>
                </div>
                 <div className='most__card'>
                    <div className='most__img'>
                        <img className='most_img_img'  src={sun} alt="" />
                    </div>
                    <div className='most__body'>
                        <p className='most__body__title'>Still Standing Tall</p>
                        <p className='most__body__text'>Life begins at the end of your comfort zone.</p>
                        <hr />
                        <div className='most_body_text'>
                            <div className='most_body_text_img'>
                                <img src={willyam} alt="" />
                                <p>William Wong</p>
                            </div>
                            <p className='most_data'>9/25/2015</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    </>
  )
}

export default Most