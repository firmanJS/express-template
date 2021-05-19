module.exports = {
  API_PATH: '/api/v1',
  SEARCH: {
    status: true
  },
  LIMIT: 5,
  PAGE: 1,
  MONGO: {
    SORT: [1, -1] // 1 = ASC -1 = DESC
  },
  MORGAN_FORMAT: '[:date[clf]] :remote-addr :remote-user \x1b[36m:method \x1b[36m:url \x1b[33m:status \x1b[32m:response-time\x1b[36m(ms)\x1b[0m'
}
