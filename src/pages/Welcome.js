import React from 'react'
import "./Welcome.css"
import logo from "../images/livechat.png"
const Welcome = () => {
  const userData=JSON.parse(localStorage.getItem("userdata"))
  return (
    <>
    <div className='Welcome-container'>
   <img src={logo} alt="" className='livechatpng'/>
   <b>Hi ,{userData.name}</b>
   <p>View and text directly to people present in the chat Rooms.</p>
    </div>
    </>
  )
}

export default Welcome
