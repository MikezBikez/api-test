# API test

## Getting started - start the server

- Clone this repo
- `npm install`
- `npm run server`

You should see something like this:

```
Loading db.json
  Done

  Resources
  http://localhost:3000/customers
  http://localhost:3000/comments
  http://localhost:3000/profile

  Home
  http://localhost:3000

  Type s + enter at any time to create a snapshot of the database
```

At this point you have a simple API server running, now let's move on to running Postman against it

## Getting started - install Postman app

https://www.postman.com/downloads/

Run up Postman

File -> Import -> `api-test.postman_collection.json`

You should now have a collection called `api-test`. Expand it, and you will see an entry `Get /customers' - Click on this, and then click the "Send" button to send an API request and see the response. The "Test" tab will show you the results of the test

## Writing postman tests

https://learning.postman.com/docs/postman/scripts/test-scripts/
