# Project Mesa-API

## What's the project objective ?

Test the developer skills as a senior developer. The developer will create a backend project following the REST pattern in deep, using his best pattern to create a very organized and clean project focus on best files division, clean and high level code readability.

## What's the Project functionalities ?

* Add Users to system.
* Authenticate users that were created using JWT authentication.
* Users can add local stores, restaurants, shoppings, any commerce that he wants.
* Users can see all locals that were add by him or others users.
* The commerce added can be rated by users.
* The commerce added can be commented by users.
* All users can see the locals crate and comments made by others users.
* The system can change user's email and password when the user requests.

## What's the Project requirements to run ?

* NodeJS version 12+
* NPM 6+ or YARN,
* Any DB suported by TypeORM (MySQL, MariaDB, Postgres, CockroachDB, SQLite, Microsoft SQL Server, Oracle, etc... )

## How to install and run the project ?

1. Clone the repository from GIT to your Desktop
2. Open the downloaded folder on your terminal
3. Run the command: ```npm i```
4. Create a ```.env``` file in the root of project folder
5. ```
    PORT = ${API PORT}
    TYPEORM_CONNECTION = "DB YOU WANT TO USE"
    TYPEORM_HOST = "YOUR DB HOST"
    TYPEORM_USERNAME = "YOUR DB USERNAME
    TYPEORM_PASSWORD = "YOUR DB PASSWORD
    TYPEORM_DATABASE = "YOUR DATABASE NAME"
    TYPEORM_PORT = "YOUR DB PORT"
    TYPEORM_SYNCHRONIZE = "SYNCRONIZE DB? (TRUE OR FALSE)"
    TYPEORM_LOGGING = "LOGGING DB? (TRUE OR FALSE)"
    TYPEORM_ENTITIES = DB/Entities/*.js (PATH OF PROJECT DB ENTITIES)
    SECRET = "SECRET KEY FOR CRIPTO" (YOU CAN GENERATE THIS USING node cripto library)
6. Run command: ```npm run start```

## Where can I find the APIs documentation ?

This project uses swagger for document endpoints click here to see the documentation: ${YOUR_HOST}/api/docs
