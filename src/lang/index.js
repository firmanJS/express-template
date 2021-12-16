const path = require('path')
/**
 * require I18n with capital I as constructor
 */
const { I18n } = require('i18n')

/**
 * create a new instance with it's configuration
 */
const lang = new I18n({
  locales: ['en'],
  directory: path.join(__dirname, 'locales')
})

module.exports = {
  lang
}
