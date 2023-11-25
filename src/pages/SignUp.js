import React, { useState } from 'react';
import './SignUpPage.css'; // Import CSS file for styling
import { Link,useNavigate} from 'react-router-dom';
import { Backdrop,CircularProgress } from '@mui/material'
const SignUp = () => {
  const navigate=useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    number: '',
  });
  const [loading, setloading] = useState(false)
  // const [img, setimg] = useState()

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setloading(true)
        const response=await fetch("http://localhost:5000/user/signup",{
          method:"POST",
          headers:{"Content-Type":"application/json"},
          body:JSON.stringify({name:formData.name,email:formData.email,password:formData.password})
        })
        const json=await response.json()
        if(json){
          console.log(json)
        }
        navigate("/")
        
        setloading(false)
  };

  return (
  <div className="body">
     <Backdrop
  sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
  open={loading}
>
<CircularProgress color="inherit" />
</Backdrop>

    <div className="signup-container">
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <div className="half-width">
            <label htmlFor="username">UserName</label>
            <input
              type="text"
              id="username" className='input'
              name="name" placeholder='username'
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email" className='input'
            id="email"
            name="email" placeholder='email'
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        {/* <div className="form-group">
          <label htmlFor="number">Phone Number</label>
          <input
           type="tel"  pattern="[0-9]{10}" className='input'
            id="number"
            name="number" placeholder='phone number'
            value={formData.confirmPassword}
            onChange={handleInputChange}
            required
          />
        </div> */}
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password" className='input'
            name="password" placeholder='password'
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </div>
        {/* <div className="form-group">
          <label htmlFor="file">Upload your picture</label>
          <input
            type="file"
            id="password" 
            name="pic"
             accept='image/'
           
           
          />
        </div> */}
       
        <button type="submit" className=" buttonn btn btn-outline-success ">Sign Up</button>
        <Link to="/" > <button type="submit" className=" buttonn btn btn-outline-success "> Already have Account
</button></Link>
      </form>
    </div>
    </div>
  );
};

export default SignUp;
