import React from 'react'
import "./conversation.css"
const Conversation = (props) => {
   
  return (
    <>
  
      <div className="conversation-container con-height">
        <p className="con-icon">{props.data.name[0]}</p>
        <div className="con-display"><p className="con-title">{props.data.name}</p>
        <p className="con-lastmessage">{props.data.lastmessage}</p></div>
        <p className="con-timestamp">{props.data.timestamp} </p>
      </div>
    </>
  )
}

export default Conversation
