const SEARCH = { status: true }
const LIMIT = 5
const PAGE = 1
const MONGO = {
  SORT: [1, -1] // 1 = ASC -1 = DESC
}
const SQL = { SORT: ['ASC', 'DESC'] }
const API_PATH = '/api/v1'
const MORGAN_FORMAT = '[:date[clf]] :remote-addr :remote-user \x1b[36m:method \x1b[36m:url \x1b[33m:status \x1b[32m:response-time\x1b[36m(ms)\x1b[0m'

export {
  SEARCH, LIMIT, PAGE, MONGO, SQL, API_PATH,
  MORGAN_FORMAT
}
