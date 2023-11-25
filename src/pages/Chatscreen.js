import React from 'react'
import "./Chatscreen.css"
import Sidebar from './Sidebar'
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom'
const Chatscreen = () => {
  const Ltheme = useSelector((state)=>state.theme)
  return (
    <>
    <div className={"csheader"+ ((Ltheme)?"":" dark")}>
      <Sidebar></Sidebar>
      <Outlet></Outlet>
      </div>
    </>
  )
}

export default Chatscreen
