# Project Mesa-API

## What's the project objective ?

Test the developer skills as a senior developer. The developer will create a backend project following the REST pattern in deep, using his best pattern to create a very organized and clean project focus on best files division, clean and high level code readability.

## Which are the tecnologies used ?

* Backend: [Node 14](https://nodejs.org/en/)
* Package manager: [NPM](https://www.npmjs.com/)
* Programming Languages: [TypeScript](https://www.typescriptlang.org/) and [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
* APIs: [Express](https://expressjs.com/pt-br/)
* ORM: [TypeORM](https://typeorm.io/#/)
* Tests: [Jest](https://jestjs.io/pt-BR/)
* environment variables: [.env](https://www.npmjs.com/package/dotenv)
* API documentation: [Swagger](https://swagger.io/)

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
    TYPEORM_ENTITIES = build/DB/Entities/*.js (PATH OF PROJECT DB ENTITIES)
    SECRET = "SECRET KEY FOR CRIPTO" (YOU CAN GENERATE THIS USING node cripto library)
6. Run command: ```npm run start```

## How is the project architecture ?

We have separete the projects files in some folders:

* **src**: Here we have all system scrips and folders to run it:
    * **Controllers**: APIs controllers.
    * **Services**: Scripts that will run after que Request passes in controllers.
    * **DB**: Here we have the script to start our DB and a folder where you can find all tables.
    * **Middlewares**: Here we all all project's middlewares. Ex: auth middleware.
    * **Routes**: Here we create the API routes, passing the route's name and it's controller.
    * **api-spec.json**: File used by swagger to generate our API documentation.
    * **ormconfig.json**: File to set typeORM config.
* **tests**: Here we have all tests files.

The project uses ```Express.js```
## Where can I find the APIs documentation ?

This project uses swagger for document endpoints click here to see the documentation: ${YOUR_HOST}/api/docs. Ex: http:localhost:3000/api/docs

## What is the authentication strategy?

The system uses JWT as auth strategy, generating a token using the SECRET in ```.env```. We set the token to be valid for 1 hour

## How can I run the tests files ?

* We choose JEST as our test engine, so you can run the command: ```npm run test``` to run all tests files.
* You can see the coverage reports by running the following command: ```npm run test:coverage```