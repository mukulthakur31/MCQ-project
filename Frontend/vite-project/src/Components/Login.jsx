import React, { useContext, useState } from "react";
import { Link,Navigate } from 'react-router-dom'
import { Context } from "../main";
import axios from "axios";


function Login() {
  const [username, setname] = useState("");
  const [password, setpassword] = useState("");

  const { isauthenticated,setisauthenticated, loading, setloading } = useContext(Context);

  const submitHandler = async (e) => {
    e.preventDefault();
    setloading(true);
    try {
       await axios.post(`http://localhost:4000/login`, {
        password,
        username,
      },{
        withCredentials:true
      });
      console.log("success");
      alert("Login Successfull");
      setisauthenticated(true);
      setloading(false);
      setname('')
      setpassword('')
    } catch (error) {
      alert(error.response.data.error);
      setisauthenticated(false);
      setloading(false);
    }
  };

  if(isauthenticated) return <Navigate to={'/'}/>
  return (
    <div className="login">
      <section>
        <form onSubmit={submitHandler}>
          <input
            value={username}
            required
            onChange={(e) => setname(e.target.value)}
            type="text"
            placeholder="name"
          />

          <input
            value={password}
            required
            onChange={(e) => setpassword(e.target.value)}
            type="password"
            placeholder="password"
          />

          <button type="submit" disabled={loading}>
            Log In
          </button>
         
        </form>
      </section>
    </div>
  );
}

export default Login;
