import React from 'react'
import "./Onlineuser.css"
import logo from "../images/background.png"
import SearchIcon from '@mui/icons-material/Search';
import { useSelector } from 'react-redux';
import { motion,AnimatePresence} from "framer-motion"
const Onlinegroup = () => {
  const Ltheme = useSelector((state)=>state.theme)
  return (
    <AnimatePresence>
    <motion.div
    initial={{opacity:0,scale:0}}
    animate={{opacity:1,scale:1}}
    exit={{opacity:0,scale:0}}
    transition={{ease:"anticipate",duration:"0.3"}} 
    className={"ou-container"+ ((Ltheme)?"":" dark")}>
        <div className="ou-header">
            <img src={logo} style={{height:"2rem",width:"2rem"}}/>
            <p className='ou-title'>Available group</p>
        </div>
        <div className="sbsearch">
    <button className='iconbutton'> <SearchIcon></SearchIcon></button>
    <input className="sb-input" type="text" placeholder='Search' /></div>
    <div className="ou-scrolls">
    <motion.div whileHover={{scale:1.01}}
    whileTap={{scale:0.98}}
    className="sbsearch ou-user">
        <p className="con-icon ou-icon">T</p>
        <div className="con-display">Test user</div> 
      </motion.div>
    <motion.div whileHover={{scale:1.01}}
    whileTap={{scale:0.98}}
    className="sbsearch ou-user">
        <p className="con-icon ou-icon">T</p>
        <div className="con-display">Test user</div> 
      </motion.div>
    </div>
    </motion.div>
      
    </AnimatePresence>
  )
}

export default Onlinegroup
