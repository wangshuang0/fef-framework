import React from 'react'
import Icon from 'antd/lib/radio'

import 'antd/lib/radio/style'

require('./index.less');

export default class extends React.Component{
    constructor(props) {
        super(props);
        this.checkedValue= ''; //保存radio选中的值
      }
    
    itemsDeal() {
        let {items,name}= this.props;
        if(typeof items != 'string') {
            return;
        }
        let radios= items.split(';');
        let handle= this.onClickHandle;
        const me = this;
        return radios.map(function(item, index) {
            let values= item.split('=');
            let value= values[1];
            let key= values[0];
            
            return (
                <label key= {index} htmlFor={key}>
                    <input type="radio" name={name} id={key} value= {value} onClick={handle.bind(me)} />
                    <span>{key}</span>
                </label>
            )
        })
    }

    onClickHandle(e) {
        e.stopPropagation();
        this.checkedValue= e.target.value
    }
    eventDeal(props) {
        return {
            onChange: (event) => {
                props.__events && props.__events.onChange && props.__events.onChange({ event, value: this.checkedValue })
            }
        }
    }
    render(){
        let items= this.itemsDeal();
        let dealHandle= this.eventDeal(this.props);
        return (
            <span {...dealHandle}>{items}</span>
        )
    }

}



