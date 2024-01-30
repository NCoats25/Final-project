const Weapons = (props) =>{
    let turtleTraits

switch (props.weapons.name) {
    case 'Leonardo':
        turtleTraits= 'blue'
        break
    case 'Donatello':
        turtleTraits= 'purple'
        break 
    case 'Raphael,':
        turtleTraits= 'red'
        break
    case 'Michelangelo':
        turtleTraits= 'orange'
        break 
}

return (
    <div className="weaponsTitle">
      <p style={{ backgroundColor: "rgb(61,13,38)", color : '#FFFFFF', width: "600px" }}>
        {props.weapons.name}
      </p>
    </div>
  )
  
  }
  
  export default Weapons