/* eslint-disable react/prop-types */
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
const taskList = [
  
]
const task = (name, description, complete) => {
  return (
    <>
      <h4>{name}</h4>
      <p>{description}</p>
      <label>Task complete?
        <input type="checkbox" id="CompletionStatus" name="CompletionStatus" ></input>
      </label>
    </>
  );
}


  return (
    <>
      {createTask('Task Name','Task Description',false)};
      {createTask('Task Name2','Task Description2',false)};
    </>
  );
}


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Tasklist/>
      </div>
    </>
  )
}

export default App