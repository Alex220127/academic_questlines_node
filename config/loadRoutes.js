const router = require('express').Router()
const fs = require('fs')
const path = require('path')
const targetDir = path.join(__dirname, '..', 'src', 'interfaces', 'http')

const contractValidatorMiddleware = require('../src/interfaces/middlewares/contractValidation')
const authMiddleware = require('../src/interfaces/middlewares/authMiddleware')

module.exports = () => {
  fs.readdirSync(targetDir).forEach(dir => {
    const routes = require(`${targetDir}/${dir}/${dir}Routes.js`)
    routes.forEach(route => {
      const handlers = [
        route.controller
      ]

      if (route.contract) {
        handlers.unshift((req, res, next) => contractValidatorMiddleware(req, res, next, route.contract))
      }

      if (route.auth) {
        handlers.unshift((req, res, next) => authMiddleware(req, res, next, route.auth))
      }

      router[route.method](route.path, handlers)
    })
  })

  return router
}
