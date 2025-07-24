import profilePic from './assets/muhavi.jpg';

function Card(){
    return(
        <div className="card">
            <img className="card-image" src={profilePic} alt='Muhavi Profile Picture'></img>
            <h2 className="card-title">Muhavi</h2>
            <p className="card-text">Muhavi is a traditional Kenyan dish made from maize flour.</p>
        </div>

    )
}

export default Card