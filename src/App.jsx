import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Turtles from './components/Turtles'
import turtlesArray from './turtles.json'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='turtles-grid'>
      <div className='title-bar'>
        <div></div>
        <button>Next</button>
        <h1 className="title">Turtle Mutant Ninga Turtles </h1>
      </div>
      <div>
        {turtlesArray.map((turtles, index) => (
          <Turtles turtles={turtles} key={turtles.id} />
        )
        )}
      </div>
    </div>
  )
}

export default App



