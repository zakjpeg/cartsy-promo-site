import '../css/fonts.css';
import '../css/styles__learn.css';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Learn() {

    const [showElement, setShowElement] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowElement(true);
        }, 1300);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <div className='learn__wrapper'>
                <img src="./images/cartsy_iphone.png" alt="" />
                <div className="learn__description">
                    <h3>A Fresh Take on Grocery Lists</h3>
                    <p>Manage and shop your home's essentials without
                        the hassle of the notes app.
                        <br />
                        <br />
                        Avoid unnecessary typing and filekeeping
                        by having an up-to-date, organized list that updates
                        with the press of a button.
                    </p>
                    <Link to="/features"><button className={`${showElement ? 'visible' : 'hidden'} info__button`}>
                        see features
                    </button></Link>
                </div>
            </div>
        </>
    );
}
