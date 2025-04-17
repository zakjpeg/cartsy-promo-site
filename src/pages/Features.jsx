import '../css/fonts.css';
import '../css/styles__learn.css';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


export default function Features() {

    const [showElement, setShowElement] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowElement(true);
        }, 1300);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <div className='learn__wrapper flex__reverse'>
                <img src="./images/cartsy_iphone2.png" alt="" />
                <div className="learn__description">
                    <h3>Share Lists with Family or Friends</h3>
                    <p>Collaborative Lists with up to 15 members
                        <br />
                        <br />
                        Group Lists update in real time for seamless
                        shopping experiences.
                    </p>
                    <Link to="/about"><button className={`${showElement ? 'visible' : 'hidden'} info__button`}>
                        our team
                    </button></Link>
                </div>
            </div>
        </>
    );
}
