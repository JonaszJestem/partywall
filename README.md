#PartyWall

## Running app
`docker-compose up` in the root folder of application

## Basic information
All party endpoints secured with JWT authentication. Anonymous user can only register and login using
`/users/register` and
`/users/login` endpoints.

When user logs in, he receives access_token which should be attached to every request as header:
`Authorization: Bearer <access_token>`

##Endpoints 
- GET `/party`

- GET `/drinks`
- DELETE `/drinks/:id`
- POST `/drinks/`

Where post body should look like: {
                                  	"name": "drink",
                                  	"volume": 1,
                                  	"price": 1,
                                  	"quantity": 1
                                  }

- GET `/food`
- DELETE `/food/:id`
- POST `/food/`

Where post body should look like: {
                                  	"name": "food",
                                  	"description": 123,
                                  	"weight": 12345,
                                  	"price": 1,
                                  	"quantity": 1
                                  }

### Not implemented - lack of time
- JWT secret is plaintext hardcoded
- DTO Validation is simplified to IsNotEmpty on all fields
- No e2e tests, only few unit tests just to prove I can write them
- No database configuration accessed without password
- No configuration module at all
- Some messy commits and git workflow
- No https

Some of the not implemented features are one-liners in Nest.js and are provided out of the box, but I will surely exceed the 4h time limit.
### Implemented
Everything that was included in specification. Separate, not dependent modules for food and drinks. Docker environment. 
