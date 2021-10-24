<h2 align="center">Automation</h2>

## Overview
Volvocars has saved more than a million lives with its three-point seat belt and we are on a mission  to save a million more lives, starting with this campaign. As the test lead for the campaign  team and I have setup a set of automated test suite using webdriverio to initiate the automation phase as a part of this assignment.  

Tragetted site :  https://www.volvocars.com/intl/v/car-safety/a-million-more

## Highlights

- [WebDriver.io](https://webdriver.io/) is used as a primary tool for automation.
- Solution is setup with its Dockerized image.
- Enabled with parallel execution of tests.  
- Visual regression testing has been enabled via [WDIO - Image comparison service](https://webdriver.io/docs/wdio-image-comparison-service/).
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
  
  ## Note
  Use compatable google chrome & webdriver versions to execute the test automation. For this project, I have relied upon google chrome 94.x and chrome driver 94.x  for this project. 

