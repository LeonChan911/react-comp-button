import React from 'react'
import './index.scss'
const Message = (props) => {
  const { data,  formType } = props
  const msgContet = data && data.msg;
   let msgDom = null;
   if(formType === 'left'){
    msgDom=( <div  dangerouslySetInnerHTML={{ __html: msgContet}} className="msg_left"></div>)
   }else{
    msgDom=( <div  dangerouslySetInnerHTML={{ __html: msgContet}} className="msg_right"></div>)
   }
  return msgDom
  
}
export default Message