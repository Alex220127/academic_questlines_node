const Schema = require('./StoreSchema')
const Controller = require('./StoreController')

module.exports = [
  {
    method: 'post',
    path: '/items',
    contract: {
      body: Schema.createStoreItem
    },
    auth: {
      scopes: [ 'admin' ]
    },
    controller: Controller.createStoreItem
  },
  {
    method: 'get',
    path: '/items',
    auth: {
      scopes: [ 'admin', 'student' ]
    },
    controller: Controller.getStoreItems
  },
  {
    method: 'put',
    path: '/items/:item_id',
    auth: {
      scopes: [ 'admin' ]
    },
    contract: {
      body: Schema.updateStoreItem,
      params: Schema.itemIdSchema
    },
    controller: Controller.updateItem
  },
  {
    method: 'delete',
    path: '/items/:item_id',
    auth: {
      scopes: [ 'admin' ]
    },
    contract: {
      params: Schema.itemIdSchema
    },
    controller: Controller.deleteItem
  },
  {
    method: 'put',
    path: '/items/:item_id/redeem',
    auth: {
      scopes: [ 'student' ]
    },
    contract: {
      body: Schema.redeemSchema,
      params: Schema.itemIdSchema
    },
    controller: Controller.redeemItem
  }
]
