<h2 align="center">Automation</h2>

## Overview
Volvocars has saved more than a million lives with its three-point seat belt and we are on a mission  to save a million more lives, starting with this campaign. As the test lead for the campaign  team and I have setup a set of automated test suite using webdriverio to initiate the automation phase as a part of this assignment.  


## Highlights

- Setup the solution with its Dockerized image.
- Enabled with parallel execution of tests.  
- Reporting of the results via [allure](http://allure.qatools.ru/).
- Documentation to reproduce th execution.


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
