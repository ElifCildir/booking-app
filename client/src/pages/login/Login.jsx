import { AuthContext } from "../../context/AuthContext"
import {useContext, useState} from "react"
import "./login.css"


const Login = () => {

  const [credentials, setCredentials] = useState({
     username: undefined,
     password: undefined,

  })

  const{loading, error, dispatch} = useContext(AuthContext);

  const handleChange = (e) =>{
    setCredentials( (prev) =>({...prev,[e.target.id]: e.target.value}));
  };
  return(

    <div className="login">Login
    <div className="lContainer">
      <input type="text" placeholder="username" id="username" onChange={handleChange} className="linput"></input>
      <input type="password" placeholder="password" id="password" onChange={handleChange} className="linput"></input>
    <button onClick={handeLogin} className="lButton">Login</button>
    {error && <span>{error.message}</span> }
    </div>
    </div>
  )


}

export default Login