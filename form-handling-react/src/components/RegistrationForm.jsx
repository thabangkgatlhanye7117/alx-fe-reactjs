 import { useState } from "react"

 const RegistrationForm = () =>{

    const [userData, setUserData] = useState({
       username : "",
       email : "",
       password : ""
    });

    const handleChange = (e) =>{
      const {username, value}= e.target;
       setUserData(prevState => ({...prevState,[username] : value}));

    const handleSubmit = (e)=>{

      e.preventDefault();
      console.log(userData);
    }
    }


  return(
      <div>
      <form onSubmit={handleSubmit}>
          <div>
            <input id='userName' type='text' name='username' value={username} onChange = {handleChange} required/>
            <input id='passWord' type='password' name='password' value={password} onChange = {handleChange } required />
            <input id='email' type='email' name='email' value={email} onChange = {handleChange} required/>
          </div>
          <button onclick = {handleSubmit}>Submit</button>


      </form>
      </div>
      
  )

 }

 export default RegistrationForm