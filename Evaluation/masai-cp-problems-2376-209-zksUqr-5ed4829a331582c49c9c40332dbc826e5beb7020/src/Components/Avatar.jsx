//enter code here
// Avatar should accept caption and image  as props
// do default export
function Avatar({caption,image}){
 
 let styles={
  borderRadius:"50%",
 }
  return(
    <>
     <h2>{caption}</h2>
     <img style={styles} src={image} alt={caption} />
    </>
  )
}

export default Avatar;