import React from 'react'
import { Progress } from 'antd';
import BotCard from '../../common/botCard'
import './index.scss';

export default function Bar(props) {
	const { data } = props
	return (
		<BotCard title={data.title} link={data.link}>
			<div className="bot-bar">
				<div className="bot-bar-body">
					<div className="bot-bar-chart">
						{
							data.list.map((item, index) => {
								return (
									<div key={index + '_diyProgress'} className="bot-bar-item">
										<div className="bot-bar-desc">
											{item.title}:{item.score}分
             			</div>
										<Progress
											type="line"
											key={index + '_diyProgress_p'}
											percent={item.percent}
											showInfo={false}
											strokeColor={{
												from: '#ff6c00',
												to: '#ffc311',
											}}
										/>
									</div>
								)
							})
						}
					</div>
				</div>
			</div>

		</BotCard>
	)
}