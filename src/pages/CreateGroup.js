import React from 'react'
import "./CreateGroup.css"
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import { AnimatePresence,motion } from 'framer-motion';
const CreateGroup = () => {
  return (
    <AnimatePresence>
    <motion.div 
      initial={{opacity:0,scale:0}}
      animate={{opacity:1,scale:1}}
      exit={{opacity:0,scale:0}}
      transition={{ease:"anticipate",duration:"0.3"}}
    className='cg-main'>
    <div className="cg-container">
      <input className='cg-input' type="text" placeholder='Enter Group Name' />
      <button>
      <DoneOutlineIcon></DoneOutlineIcon>
      </button>
    </div>
    </motion.div>
    </AnimatePresence>
  )
}

export default CreateGroup
