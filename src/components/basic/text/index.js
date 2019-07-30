import React from 'react'
import BotCard from '../../common/botCard'
import './index.scss';

// {
//   "type": "text",
//   "title": "",
//   "body": {
//       "title": "我是文本卡片",
//       "desc": "我是卡片内容",
//       "link": "http://baidu.com 链接问题再议"
//   }
// },

export default function Text(props) {
  const { data } = props;
  return (
    <BotCard title={data.title} link={data.link}>
      <div className="bot-text">
        <div className="bot-text-body">
          <div className="bot-text-desc">
            {data.desc}
          </div>
        </div>
      </div>
    </BotCard>
  )
}