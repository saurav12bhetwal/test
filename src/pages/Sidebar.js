import React from 'react'
import "./Sidebar.css"
import { useState } from 'react'
import {useSelector,useDispatch} from "react-redux"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import ModeNightIcon from '@mui/icons-material/ModeNight';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import SearchIcon from '@mui/icons-material/Search';
import Conversation from "../component/conversation"
import LightModeIcon from '@mui/icons-material/LightMode';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';
import { toggletheme } from '../feature/themeSlice';
const Sidebar = () => {
  const navigate=useNavigate()
  
    const [conversation, setconversation] = useState([
        {
        name:"saurav",
        lastmessage:"last message 1",
        timestamp:"today"
    },
        {
        name:"ajay",
        lastmessage:"last message 2 ",
        timestamp:"today"
    },
        {
        name:"vijay",
        lastmessage:"last message 3",
        timestamp:"today"
    }
])
const Ltheme = useSelector((state)=>state.theme)
const dispatch=useDispatch()
const theme=()=>{
dispatch(toggletheme())
}
const logout=()=>{
  localStorage.removeItem("userdata")
  navigate("/")
}
  return (
    <>
    <div className={'sidebar-container' + ((Ltheme)?"":" dark")}>
    <div className="sbheader">
        <div>
            <button className='iconbutton'>
        <AccountCircleIcon></AccountCircleIcon></button></div>
        <div className='sb-icon'>
        <button className='iconbutton' onClick={()=>{navigate("/chat/useronline")}}>    <PersonAddIcon className='sbicon'></PersonAddIcon></button>
        <button className='iconbutton'onClick={()=>{navigate("/chat/grouponline")}}><GroupAddIcon className='sbicon'></GroupAddIcon></button>
        <button className='iconbutton'onClick={()=>{navigate("/chat/creategroup")}}><AddCircleIcon className='sbicon'></AddCircleIcon></button>
        <button className='iconbutton'onClick={logout}><LogoutIcon className='sbicon'></LogoutIcon></button>
        <button className='iconbutton' onClick={theme}> {Ltheme && <ModeNightIcon className='sbicon'></ModeNightIcon>}
        {!Ltheme && <LightModeIcon className='sbicon'></LightModeIcon>}</button>
        </div>
      </div>
    <div className="sbsearch sb-search2">
    <button className='iconbutton'> <SearchIcon></SearchIcon></button>
    <input className="sb-input" type="text" placeholder='Search' /></div>
    <div className="sbconversation sbconversation2">
        { conversation.map((e,i)=>{
                return <button onClick={()=>{navigate("/chat/chatarea")}}><Conversation data={e} key={i} ></Conversation></button>
            })
          
        }
    </div>
      </div>
    </>
  )
}

export default Sidebar
