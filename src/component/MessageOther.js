import React from 'react'
import "./MessageOther.css"
import "./conversation.css"
const MessageOther = () => {
    var data={name:"saurav",message:" hello  bro How are  you"}
  return (
    <>
    <div className="mo">
    <div className="mo-container">
    <div className="conversation-container ">
        <p className="con-icon">{data.name[0]}</p>
        <div className="con-display"><p className="con-title">{data.name}</p>
        <p className="con-lastmessage">{data.message}</p></div>
       
      </div>
      <p className="con-timestamp mo-timestamp">12:00</p>
            </div> </div> 
    </>
  )
}

export default MessageOther
