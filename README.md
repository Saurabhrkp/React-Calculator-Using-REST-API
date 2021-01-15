# React-Calculator-Using-REST-API

React Calculator App using Node Server for REST API Calls

## Getting Started

Install Node.js form [Official Site](https://nodejs.org/en/download/).

Install [MySQL](https://www.mysql.com/) locally or Set [Remote MySQL](https://remotemysql.com/). And put MYSQL_HOST, MYSQL_USER, MYSQL_DATABASE, MYSQL_PASSWORD and MYSQL_PORT in `.env` file as example given in .`sample.env`

Create any Random string of big length of API Key and put it as AUTHENTICATION_KEY in `.env` file and copy same to `./react-client` folder to `.env` file as REACT_APP_API_KEY.

Git clone or Download the Zip and unzip it.

### Prerequisites

Install Dependencies by running

```bash
npm install
```

Then move to `./react-client` folder and install react dependencies by

```bash
npm install
```

## Running the programs

Navigate to folder of program

```bash
cd folder/

npm run dev
```
---

## REST API Endpoints


For Adding numbers:
```http
/add?apiKey=API_KEY&firstValue=NUMBER_1&secondValue=NUMBER_2
```

For Subtracting numbers:
```http
/subtract?apiKey=API_KEY&firstValue=NUMBER_1&secondValue=NUMBER_2
```

For Multipying numbers:
```http
/multiply?apiKey=API_KEY&firstValue=NUMBER_1&secondValue=NUMBER_2
```

For Dividing numbers:
```http
/divide?apiKey=API_KEY&firstValue=NUMBER_1&secondValue=NUMBER_2
```

For Getting History:
```http
/history?apiKey=API_KEY
```

---