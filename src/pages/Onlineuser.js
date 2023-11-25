import React from 'react'
import "./Onlineuser.css"
import logo from "../images/background.png"
import SearchIcon from '@mui/icons-material/Search';
import { motion,AnimatePresence} from "framer-motion"
const Onlineuser = () => {
  const onlineuser=[JSON.parse(localStorage.getItem("userdata"))]
  return (
    <AnimatePresence>
    <motion.div
      initial={{opacity:0,scale:0}}
      animate={{opacity:1,scale:1}}
      exit={{opacity:0,scale:0}}
      transition={{ease:"anticipate",duration:"0.3"}}
    className="ou-container">
        <div className="ou-header">
            <img src={logo} style={{height:"2rem",width:"2rem"}}/>
            <p className='ou-title'>Online Users</p>
        </div>
        <div className="sbsearch">
    <button className='iconbutton'> <SearchIcon></SearchIcon></button>
    <input className="sb-input" type="text" placeholder='Search' /></div>
    <div className="ou-scrolls">
      {
        onlineuser.map((e,i)=>{
          return <div key={i} className="sbsearch ou-user">
          <p className="con-icon ou-icon">{e.name.slice(0,1)}</p>
          <div className="con-display">{e.name}</div>
        </div>
        })

      }
    </div>
    </motion.div>
      
    </AnimatePresence>
  )
}

export default Onlineuser
