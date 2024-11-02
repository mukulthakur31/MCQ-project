import React, { useContext, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { Context } from '../main';
import axios from 'axios';
import './Register.css'


function Register() {
  const [username, setname] = useState('');
  const [password, setpassword] = useState('');
  const [roles, setroles] = useState('user');
  const [email, setemail] = useState('');

  const { setisauthenticated, isauthenticated, loading, setloading } = useContext(Context);

  const submitHandler = async (e) => {
    e.preventDefault();
    setloading(true);
    try {
      await axios.post(
        `http://localhost:4000/register`,
        {
          username,
          password,
          roles,
          email,
        },
        {
          withCredentials: true,
        }
      );
      console.log('success');
      alert('Signup Successful');
      setisauthenticated(true);
      setloading(false);
      setemail('');
      setname('');
      setpassword('');
    } catch (error) {
      alert(error.response.data.error);
      setisauthenticated(false);
      setloading(false);
    }
  };

  if (isauthenticated) return <Navigate to={'/'} />;
  return (
    <div className="login">
      <section>
        <form onSubmit={submitHandler}>
          <input value={username} required onChange={(e) => setname(e.target.value)} type="text" placeholder="Name" />
          <input value={email} required onChange={(e) => setemail(e.target.value)} type="text" placeholder="Email" />
          <input value={password} required onChange={(e) => setpassword(e.target.value)} type="password" placeholder="Password" />
          <label>
            <input type="checkbox" checked={roles === 'user'} onChange={() => setroles('user')} />
            User
          </label>
          <label>
            <input type="checkbox" checked={roles === 'admin'} onChange={() => setroles('admin')} />
            Admin
          </label>
          <button type="submit" disabled={loading}>
            Sign Up
          </button>
        </form>
      </section>
    </div>
  );
}

export default Register;
