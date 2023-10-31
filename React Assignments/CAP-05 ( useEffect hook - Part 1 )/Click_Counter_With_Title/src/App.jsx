import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const[count,setCount] = useState(0);
  useEffect(()=>{
    document.title= `Click: ${count} times`
  })
     return (
      <>
       
  <h1>Count: {count}</h1>
  <button onClick={()=>{setCount(count+1)}}>Increase Count</button>
      
      </>
     )
}

export default App
