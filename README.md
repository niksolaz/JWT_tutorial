# JWT_tutorial
Json Web Token tutorial

see https://scotch.io/tutorials/authenticate-a-node-js-api-with-json-web-tokens

Used Node NPM  and Express with Postman.

file structure:

app/
....models/
..........user.js
confing.js
package.json
server.js
-------------------------------------------

Create your package with:

npm init    

-------------------------------------------

Set package.json with:

{
	"name":"node-token-jwt"
	"main": "server.js"
}

---------------------------------------------

Install package :

$ npm install express body-parser morgan mongoose jsonwebtoken --save

- Express is the popular Node framework
- Mongoose is how we interact with our MongoDB database
- Morgan will log requests to the console so we can see what is happening
- Body-parser will let us get parameters from our POST requests
- JsonWebToken is how we create and verify our JSON Web Tokens

-----------------------------------------------