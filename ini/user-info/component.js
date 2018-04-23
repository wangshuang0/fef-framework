module.exports= {
    component: 'Page',
    children: [ {
        component: 'Card',
        children: [{
            component: 'Row',
            children: [{
                component: 'Col',
                children: [{
                    component: 'Label',
                    props: {
                        text: '姓名:'
                    }
                },{
                    component: 'Input', 
                    props: {
                        value: {
                          type: 'bind',
                          value: `state.Users.userName`  
                        },
                        __events: {
                            onChange: [{
                                action: 'Script',
                                value: `({event, value, state})=> {state.Users.userName= value}`
                            }]
                        }
                    }
                }]
            }]
        },{
            component: 'Row',
            children:[{
                component: 'Col',
                children: [{
                    component: 'Label',
                    props: {
                        text: 'id:'
                    }
                }, {
                    component: 'Input',
                    props: {
                        value: {
                            type: 'bind',
                            value: 'state.Users.userId'
                        },
                        __events: {
                            onChange: [{
                                action: 'Script',
                                value: `({event, value, state})=> {state.Users.userId= value}`
                            }]
                        }
                    }
                }]
            }]
        },{
            component: 'Row',
            children:[{
                component: 'Col',
                children: [{
                    component: 'Label',
                    props: {
                        text:'性别:'
                    }
                }, {
                    component: 'Radio',
                    props: {
                        items: 'male=1;female=2',
                        name: 'gender',
                        value: {
                            type: 'bind',
                            value: 'state.Users.userGender'
                        },
                    
                        __events: {
                            onChange: [{
                                action: 'Script',
                                value: `({event, value, state})=> {state.Users.userGender = value}`
                            }]
                        }
                    }
                }]
            }]
        },
        // {
        //     component: 'Row', 
        //     children:[{
        //         component: 'Row',
        //         children: [{
        //             component: 'Col',
        //             children: [{
        //                 component: 'Label',
        //                 props: {
        //                     text: '出生年月: '

        //                 }
        //             }, {

        //             }]
        //         }]
        //     }]
        // },
        {
            component: 'Row',
            children: [{
                component: 'Col',
                children: [{
                    component: 'Button',
                    props: {
                        text: '添加',
                        __events: {
                            onClick: [{
                                action: 'Fetch',
                                value: 'addUser'
                            }]
                        }
                    }
                },
                {
                    component: 'Button',
                    props: {
                        text: '返回',
                        __events: {
                            onClick: [{
                                action: 'Redirect',
                                value: '/'
                            }]
                        }
                    }
                }
            ]

            }]
        }]
    }]
}