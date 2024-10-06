# Techwondoe Assignment

## Overview

Techwondoe Assignment is a Node.js backend server application built with Express and TypeScript. It includes RESTful APIs to handle various operations for the assigned project. Docker is used for containerization, and the codebase follows a consistent style using ESLint and Prettier.

## Features

- TypeScript support for type safety
- RESTful API built with Express
- JWT-based authentication with Auth0 authorization server
- ESLint and Prettier for code quality and style consistency
- Docker containerization
- Postman collection for API documentation

## Prerequisites

- [Node.js](https://nodejs.org/en/) (v20 or higher)
- [Docker](https://www.docker.com/get-started)
- [PostgreSQL](https://www.postgresql.org/download/)
- [Auth0](https://auth0.com) for authentication (optional)

## 1. Clone the Repository

git clone https://github.com/Jefy7/techwondoe-assignment.git
cd techwondoe-assignment


## Installation

# Install, Configure & Run

Below mentioned are the steps to install, configure & run in your platform/distributions.

# Without Docker

 Note: It is assumed here that you have Postgres running in the background and that you have created the database.

# Install NPM dependencies.
npm install;

# Create and Edit your DotEnv file using any editor of your choice.
# Please Note: You should add all the configurations details
.env;

# Run the app with nodemon
npm run dev;

# Build the app
npm run build;

# Start the app
npm start

```bash
 # you should be able to see 
 
 info: {"message":"App Listening on Port 8080"} 

``` 

# With Docker

# Note: It is assumed here that you have Docker running in the background.

# Build the app in docker 
docker build -t techwondoe-assignment .

# Run the app in docker as a foreground process
docker run -p 8080:8080 techwondoe-assignment

# Run the app in docker as a background process
docker run -d -p 8080:8080 techwondoe-assignment


## Create a microservice with two API endpoints:
1. JWT token with two scopes (Read, Write)
2. JWT token with one scope

# API Routes:(Admin)
+--------+-------------------------+
  Method | URI
+--------+-------------------------+
  POST   | /api/v1/admin/company
  GET    | /api/v1/admin/company/:companyId
  GET    | /api/v1/admin/company?name=<name>
  POST   | /api/v1/admin/teams/:companyId
  GET    | /api/v1/admin/teams
+--------+-------------------------+

# API Routes:(Associate)
+--------+-------------------------+
  Method | URI
+--------+-------------------------+
  POST   | /api/v1/associate/company
  GET    | /api/v1/associate/company/:companyId
  GET    | /api/v1/associate/company?name=<name>
  POST   | /api/v1/associate/teams/:companyId
  GET    | /api/v1/associate/teams
+--------+-------------------------+
```


Thank you