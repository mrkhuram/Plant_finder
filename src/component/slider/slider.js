import React from 'react'
// import '../assets/css/bootstrap.min.css'
// import '../assets/css/font-awesome.min.css'
// import '../assets/css/global.css'
// import '../assets/css/owl.carousel.min.css'
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css'; 
// import { useHistory } from "react-router-dom";
import './style.css'
import Login from '../login/login'
import { withRouter,Link } from 'react-router-dom';
class Carousel extends React.Component {

    content = [
        {
            title: 'Free Home Delivery',
            image: '/assets/images/banner/1.png',
            description: 'Trusting On Us you will get the great experience of life ',
            button: 'Register Now',
            className: 'img1 slider-content'

        },
        {
            title: 'We Also Provide Garder Care Man',
            image: '/assets/images/banner/2.png',
            description: 'Trusting On Us you will get the great experience of life ',
            button: 'Register Now',
            className: 'img2 slider-content'


        },
        {
            title: 'Buy Plants Indoor Online',
            image: '/assets/images/banner/3.png',
            description: 'Trusting On Us you will get the great experience of life ',
            button: 'Register Now',
            className: 'img3 slider-content'


        },
        {
            title: 'Finding love & Happiness has never been easier',
            image: '../assets/images/banner/4.png',
            description: 'Trusting On Us you will get the great experience of life ',
            button: 'Register Now',
            className: 'img4 slider-content'


        },

        {
            title: 'Finding love & Happiness has never been easier',
            image: '../assets/images/banner/5.png',
            description: 'Trusting On Us you will get the great experience of life ',
            button: 'Register Now',
            className: 'img5 slider-content'

        }
    ]

    render() {
        return (
            <div>


                <Slider className="slider-wrapper custom_design" style={{
                    slider: 'slider',
                    previousButton: 'previousButton',
                    nextButton: 'nextButton',
                    buttonDisabled: 'disabled',
                    track: 'track',
                    slide: 'slide',
                    hidden: 'hidden',
                    previous: 'previous',
                    current: 'current',
                    next: 'next',
                    animateIn: 'animateIn',

                }
                }
                    autoplay='3000'
                    infinite='true'
                >
                    {this.content.map((item, index) => (
                        <div
                            key={index}
                            className={item.className}
                        // style={{ background: `url('${item.image}') no-repeat center center` }}
                        >
                            <div className="inner">
                                <h2>{item.title}</h2>
                                <p className='descOfCarousel'>{item.description}</p>
                                <Link to='/signup'>
                                    <button className="btnOfCarsouel">{item.button}</button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </Slider>

               
            </div>
        )
    }
}
export default Carousel;