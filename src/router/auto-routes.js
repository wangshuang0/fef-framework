
            import React from 'react'
            import { Route } from 'react-router-dom'
            import lazyLoad from './lazyLoad'

            const Goods = lazyLoad(() => import(/* webpackChunkName: "Goods" */ '../containers/Goods'))
const GoodsAdd = lazyLoad(() => import(/* webpackChunkName: "GoodsAdd" */ '../containers/GoodsAdd'))
const Users = lazyLoad(() => import(/* webpackChunkName: "Users" */ '../containers/Users'))
            
            const routes = [
                <Route key='Goods-0' path='/Goods' component={Goods} />,<Route key='GoodsAdd-1' path='/GoodsAdd' component={GoodsAdd} />,<Route key='Users-2' path='/Users' component={Users} />
            ]

            export { routes }
        