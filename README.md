# Express  Template Boillerplate RestfullApi
[![Maintainability](https://api.codeclimate.com/v1/badges/0dc437426c4b1f867461/maintainability)](https://codeclimate.com/github/firmanJS/express-template/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/0dc437426c4b1f867461/test_coverage)](https://codeclimate.com/github/firmanJS/express-template/test_coverage)
[![Node.js CI](https://github.com/firmanJS/express-template/actions/workflows/node.js.yml/badge.svg)](https://github.com/firmanJS/express-template/actions/workflows/node.js.yml)
[![made-with-nodejs](https://img.shields.io/badge/Made%20with-Nodejs-1f425f.svg)](https://nodejs.org)
[![made-with-expressjs](https://img.shields.io/badge/Made%20with-Expressjs-1f425f.svg)](https://expressjs.com/)
[![Ask Me Anything !](https://img.shields.io/badge/Ask%20me-anything-1abc9c.svg)](https://github.com/firmanJS)
[![GitHub license](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)](https://github.com/firmanJS/express-template/blob/master/LICENSE)
[![GitHub release](https://img.shields.io/github/release/firmanjs/express-template.svg)](https://github.com/firmanJS/express-template/releases)
[![Github all releases](https://img.shields.io/github/downloads/firmanjs/express-template/total.svg)](https://github.com/firmanJS/express-template/releases)
[![GitHub issues](https://img.shields.io/github/issues/firmanjs/express-template.svg)](https://github.com/firmanJS/express-template/issues/)
[![GitHub pull-requests](https://img.shields.io/github/issues-pr/firmanjs/express-template.svg)](https://github.com/firmanJS/express-template/pulls/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

## How To use
you must click the button use this template
- **using template** - create name of your repository
- **rename link readme** - change link repo default `github/firmanJS/express-template` to your repo
- **codeclimate** - you must integrate repo to codeclimate don't forget set your repo is public for integrated and in github repo settings create secret key with name `CC_TEST_REPORTER_ID` and value from code climate `REPORTER ID` in [https://codeclimate.com/](https://codeclimate.com/)

## Core Stack
- **Node.js** - [http://nodejs.org/](http://nodejs.org/)
- **Express** - [http://expressjs.com/](http://expressjs.com/)
- **nodemon** - [https://www.npmjs.com/package/nodemon](https://www.npmjs.com/package/nodemon)
- **pm2** - [https://www.npmjs.com/package/pm2](https://www.npmjs.com/package/pm2)

## Feature
1. error handling
1. database structure folder
1. testing with jest
1. coverage use jest
1. with docker example
1. validiation, use express-valdator and joi
1. pagination example
1. custom message api response
1. eslint airbnb base

## Unit testing
- **jestjs** - [https://jestjs.io/](https://jestjs.io/)

## How To run

### copy environment variable

```sh
cp .env-sample .env
```

### run manualy

* via yarn or npm :

```sh
# install package
npm install or yarn install

#  running app
npm run dev or yarn dev

# running unit tetsing
npm run test or yarn test
```

* via make :

```sh
# start aplication with docker
make docker-start 

# stop docker container
make docker-stop 

# remove docker container
make docker-down 
```

### fill in the copied environment earlier

```sh
APP_PORT=2000
TZ=Asia/Jakarta
MONGO_SERVICE=# uri mongodb
AUTH_SOURCE= #auth service
SECRET_KEY= #jwt secret key here
```

### run with docker-compose

```sh
docker-compose up --build
```

### or run with background process

```sh
docker-compose up --build -d
```
### execution npm with container docker
```sh
# install package
docker-compose exec boillerplate npm install

# running unit testing
docker-compose exec boillerplate npm run test
```

## Documentation API 
using swagger check in folder static

## Project Structure
```
.
├── api/              * all api file here
├── config/           * all configuration file here
|   └── db.js         * configuration database
├── database/         * all models schema file here
|   └── models        * all models file
|   └── migrations    * all migrations file
|   └── seeders       * all seeders file
├── middleware/       * all middleware file here, for check before next to api
├── routes/           * all file route here
|   └── index.js      * register all route
├── static/           * all configuration swagger
|   └── path          * custom your path api
|   └── schema        * custom schema body
├── test/             * all test file here
|   └── index.js      * test apps
├── utils/            * all utils file here

```

## Code Style Guides
* Guideline:
  * Use camelCase for variable name, naming function, load module or other functions
  * Use UpperCase for Constant Variable
  * Use PascalCase for class name, models, api, route, load module model
  * Use snake_case for file name as variable
  * Function name use Verb
  * Variable name use Noun
