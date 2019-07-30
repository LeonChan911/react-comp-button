import React, { useState } from 'react'
import menu from './img/menu.svg'
import './index.scss';
export default function ButtonList(props) {
  const rowsHeight =60 ;
  const { data, event } = props;
  const [heightRow, setHeightRow] = useState({ maxHeight: '58px' });
  const [realHeight,setRealHeight] = useState(0);
  const [display,setDisplay] = useState({display:'flex'});
  const onlyid = 'bot-buttonList-body-'+Math.random().toString()+Math.random().toString(); //组件id 唯一的随机数
  let grey = data.grey;
  let greyClass=''
  let greyClass2=''
  if(grey){
    greyClass='grey'
    greyClass2='grey2'
  }
  const choice = (item) => {
    if(grey){
      return
    }
    event(item, 'inquiry')
  }
  const more = () => {
    if(grey){
      return
    }
     setDisplay({display:'none'})
     setHeightRow({})  
  }
  setTimeout(() => {

    if(document.getElementById(onlyid)){
      let h = document.getElementById(onlyid).clientHeight;
      setRealHeight(h)
    }  
  }, 100)
  return (
    <div className="bot-buttonList"> 
      <div className="bot-buttonList-body opt" style={display} id={onlyid}>
        {data.map((item, index) => {

          return (<div className='bot-buttonList-body-li' key={'ss' + index}>{item.text}</div>)
        })}
      </div>
      <div className="bot-buttonList-body" style={heightRow} >
        {data.map((item, index) => {

          return (<div onClick={() => { choice(item) }} className={'bot-buttonList-body-li '+greyClass} key={'bot-buttonList-body_' + index}>{item.text}</div>)
        })}
      </div>
      {( realHeight>rowsHeight ) && (<a className={'mores '+greyClass2} onClick={() => { more() }}>更多 <img src={menu}/></a>)}
    </div>
  )
}