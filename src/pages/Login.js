import React, { useState } from 'react';
import './LoginPage.css'; // Import CSS file for styling
import { Link ,useNavigate} from 'react-router-dom';
import { Backdrop,CircularProgress,Alert} from '@mui/material'

const Login = () => {
  const navigate=useNavigate()
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [loading, setloading] = useState(false)
  const [alert, setalert] = useState(false)
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit =async (e) => {
    e.preventDefault();
    setloading(true)
    
    try {
    setalert(false)
    const response=await fetch("http://localhost:5000/user/login",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({email:formData.email,password:formData.password})
    })

    const json=await response.json()
    if (json){
      console.log(json)
    }
    navigate("/chat")
    localStorage.setItem("userdata",JSON.stringify(json))
    setloading(false)
  } catch (error) {
      setloading(false)
      setalert(true)
  }
  };

  return (
  <>
  <Backdrop
  sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
  open={loading}
>
<CircularProgress color="inherit" />
</Backdrop>
{alert?<Alert severity="error">error during login</Alert>:""}
  <div className="body">
    <div className="login-container">
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input className='input'
            type="email"
            id="email"
            name="email" placeholder='email'
            value={formData.username}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password" className='input'
            id="password"
            name="password" placeholder='password'
            value={formData.password}
            onChange={handleInputChange}
            required 
          /> 
       
        </div>
        
        <button type="submit" className="btn btn-outline-success buttonn">Login</button>
        <Link to="/signup" > <button type="submit" className="btn btn-outline-success buttonn">  Create Account
</button></Link>
      </form>
    </div>
    </div>
    </>
  );
};

export default Login;
