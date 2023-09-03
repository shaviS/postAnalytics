## Assumptions
Items discussed in the call and assigments were different.

This is basic implementation of two API's without any caching implemntation for performance, as that would be discussed in followup call.



## Description

Its a nestJs app. 

Node version used - v18.15.0

NPM version - 9.5.0

nest version - 9.3.0


## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## documentation

Creating post - 
```
curl --location --request POST 'http://localhost:3000/api/v1/posts/' \
--header 'Content-Type: application/json' \
--data-raw '{
    "id" : 5,
    "text" : "hello world i t t"
}'
```


Get analytics data - 

```
curl --location --request GET 'http://localhost:3000/api/v1/posts/1/analytics'
```





