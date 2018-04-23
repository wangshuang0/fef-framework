
/* 
    每个页面默认动作，如：修改状态、重置状态
*/

import * as Goods from '../redux/logic/Goods/actions'
import * as GoodsAdd from '../redux/logic/GoodsAdd/actions'
import * as Users from '../redux/logic/Users/actions'

const proxyAction = require('./proxy-action')


proxyAction.create('Goods', {
  action: 'Script',
  value: Goods
})


proxyAction.create('GoodsAdd', {
  action: 'Script',
  value: GoodsAdd
})


proxyAction.create('Users', {
  action: 'Script',
  value: Users
})

