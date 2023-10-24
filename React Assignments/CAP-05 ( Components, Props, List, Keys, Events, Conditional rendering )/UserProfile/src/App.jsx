import { useState } from 'react'
import './App.css'
import UserProfile from './UserProfile'


function App(){
  return(
  <>

 
    <div>
      <UserProfile name="Nrupul Dev" title="software engineer" avatar_url={"https://masai-website-images.s3.ap-south-1.amazonaws.com/Nrupul_d3fe3b289a.jpg"} 
       skillsets={[{icon:"",description:"React.JS"},{icon:"https://icons8.com/icon/108784/javascript",description:"JavaScript"},{icon:"https://icons8.com/icon/FQlr_bFSqEdG/node-js",description:"Node JS"},{icon:"https://icons8.com/icon/13441/python",description:"Python"}]}
      />
    
    
    </div>
    
    </>
  )

}

export default App
