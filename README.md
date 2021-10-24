<h2 align="center">Automation</h2>

## Overview
BookNow is an MVP program that could be used to manage bookings for a Dealership. The program is able to accept or reject bookings based on availabilities. Initially I have built the project using REST and utilized Swagger UI. Later, I have added GraphQL support as well. Thus I have included both the REST endpoints as well as  GraphQL endpoint in this repo with appropriate execution steps.

## Highlights

- The application is accessible by both [GraphQL](https://graphql.org/) and [REST](https://restfulapi.net/) endpoints.
- The application is also accessible via [Swagger UI](https://swagger.io/tools/swagger-ui/) Docs.

- Backend is developed by [Node Js](https://nodejs.org/en/download/).
- [LokiJS](https://github.com/techfort/LokiJS) is used as an in-memory database.
- [Prettier](https://prettier.io/) is used as a  code formatter.
- [Eslint](https://eslint.org/) is used for lint-check.
- [Mocha](https://mochajs.org/), [Chai](https://www.chaijs.com/), [Sinon](https://sinonjs.org/) are used for testing.

## Instructions to run

### 1. Clone the project
```bash
$ git clone https://github.com/sreenidhithallam/automation
```

```bash
$ cd automation
```

### 2. Install packages

```
$ npm install
```

### 3. Run the tests

```
$ npm run test
```

### 4. Generate the report

```
$ npm run report-generate
```

### 5. Open the allure report

```
$ npm run report-open
```

## Instruction to build docker container

```
$ docker build -t mytest -f Dockerfile .
```

##  Screenshots

  ### Fig 1 : Allure report
  ![Screenshot](https://github.com/sreenidhithallam/automation/blob/master/screenshots/allureReport_1.png)
  ![Screenshot](https://github.com/sreenidhithallam/automation/blob/master/screenshots/allureReport_2.png)
  
  ### Fig 2 : Screenshot during automated test run
  ![Screenshot](https://github.com/sreenidhithallam/automation/blob/master/screenshots/electric.png)
  
  
##  Future Improvements
1. Build a front end and integrate it with backend.
2. Add Logging Framework to log to the right log files with appropriate log level.
3. Connect to a real DB instead of in-memory DB.
4. Integrate security scans.
