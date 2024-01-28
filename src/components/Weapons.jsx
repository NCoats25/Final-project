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
      <p style={{ backgroundColor: colorGenre, color : '#000000', width: "400px" }}>
        {props.weapons.name}
      </p>
    </div>
  )
  
  }
  
  export default Weapons