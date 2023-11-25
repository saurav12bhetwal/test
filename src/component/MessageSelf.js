import React from 'react'
import "./MessageSelf.css"
const MessageSelf = () => {
    var data={message:" i am fine brother what about you"}
  return (
    <div>
        <div className="ms">
       <div className="ms-container">
    <div className="conversation-container ">
        {data.message}
      </div>
      <p className="con-timestamp mo-timestamp">12:00</p>
            </div> 
    </div>
    </div>
  )
}

export default MessageSelf
