import React from 'react';
import L from '@components/Loadable';
import Mode from '../model/config';

const Message = L({
    loader: () => import('./basic/message'),
});
const Url_Message = L({
    loader: () => import('./basic/url_message'),
});
const Guide = L({
    loader: () => import('./business/guide'),
});

const LabelText = L({
    loader: () => import('./basic/labelText'),
});

const Text = L({
    loader: () => import('./basic/text'),
});

const Bar = L({
    loader: () => import('./basic/bar'),
});

const NineCell1 = L({
    loader: () => import('./business/nineCell1'),
});

const NineCell2 = L({
    loader: () => import('./business/nineCell2'),
});
const Menu = L({
    loader: () => import('./basic/menu'),
});
const ButtonList = L({
    loader: () => import('./basic/buttonList'),
});
const FeedBack = L({
    loader: () => import('./business/feedback'),
});
const StaffCard = L({
    loader: () => import('./business/StaffCard/StaffCard')
});
const StaffList = L({
    loader: () => import('./business/StaffList/StaffList')
});
const BubbleCard = L({
    loader: () => import('./business/BubbleCard/BubbleCard')
});
const TagList = L({
    loader: () => import('./business/TagList/TagList'),
});

export const TypeEnum = { //组件类型枚举
    message: 'message', //测试组件 映射后端的test,
    url_message: 'url_message',
    guide: 'guide', //引导页卡片
    labelText: 'labelText', //标签文本卡片
    text: 'text',//文本卡片
    buttonList: 'buttonList',
    feedback: 'feedback',
    menu: 'menu',
    nineCell1: 'nineCell1',
    nineCell2: 'nineCell2',
    bar: 'bar',
    radar: 'radar',
    like: 'like',
    staffContrast: 'staffContrast',
    staffCard: 'staffCard',
    staffList: 'staffList',
    bubbleCard: 'bubbleCard',
    labelCard: 'labelCard',
};

export function RenderMSGComponents(props) {
    const { components, event, formType, msg } = props;
    const passEvent = (index, obj, type) => {//event 触发事件要包含 components 的index，和组件传递信息
        event(index, obj, type);
    };
    return (components && components.map((item, index) => {
        const data = Mode(item.body, item.type, msg);
        let my_components = null;
        switch (item.type) {
            
            case TypeEnum.bubbleCard:
                my_components = (<BubbleCard data={data} />)
                break;
            case TypeEnum.staffList:
                my_components = (<StaffList data={data} />)
                break;
            case TypeEnum.staffCard:
                my_components = (<StaffCard data={data} />)
                break;
            case TypeEnum.message:
                my_components = (<Message formType={formType} data={data} />);
                break;
            case TypeEnum.url_message:
                my_components = (<Url_Message formType={formType} data={data} />);
                break;
            case TypeEnum.guide:
                my_components = (<Guide data={data} />);
                break;
            case TypeEnum.labelText:
                my_components = (<LabelText data={data} />);
                break;
            case TypeEnum.text:
                my_components = (<Text data={data} />);
                break;
            case TypeEnum.bar:
                my_components = (<Bar data={data} />);
                break;
            case TypeEnum.nineCell1:
                my_components = (<NineCell1 data={data} />);
                break;
            case TypeEnum.nineCell2:
                my_components = (<NineCell2 data={data} />);
                break;
            case TypeEnum.menu:
                my_components = (<Menu data={data} event={(obj, type) => {
                    passEvent(index, obj, type);
                }} />);
                break;
            case TypeEnum.buttonList:
                my_components = (<ButtonList data={data} event={(obj, type) => {
                    passEvent(index, obj, type);
                }} />);
                break;
            case TypeEnum.feedback:
                my_components = (<FeedBack data={data} event={(obj, type) => { passEvent(index, obj, type) }} />)
                break
            default:
                my_components = null;
                break;
        }
        
        return (<div key={'components_' + index} className="my_components">{my_components}</div>);
    }));
}
