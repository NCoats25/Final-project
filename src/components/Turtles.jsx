import Weapons from "./Weapons"


const Turtle= (props) => {

    return (
      <div> 
        <h2>title: {props.turtles.title}</h2>
        <h3>release date:{props.movie.release_date}</h3>
        <p>overview:{props.turtle.overview}</p>
        <img src={props.turtle.poster_path} />
        {props.turtle.weapons.map((weapons, index) => (
        <Weapons weapons={weapons} key={index}/>
        ))}
      </div>
    )}
     
    
  
  export default Turtles