import '../css/styles__home.css';
import '../css/fonts.css';


function Home() {
    return (
        <div className="home__slogan">
            <h1>the <span className="text__bold">grocery list</span> app,</h1>
            <h1>for <span className="text__bold">families</span></h1>
            <h3 className='home__description'>share, add, and check-off lists</h3>
            <button>join free</button>
        </div>
    );
}

export default Home;