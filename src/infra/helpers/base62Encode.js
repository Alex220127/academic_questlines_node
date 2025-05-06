const crypto = require('crypto')

exports.execute = (data) => {
  const hash = crypto.createHash('sha256').update(JSON.stringify(data)).digest()

  return base62Encode(hash)
}

const base62Encode = (buffer) => {
  const charset = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'

  let num = BigInt('0x' + buffer.toString('hex'))
  let result = ''

  while (result.length < 6) {
    result = charset[num % 62n] + result
    num /= 62n
  }

  return result
}
