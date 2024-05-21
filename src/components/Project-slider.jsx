import '../assets/project.css'
import chill from '../assets/images/chill.jpg'
import college from '../assets/images/college.jpg'
import films from '../assets/images/films.jpg'
import hitchHike from '../assets/images/hitchHike.jpg'
import mystery from '../assets/images/mystery.jpg'
import travel from '../assets/images/travel.jpg'

function Project(){
    const projectData = [{
        img: chill,
        name: 'Chill',
        alt: 'adventure time'
    },{
        img: college,
        name: 'College',
        alt: 'college'
    },{
        img: films,
        name: 'Films',
        alt: 'film'
    },{
        img: hitchHike,
        name: 'Ride with me',
        alt: 'hitchike'
    },{
        img: mystery,
        name: 'Solve Mystery',
        alt: 'Dark Netflix'
    },{
        img: travel,
        name: 'Travel',
        alt: 'travel'
    }];

    /*return(
        <div className="projects">
            <p>projectsYoucanWork</p>
            <div className="scroll">
                {projectData.map((project, index) => {
                    <div className='card' key={index}>
                        <img src={project.img} alt={project.alt} />
                        <p>{project.name}</p>
                    </div>
                })}
            </div>
        </div>
    );*/

    return(
        <div className="projects">
            <p>projectsYoucanWork</p>
            <div className="scroll wrapper-holder">
            <div className="card"><img src={hitchHike} alt=""></img><p>Ride with me</p></div>
            <div className="card"><img src={college} alt=""></img><p>College</p></div>
            <div className="card"><img src={films} alt=""></img><p>Film</p></div>
            <div className="card"><img src={travel} alt=""></img><p>Travel</p></div>
            <div className="card"><img src="https://vectorprepandarts.com/wp-content/uploads/2023/03/329202419_5628204377305010_3201239217600583898_n.jpg" alt=""></img><p>Community</p></div>
            <div className="card"><img src={chill} alt=""></img><p>Chill</p></div>
            <div className="card"><img src={mystery} alt=""></img><p>Solve Mystery</p></div>
            <div className="card"><img src="https://vectorprepandarts.com/wp-content/uploads/2023/03/329202419_5628204377305010_3201239217600583898_n.jpg" alt=""></img><p>Eifo</p></div>
        </div>
    </div>
    );
}

export default Project;
