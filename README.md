
# Blackjack Anywhere API
API built to support the Blackjack Anywhere - React App.

Play blackjack anywhere. Click to go to the [Live App](https://blackjack-anywhere.goose39dev.now.sh/)

## API Documentation
The api is primarily used for authentication purposes. Namely user login and registration. 

### Endpoints

base url `https://sleepy-gorge-26141.herokuapp.com/api`

- /users <br />
user endpoint supports creation of new users and thus only supports POST requests 

`fetch(https://blackjack-anywhere.goose39dev.now.sh/api/users, {`<br />
&nbsp;` method: 'POST',`<br />
&nbsp;&nbsp;` headers: {`<br />
&nbsp;&nbsp;&nbsp;`'content-type': 'application/json',`<br />
&nbsp;&nbsp;`},`<br />
&nbsp;&nbsp;` body: JSON.stringify({`  <br />
&nbsp;&nbsp;&nbsp;        `full_name: new_full_name, `<br />
&nbsp;&nbsp;&nbsp;        `nick_name: new_name.value, `<br />
&nbsp;&nbsp;&nbsp;        `user_name: new_name.value,` <br />
&nbsp;&nbsp;&nbsp;        `password: new_password.value`<br />
&nbsp;&nbsp; `}),`<br />
    `})`<br />

All key value pairs are required in the body to pass validation. In addition password must also contain one uppercase, one lowercase, one number and a special character, with a total password length > 8 characters

- /balance <br />
balance endpoint supports retrieval of user balances (GET), creation of initial user balance (POST) and updating of user balances (PATCH)<br />

GET
<br />
 
`fetch(https://blackjack-anywhere.goose39dev.now.sh/api/balance, {`<br />
&nbsp;` method: 'GET',`<br />
&nbsp;&nbsp;` headers: {`<br />
&nbsp;&nbsp;&nbsp;`'content-type': 'application/json',`<br />
&nbsp;&nbsp;`},`<br />
&nbsp;&nbsp;` body: JSON.stringify({`  <br />
&nbsp;&nbsp;&nbsp;        `user_name: new_user_name,` <br />
&nbsp;&nbsp; `}),`<br />
    `})`<br />
<br />
`user_name` must be a valid user_name that has a previously registered account <br />
NOTE: Only logged in users with valid auth-token can access this endpoint<br />
<br />
POST<br />
<br />
 
`fetch(https://blackjack-anywhere.goose39dev.now.sh/api/balance, {`<br />
&nbsp;` method: 'POST',`<br />
&nbsp;&nbsp;` headers: {`<br />
&nbsp;&nbsp;&nbsp;`'content-type': 'application/json',`<br />
&nbsp;&nbsp;`},`<br />
&nbsp;&nbsp;` body: JSON.stringify({`  <br />
&nbsp;&nbsp;&nbsp;        `user_name: user_name,` <br />
&nbsp;&nbsp; `}),`<br />
    `})`<br />

    
`user_name` must be a valid user_name that has a previously registered account<br />
<br />

PATCH<br />
<br />
 
`fetch(https://blackjack-anywhere.goose39dev.now.sh/api/balance, {`<br />
&nbsp;` method: 'PATCH',`<br />
&nbsp;&nbsp;` headers: {`<br />
&nbsp;&nbsp;&nbsp;`'content-type': 'application/json',`<br />
&nbsp;&nbsp;`},`<br />
&nbsp;&nbsp;` body: JSON.stringify({`  <br />
&nbsp;&nbsp;&nbsp;        `user_name: user_name,` <br />
&nbsp;&nbsp;&nbsp;        `balance: new_balance`<br />
&nbsp;&nbsp; `}),`<br />
    `})`<br />

    
Must be a vaild/registered `user_name` <br />
NOTE: Only logged in users with valid auth-token can access this endpoint<br />
<br />
## Technology
Built on NodeJS using Express (v4.17.1) web framework. The database selected for this project was PostgreSQL. 

The following supporting Node packages were also used:
- bcryptjs v2.4.3
- cors v2.8.5
- dotenv v8.2.0
- helmet v3.21.2
- jsonwebtoken v8.5.1
- knex v0.20.8
- morgan v1.9.1
- pg v7.18.1
- xss v1.0.6
