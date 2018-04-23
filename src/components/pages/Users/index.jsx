
            import React, { Component } from 'react'
            import { Link } from 'react-router-dom'

             import Page from '../../antd/Page' 
 import Card from '../../antd/Card' 
 import Row from '../../antd/Row' 
 import Col from '../../antd/Col' 
 import Label from '../../antd/Label' 
 import Input from '../../antd/Input' 
 import Radio from '../../antd/Radio' 
 import Button from '../../antd/Button' 

            const proxyState = require('../../../auto/proxy-state')()
            const proxyAction = require('../../../auto/proxy-action')

            export default class Users extends Component {

                render() {

                    return (
                        <div>
                            Page: Users

                            <Page  ><Card  ><Row  ><Col  ><Label   text={"姓名:"} ></Label><Input __events={{
            onChange: ((handler, proxyState) => {
                return ({event, value}) => {
                    handler({ event, value, state: proxyState })
                }
            })(
                /* 判断用户自定义处理 或 全局action处理 */
                ({ event, value, state }) => { 
                    
            (() => {
                return new Promise((reslove) => {
                    (({event, value, state})=> {state.Users.userName= value})({event, value, state})
                })
            })
        ().then(() => {})
                },
                proxyState
            ),
        }}  value={this.props.Users.userName} ></Input></Col></Row><Row  ><Col  ><Label   text={"id:"} ></Label><Input __events={{
            onChange: ((handler, proxyState) => {
                return ({event, value}) => {
                    handler({ event, value, state: proxyState })
                }
            })(
                /* 判断用户自定义处理 或 全局action处理 */
                ({ event, value, state }) => { 
                    
            (() => {
                return new Promise((reslove) => {
                    (({event, value, state})=> {state.Users.userId= value})({event, value, state})
                })
            })
        ().then(() => {})
                },
                proxyState
            ),
        }}  value={this.props.Users.userId} ></Input></Col></Row><Row  ><Col  ><Label   text={"性别:"} ></Label><Radio __events={{
            onChange: ((handler, proxyState) => {
                return ({event, value}) => {
                    handler({ event, value, state: proxyState })
                }
            })(
                /* 判断用户自定义处理 或 全局action处理 */
                ({ event, value, state }) => { 
                    
            (() => {
                return new Promise((reslove) => {
                    (({event, value, state})=> {state.Users.userGender = value})({event, value, state})
                })
            })
        ().then(() => {})
                },
                proxyState
            ),
        }}  items={"male=1;female=2"}  name={"gender"}  value={this.props.Users.userGender} ></Radio></Col></Row><Row  ><Col  ><Button __events={{
            onClick: ((handler, proxyState) => {
                return ({event, value}) => {
                    handler({ event, value, state: proxyState })
                }
            })(
                /* 判断用户自定义处理 或 全局action处理 */
                ({ event, value, state }) => { 
                    proxyAction['addUser']().then(() => {})
                },
                proxyState
            ),
        }}  text={"添加"} ></Button><Button __events={{
            onClick: ((handler, proxyState) => {
                return ({event, value}) => {
                    handler({ event, value, state: proxyState })
                }
            })(
                /* 判断用户自定义处理 或 全局action处理 */
                ({ event, value, state }) => { 
                    
            (() => {
                return new Promise((reslove) => {
                    proxyAction.redirect({url: '/'})
                })
            })
        ().then(() => {})
                },
                proxyState
            ),
        }}  text={"返回"} ></Button></Col></Row></Card></Page>
                        </div>
                    )
                }
            }
        