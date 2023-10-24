import './UserProfile.css';

function UserProfile({
  name,
  avatar_url,
  title,
  skillsets,
}){
  return(
    <>
    <div className='container'>
        <div className='left'>
          <h2>{name}</h2>
          <button>Follow</button>
          <h4>{title}</h4>
              <div className="skill">
              {skillsets.map(function(item,index){
              
              return (
               <div className='one'>
                
                <img src={item.icon} key={index}  />
                <p key={item.description} >{item.description}</p>
                </div>
              )
               
                
             })}
              </div>
             
          
       
          </div>

          <div className="right">
            <img style={
              {
                width:"200px",borderRadius:"50%"
              }
            } src={avatar_url} alt="Image Not Found " />
          </div>

        </div>

    
    
    </>
  )
}


export default UserProfile;