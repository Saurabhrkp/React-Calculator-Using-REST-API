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

For Local development | All endpoints are POST route.

All route require APIKey in body as req.body.apiKey
All arithmetic operation routes require firstValue, secondValue in body as req.body.firstValue and req.body.secondValue
Delete By ID route requires id of operation to delete as req.body.id

For Adding numbers:
```http
http://localhost:5000/add
```

For Subtracting numbers:
```http
http://localhost:5000/subtract
```

For Multipying numbers:
```http
http://localhost:5000/multiply
```

For Dividing numbers:
```http
http://localhost:5000/divide
```

For Getting History:
```http
http://localhost:5000/history

```
For Getting Delete operation by ID:
```http
http://localhost:5000/deleteByID
```

---