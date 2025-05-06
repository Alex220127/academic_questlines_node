const base62EncodeHelper = require('@helpers/base62Encode')

const { PANEL_LINK } = process.env

exports.execute = (data) => {
  const shortId = base62EncodeHelper.execute(data)

  return { short_code: shortId, link: `${PANEL_LINK}/${shortId}` }
}
