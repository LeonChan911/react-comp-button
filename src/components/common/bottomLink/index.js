import React from 'react'
import { Icon } from 'antd'
import './index.scss';

export default function BottomLink(props) {
  const { text, children, ...other } = props
  return (
    <div className="bot-bottomLink">
      <hr/>
      {children || <a target="_blank" {...other}>{text || "查看详情"} <Icon type="right" /></a>}
    </div>
  )
}