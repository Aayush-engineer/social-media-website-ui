import { useContext } from "react";
import { Link } from "react-router-dom"
import { AuthContext } from "../../context/authContext";
import "./Login.scss"


const Login = () => {

  const {login} = useContext(AuthContext);


  const  handlelogin = ()=>{
    
    login();
  }


  return (
    <div className="login">
     <div className="card">
        <div className="left">
          <h1>hello world.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, libero, alias pariatur debitis qui architecto est, atque earum modi facilis asperiores! Nulla tenetur fuga consequatur ratione facilis assumenda debitis officiis?
          </p>
          <span>Don't you have an account?</span>
          <Link to="/register">
          <button>Register</button>
          </Link>
        </div>
        <div className="right">
            <h1>Login</h1>
            <form>
                <input type="text" placeholder="Username"/>
                <input type="password" placeholder="Password"/>
                <button onClick={handlelogin}>Login</button>
                
            </form>
        </div>
     </div>
    </div>
  )
}

export default Login
