import React from 'react'

 function Signin() {
  return (
    <div>
      <div style = {{display:"flex",justifyContent:"center",paddingRight:"10px",alignItems:"center",}}>
       <form style={{border:"1px solid black",padding:"10px",width:"300px"}} action="" method='post'>
         <input style={{width:"100%",padding:"10px"}} type="text" placeholder='Enter your name'/>
         <input style={{width:"100%",padding:"10px"}}  type="password" placeholder='Enter your password'/>
         <button className='btn btn-dark ' style={{width:"100%",padding:"10px"}}  type='submit'>Signin</button>
       </form>

       </div>
    </div>
  )
}
export default Signin
