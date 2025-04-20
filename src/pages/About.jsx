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
                        <a href="https://www.linkedin.com/in/zakaria-el-assaad-80b031271/" target="_blank"><img src="./images/linkedin-logo.png" alt="" /></a>
                    </div>
                    <h3 className='team__card__info__subtitle'>Computer Science Student at Santa Monica College</h3>
                    <p className='team__card__info__description'></p>
                </div>
            </div>
            <div className="team__card">
                <img src="https://media.licdn.com/dms/image/v2/D5635AQHt0n7-eFRzpg/profile-framedphoto-shrink_800_800/B56ZY2XBjHHoAk-/0/1744668727869?e=1745787600&v=beta&t=n8Ty080tf2879cH5e23JXK8J8Kc8OQBaflRXrDxP5u4" alt="" />
                <div className="team__card__info">
                    <div className="name__wrapper">
                        <h1 className='team__card__info__name'>Ibrahim Alwishah</h1>
                        <a href="https://www.linkedin.com/in/ibrahim-alwishah/" target="_blank"><img src="./images/linkedin-logo.png" alt="" /></a>
                    </div>
                    <h3 className='team__card__info__subtitle'>Research Assistant at University of Michigan - Dearborn</h3>
                    <p className='team__card__info__description'></p>
                </div>
            </div>
            <div className="team__card">
                <img src="https://media.licdn.com/dms/image/v2/D4E03AQFERVup48Zm1Q/profile-displayphoto-shrink_800_800/B4EZRE7zGZHAAc-/0/1736323314883?e=1750291200&v=beta&t=8YT-896mZefPTLBpDGq_sGSXQ5Zw0JulI8N-lxRnVao" alt="" />
                <div className="team__card__info">
                    <div className="name__wrapper">
                        <h1 className='team__card__info__name'>Morad Yaseen</h1>
                        <a href="https://www.linkedin.com/in/morad-yaseen/" target="_blank"><img src="./images/linkedin-logo.png" alt="" /></a>
                    </div>
                    <h3 className='team__card__info__subtitle'>Computer Engineering Student at University of Michigan - Ann Arbor</h3>
                    <p className='team__card__info__description'></p>
                </div>
            </div>
            <div className="team__card">
                <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="" />
                <div className="team__card__info">
                    <div className="name__wrapper">
                        <h1 className='team__card__info__name'>Hashem Alhabbal</h1>
                    </div>
                    <h3 className='team__card__info__subtitle'>Electrical Engineering Student at University of Michigan - Dearborn</h3>
                    <p className='team__card__info__description'></p>
                </div>
            </div>
        </div>
    );
}

export default About;