let baseUrl = ''
let baseImgPath = ''

if (process.env.NODE_ENV === 'development') {
  baseUrl = ''
  baseImgPath = '/img/'
} else {
  baseUrl = '//elm.cangdu.org'
  baseImgPath = '//elm.cangdu.org/img/'
}

export {
  baseUrl,
  baseImgPath
}
