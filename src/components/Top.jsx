import '../assets/top.css';
import '../assets/responsive.css';

function Top() {
    return (
        <div>
            <main>
                <p>hackSpace</p>
                <h1>We are <span>/ just some curious homosapians developer, learner, enterpreneur, athlete, gamer, contentCreater, worker, helper, owner... Phewww!</span></h1>
            </main>

            <hr></hr>
            <div className="slider">
                <div className="image">
                    <img src="https://vectorprepandarts.com/wp-content/uploads/2023/03/329202419_5628204377305010_3201239217600583898_n.jpg" alt=""></img>
                </div>
                <div className="image-details">
                    <p>Community</p>
                    <h2>Where you can work on your self </h2>
                </div>
            </div>
            <hr></hr>
        </div>
    );
}

export default Top;