import React, { useState } from 'react'
import "./ChatArea.css"
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import SendIcon from '@mui/icons-material/Send';
import MessageOther from '../component/MessageOther';
import MessageSelf from '../component/MessageSelf';
import { useSelector } from 'react-redux';
import { motion,AnimatePresence} from "framer-motion"
const ChatArea = () => {
  const [data, setdata] = useState({
    name:"saurav",
    lastmessage:"online"
  })
  const Ltheme = useSelector((state)=>state.theme)
  return (
    <AnimatePresence>
      <motion.div
        initial={{opacity:1,scale:0}}
        animate={{opacity:1,scale:1}}
        exit={{opacity:1,scale:0}}
        transition={{ease:"anticipate",duration:"0.3"}}
      className={"chatArea-container"+ ((Ltheme)?"":" dark")}>
        <div className="ca-header">
      <div className="conversation-container con-height ">
        <p className="con-icon">{data.name[0]}</p>
        <div className="con-display"><p className="con-title">{data.name}</p>
        <p className="con-lastmessage">{data.lastmessage}</p></div>
        <p className="con-timestamp"><button><DeleteOutlineIcon/></button> </p>
      </div>
      </div>
      <div className="ca-message"><MessageOther></MessageOther>
        <MessageSelf></MessageSelf> <MessageSelf></MessageSelf> <MessageSelf></MessageSelf><MessageOther></MessageOther><MessageOther></MessageOther></div>
        <div className="ca-input"><input className='ca-inputt' type="text" placeholder='Type messeage' />
        <button> <SendIcon className='sendicon'></SendIcon></button></div>
      </motion.div>
    </AnimatePresence>
  )
}

export default ChatArea
