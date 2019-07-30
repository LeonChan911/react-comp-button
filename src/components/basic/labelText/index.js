import React from 'react'
import BotCard from '../../common/botCard'
import './index.scss';

// {
//   "type": "labelText",
//   "title": "",
//   "body": {
//       "title": "工作选择价值观",
//       "list": [
//           {
//               "subTitle": "兴趣特长",
//               "desc": " 我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容"
//           },
//           {
//               "subTitle": "追求新意",
//               "desc": " 我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容"
//           },
//           {
//               "subTitle": "组织需要",
//               "desc": " 我是内容我是内"
//           }
//       ],
//       "link": "http://baidu.com 链接问题再议"
//   }
// },

export default function LabelText(props) {
  const { data } = props;
  return (
    <BotCard title={data.title} link={data.link}>
      <div className="bot-labelText">
        <div className="bot-labelText-body">
          {
            data.list.map((i, index) => (
              <div className="bot-labelText-item" key={index}>
                <div className="bot-labelText-subTitle">
                  {i.subTitle}
                </div>
                <div className="bot-labelText-desc">
                  {i.desc}
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </BotCard>
  )
}