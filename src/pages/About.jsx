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
                        <h1 className='team__card__info__name'>Ibrahim Alwishah</h1>
                        <img src="./images/linkedin-logo.png" alt="" />
                    </div>
                    <h3 className='team__card__info__subtitle'>Research Assistant at University of Michigan - Dearborn</h3>
                    <p className='team__card__info__description'>As a Computer Science student, I am constantly driven 
                        by the opportunities to create and innovate software development and artificial intelligence 
                        solutions. My academic foundation is complemented by my own hands-on experience in research 
                        as well as engineering roles. <br></br>Professionally, I have excelled as a Software Engineer 
                        Intern at LG, creating scripts to automate and test high-voltage modules among other things. 
                        My leadership experience as a Software Lead for our Formula SAE Electric club has allowed me 
                        to blend real-world applications with my technical expertise.</p>
                </div>
            </div>
            <div className="team__card">
                <img src="./images/headshot_orange.jpg" alt="" />
                <div className="team__card__info">
                    <div className="name__wrapper">
                        <h1 className='team__card__info__name'>Morad Yaseen</h1>
                        <img src="./images/linkedin-logo.png" alt="" />
                    </div>
                    <h3 className='team__card__info__subtitle'>Computer Engineering Student at University of Michigan - Ann Arbor</h3>
                    <p className='team__card__info__description'>As a Computer Science student, I am constantly driven 
                        by the opportunities to create and innovate software development and artificial intelligence 
                        solutions. My academic foundation is complemented by my own hands-on experience in research 
                        as well as engineering roles. <br></br>Professionally, I have excelled as a Software Engineer 
                        Intern at LG, creating scripts to automate and test high-voltage modules among other things. 
                        My leadership experience as a Software Lead for our Formula SAE Electric club has allowed me 
                        to blend real-world applications with my technical expertise.</p>
                </div>
            </div>
            <div className="team__card">
                <img src="https://media.licdn.com/dms/image/v2/D4E03AQFERVup48Zm1Q/profile-displayphoto-shrink_800_800/B4EZRE7zGZHAAc-/0/1736323314883?e=1750291200&v=beta&t=8YT-896mZefPTLBpDGq_sGSXQ5Zw0JulI8N-lxRnVao" alt="" />
                <div className="team__card__info">
                    <div className="name__wrapper">
                        <h1 className='team__card__info__name'>Hashem Alhabbal</h1>
                        <img src="./images/linkedin-logo.png" alt="" />
                    </div>
                    <h3 className='team__card__info__subtitle'>Computer Engineering Student at University of Michigan - Dearborn</h3>
                    <p className='team__card__info__description'>As a Computer Science student, I am constantly driven 
                        by the opportunities to create and innovate software development and artificial intelligence 
                        solutions. My academic foundation is complemented by my own hands-on experience in research 
                        as well as engineering roles. <br></br>Professionally, I have excelled as a Software Engineer 
                        Intern at LG, creating scripts to automate and test high-voltage modules among other things. 
                        My leadership experience as a Software Lead for our Formula SAE Electric club has allowed me 
                        to blend real-world applications with my technical expertise.</p>
                </div>
            </div>
        </div>
    );
}

export default About;