import React from 'react'
import './index.scss'
const Url_Message = (props) => {
  const { data,  formType } = props
  let msgContet = data && data.msg;
  const url = data && data.url;
  let contArr= msgContet.split('$url$');
  let newMsgContet='';
  for(let key in contArr){
    let item = contArr[key];
    let item2 =url[key];
    if((Number(key)+1)===contArr.length){
      newMsgContet=newMsgContet+item
      
    }else{
      newMsgContet=newMsgContet+item+`<a href=${item2.url} target="_blank">${item2.text}</a>`

    }
    
  }
   let msgDom = null;
   if(formType === 'left'){
    msgDom=( <div  dangerouslySetInnerHTML={{ __html: newMsgContet}} className="msg_left"></div>)
   }else{
    msgDom=( <div  dangerouslySetInnerHTML={{ __html: newMsgContet}} className="msg_right"></div>)
   }
  return msgDom
  
}
export default Url_Message