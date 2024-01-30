import Weapons from "./Weapons"


const Turtles = (props) => {

    return (
      <div> 
        <h2>title: {props.turtles.title}</h2>
        <p>overview:{props.turtles.overview}</p>
        <img src={props.turtles.poster_path} />
        {props.turtles.weapons.map((weapons, index) => (
        <Weapons weapons={weapons} key={index}/>
        ))}
      </div>
    )}
     
    
  
  export default Turtles