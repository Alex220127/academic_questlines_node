import { describe, it, expect } from 'vitest'
const jwtHelper = require('../jwtHelper')

let token = null

describe('Test jwt helper', () => {
  it('sign token', () => {
    const data = { name: 'Alex ' }

    token = jwtHelper.sign(data, '1h')

    expect(typeof token).to.be.equal('string')
    expect(token.length).to.be.greaterThan(0)
  })
  it('verify signature', () => {
    const result = jwtHelper.verify(token)

    expect(result.name.trim()).to.be.equal('Alex')
  })
  it('decode token', () => {
    const result = jwtHelper.decode(token)

    expect(result.name.trim()).to.be.equal('Alex')
  })
})
