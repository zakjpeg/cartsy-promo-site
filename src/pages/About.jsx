import '../css/styles__about.css';

function About() {
    return (
        <div className="about__wrapper">
            <h1 className='our__team'>Our Team</h1>
            <div className="team__card">
                <img src="./images/headshot_orange.jpg" alt="" />
                <div className="team__card__info">
                    <div className="name__wrapper">
                        <h1 className='team__card__info__name'>Zak El-Assaad</h1>
                        <img src="./images/linkedin-logo.png" alt="" />
                    </div>
                    <h3 className='team__card__info__subtitle'>Computer Science Student at Santa Monica College</h3>
                    <p className='team__card__info__description'>Computer Science Student, App Developer, and Digital Creator 
                        with a passion for building useful and intuitive software. 
                        Experienced in full-stack Web development, with a focus on clean React front ends and efficient 
                        backend architecture using Node and Express. Currently spearheading the development of Cartsy, 
                        a team effort to create the best collaborative grocery list app designed for families. 
                        My background in digital media production gives me a unique edge—bridging creative 
                        problem-solving with technical execution.</p>
                </div>
            </div>
            <div className="team__card">
                <img src="./images/headshot_orange.jpg" alt="" />
                <div className="team__card__info">
                    <div className="name__wrapper">
                        <h1 className='team__card__info__name'>Zak El-Assaad</h1>
                        <img src="./images/linkedin-logo.png" alt="" />
                    </div>
                    <h3 className='team__card__info__subtitle'>Computer Science Student at Santa Monica College</h3>
                    <p className='team__card__info__description'>Computer Science Student, App Developer, and Digital Creator 
                        with a passion for building useful and intuitive software. 
                        Experienced in full-stack Web development, with a focus on clean React front ends and efficient 
                        backend architecture using Node and Express. Currently spearheading the development of Cartsy, 
                        a team effort to create the best collaborative grocery list app designed for families. 
                        My background in digital media production gives me a unique edge—bridging creative 
                        problem-solving with technical execution.</p>
                </div>
            </div>
        </div>
    );
}

export default About;