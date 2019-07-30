import React from 'react';
import './index.scss'

function renderTitle(title) {
  return (
    <div className="bot-card-title">
      <span className="bot-card-title-icon"></span>
      {title}
    </div>
  )
}
function renderLink(href, onLinkClick) {
  const onClick = (e) => {
    e.preventDefault()
    onLinkClick()
  }
  return (
    <div className="bot-card-link">
      <a href={href} onClick={onLinkClick && onClick} target="_blank">查看详情</a>
    </div>
  )
}
export default function BotCard(props = {}) {
  const { title, link, children, onLinkClick,...other } = props
  return (
    <div className="bot-card" {...other}>
      {title && renderTitle(title)}
      <div>
        {children}
      </div>
      {link && renderLink(link, onLinkClick)}
    </div>
  )
}