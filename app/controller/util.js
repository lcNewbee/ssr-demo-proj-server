'use strict'

const svgCaptcha = require('svg-captcha')
const Controller = require('egg').Controller

class UtilController extends Controller {
  async captcha() {
    const svg = svgCaptcha.create({
      size: 4,
      fontSize: 50,
      width: 100,
      height: 50,
      noise: 5,
    })

    this.ctx.session.captcha = svg.text
    this.ctx.response.type = 'image/svg+xml'
    this.ctx.body = svg.data
  }
}

module.exports = UtilController
