import '../assets/fun.css';
import chill from '../assets/images/chill.jpg'

function Fun() {
    return(
        <div>
                <div className="fun-activity">
                <p className="fun-activity-text">funActivity</p>
                <div className="marathon">
                    <img src="https://vectorprepandarts.com/wp-content/uploads/2023/03/329202419_5628204377305010_3201239217600583898_n.jpg" alt=""></img>
                    <p className="fun-text">
                        We not just learn, work or study these are only mental work but we also organise some fun physical activity where you can participate for your fun like this
                        <span>Marathon</span>, You will also get some price remember
                        a game without a price is like website without css.
                    </p>
                </div>
            </div>
            <hr></hr>
            <div className="ideas-section">
                <p className="fun-activity-text small">ladderOfAnIdea <span>Sisyphus</span></p>
            <div className="ideas1">
                    <p className="death">Happy Ending</p>
                    <div className="idea-container1">
                        <p>You with your Idea</p>
                    </div>
                    <div className="ideas">
                        <div className="idea-container2">
                            <p>Stuck!</p>
                        </div>
                        <div className="idea-container4">
                            <p>Implementation</p>
                        </div>
                        <div className="idea-container3">
                            <p>planning and Learning</p>
                        </div>
                    </div>
            </div>
            </div>
            <hr></hr>
            <div className="random">
                <p>Show your <span>Idea</span>-By showing your idea you will gain other perspective and if other like your they will also work on your idea to make that idea into something.</p>
                <p>You can work on your idea full time</p>
            </div>
            <hr />
        </div>
    )
}

export default Fun;