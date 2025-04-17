import '../css/styles__home.css';
import '../css/fonts.css';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Learn from './Learn';



export default function Home() {

    const [showElement, setShowElement] = useState(false);
    const [showElement2, setShowElement2] = useState(false);


    useEffect(() => {
        const timer = setTimeout(() => {
            setShowElement(true);

            const timer2 = setTimeout(() => {
                setShowElement2(true);
            }, 1000)

        }, 1300);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <div className="messages">
                <img src="./images//message1.jpg" id='message1' className={`message1 ${showElement ? 'visible1' : ''}`}/>
                <img src="./images/message2.png" id='message2' className={`message2 ${showElement2 ? 'visible2' : ''}`}/>
            </div>
            <div className="home__wrapper">
                <div className="carousel">

                    <div className="card turkey">
                        <div className="card__title">
                        🍗 Turkey
                        </div>
                        <img src="./images/turkey.jpg" alt="" className='card__image'/>
                    </div>
                    <div className="card gatorade">
                        <div className="card__title">
                        🥤 Gatorade
                        </div>
                        <img src="./images/gatorade.jpg" alt="" className='card__image'/>
                    </div>
                    <div className="card avocado">
                        <div className="card__title">
                        🥑 Avocado
                        </div>
                        <img src="./images//avocado.jpg" alt="" className='card__image'/>
                    </div>
                    <div className="card pizzarolls">
                        <div className="card__title">
                        🍕 Pizza Rolls
                        </div>
                        <img src="./images/pizzarolls.jpg" alt="" className='card__image'/>
                    </div>
                    <div className="card butter">
                        <div className="card__title">
                        🧈 Butter
                        </div>
                        <img src="./images/butter.webp" alt="" className='card__image'/>
                    </div>
                    <div className="card bread">
                        <div className="card__title">
                        🍞 Bread
                        </div>
                        <img src="./images//bread.webp" alt="" className='card__image'/>
                    </div>
                    <div className="card cheerios">
                        <div className="card__title">
                        🥣 Cheerios
                        </div>
                        <img src="./images/cheerios.jpg" alt="" className='card__image'/>
                    </div>
                    <div className="card cutlery">
                        <div className="card__title">
                        🍴 Cutlery
                        </div>
                        <img src="./images/cutlery.webp" alt="" className='card__image'/>
                    </div>
                    <div className="card turkey">
                        <div className="card__title">
                        🍗 Turkey
                        </div>
                        <img src="./images/turkey.jpg" alt="" className='card__image'/>
                    </div>
                    <div className="card gatorade">
                        <div className="card__title">
                        🥤 Gatorade
                        </div>
                        <img src="./images/gatorade.jpg" alt="" className='card__image'/>
                    </div>
                    <div className="card avocado">
                        <div className="card__title">
                        🥑 Avocado
                        </div>
                        <img src="./images/avocado.jpg" alt="" className='card__image'/>
                    </div>
                    <div className="card pizzarolls">
                        <div className="card__title">
                        🍕 Pizza Rolls
                        </div>
                        <img src="./images/pizzarolls.jpg" alt="" className='card__image'/>
                    </div>
                    <div className="card butter">
                        <div className="card__title">
                        🧈 Butter
                        </div>
                        <img src="./images/butter.webp" alt="" className='card__image'/>
                    </div>
                    <div className="card bread">
                        <div className="card__title">
                        🍞 Bread
                        </div>
                        <img src="./images/bread.webp" alt="" className='card__image'/>
                    </div>
                    <div className="card cheerios">
                        <div className="card__title">
                        🥣 Cheerios
                        </div>
                        <img src="./images/cheerios.jpg" alt="" className='card__image'/>
                    </div>


                </div>
                <div className="home__slogan__container">
                    <div className="home__slogan">
                        <h1>the <span className="text__bold">grocery list app,</span></h1>
                        <h1>for <span className="text__bold">families</span></h1>
                        <h3 className='home__description'>share, add, and check-off lists</h3>
                        <Link to="/learn"><button>learn more</button></Link>
                    </div>
                </div>
            </div>

        </>
    );
}

