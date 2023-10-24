
function Skills(props){


  return (
 <>
  <div>
    <h1>Lists are given below</h1>
  {
    props.items.map(function(item,index){
      return (
        <li key={index}>{item}</li>
      )
    })
  }
  

  </div>
 
 
 </>
  )
}
export default Skills