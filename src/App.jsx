import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='turtles-grid'>
      <div className='title-bar'>
        <div></div>
        <button>Next</button>
        <h1 className="title">Turtle Mapping</h1>
      </div>
      <div>
        {turtleArray.map((turtle, index) => (
          <Turtle turtle={turtle} key={turtle.id} />
        )
        )}
      </div>
    </div>
  )
}

export default App


export default App
