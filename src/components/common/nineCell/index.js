import React from 'react'
import { Row, Col } from 'antd'
import classnames from 'classnames'
import './index.scss'

const list = [
  [3, 1], [3, 2], [3, 3],
  [2, 1], [2, 2], [2, 3],
  [1, 1], [1, 2], [1, 3]
]
export function getIndex(y, x) {
  return list.findIndex(item => item.join('-') === (`${y}-${x}`))
}
export function getClassName(y, x) {
  const num = x + y;
  return classnames({
    yellow: num === 2,
    green: num === 3,
    blue: num === 4,
    purple: num > 4
  })
}
export default function NineCell(props = {}) {
  const { renderCell } = props;
  return (
    <div className={`bot-nineCell`}>
      <div className="bot-nineCell-coord">
        <div className="bot-nineCell-box">
          <Row gutter={3}>
            {
              list.map((item, index) => {
                return (
                  <Col span={8} key={index}>
                    <div className={`bot-nineCell-item ${getClassName(item[0], item[1])}`}>
                      {renderCell && renderCell(item, index)}
                    </div>
                  </Col>
                )
              })
            }
          </Row>
        </div>
        <div className="bot-nineCell-y">
          <span className="bot-nineCell-y-title">综合能力</span>
          <ul className="bot-nineCell-y-axis">
            <li>高</li>
            <li>中</li>
            <li>低</li>
          </ul>
        </div>
        <div className="bot-nineCell-x">
          <span className="bot-nineCell-x-title">绩效</span>
          <ul className="bot-nineCell-x-axis">
            <li>高</li>
            <li>中</li>
            <li>低</li>
          </ul>
        </div>
      </div>
    </div>
  )
}