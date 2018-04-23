

const proxyAction = require('./proxy-action')


proxyAction.create('addUser',
  {
    action: 'Fetch',
    value: {
      type: 'post',
      url: '/user',
      data: {
        "user_name": "state.Users.userName",
        "user_id": "state.Users.userId",
        "user_gender": "state.Users.userGender"
      },
      callback: `({res, state}) => {
                    console.log('get status');
                }`
    }
  }
)
;
proxyAction.create('GetGoodsList',
  {
    action: 'Fetch',
    value: {
      type: 'get',
      url: '/list',
      data: {
        "goods_name": "state.Goods.filterGoodsName",
        "goods_id": "state.Goods.filterGoodsID",
        "brand_name": "state.Goods.filter_goodsCategory",
        "page": "state.Goods.goodsPageIndex",
        "page_size": "state.Goods.goodsPageSize"
      },
      callback: `
                    ({res, state}) => {
                        state.Goods.goodsList = res
                    }
                `
    }
  }
)
;
proxyAction.create('AddGoods',
  {
    action: 'Fetch',
    value: {
      type: 'post',
      url: '/add',
      data: {
        "goodsName": "state.GoodsAdd.goodsName"
      },
      callback: `
                    ({res, state}) => {
                        if(res.code === 200){
                            alert('success')
                        }
                    }
                `
    }
  }
)


