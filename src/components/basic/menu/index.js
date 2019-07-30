import React from 'react'
import './index.scss';
export default function Menu(props) {
  const { data,event } = props;
  console.log('datadata',data)
  const grey = data.grey;
  let greyClass=''
  let greyClass2=''
  if(grey){
    greyClass='grey'
    greyClass2='grey2'
  }
  const choice=(item)=>{
    if(grey){
      return;
    }
    event(item,'query')
  }
  return (
    <div className="bot-menu">
      <div className="bot-menu-title"><div className="span_l"></div><div>{data.title}</div></div>
      <div className="bot-menu-body">
        {data.content.map((item,index)=>{
          
          return (<div onClick={()=>{choice(item)}} className={'bot-menu-body-li bot-menu-body-li-'+ index+' '+greyClass} key={'bot-menu-body_'+index}><span className={greyClass2}></span><div className="texts">{item.text}</div></div>)
        })}
      </div>
    </div>
  )
}