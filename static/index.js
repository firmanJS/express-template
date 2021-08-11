const info = {
  description: 'This is API , Made with ❤ by <a href="https://github.com/firmanJS" target="_blank">@firmanjs.</a>',
  version: '1.0.0',
  title: 'API Documentation For Boilerplate ExpressJS',
  contact: {
    email: ''
  },
  license: {
    name: 'MIT',
    url: 'https://opensource.org/licenses/MIT'
  }
}

const servers = [
  {
    url: '/api/v1/',
    description: 'Development server'
  }
]

const paths = require('./path')
const schema = require('./schema')

const index = {
  openapi: '3.0.0',
  info,
  servers,
  paths: { ...paths.auth, ...paths.user },
  components: {
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT'
      }
    },
    schemas: { ...schema.auth, ...schema.user }
  }
}

export {
  index
}
