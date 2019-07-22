# 🔥 Bucket-List-API 🔥

## Backend URL : https://bucket-list-webpt6.herokuapp.com/

## Table of Contents

- [Summary Table of API Endpoints](#summary-table-of-api-endpoints)

  - [Register-user](#register-user)
  - [Login-user](#login-user)
  - [Users](#users)
  - [Buckets](#buckets)
      - [Item](#item)
      - [Posts](#posts)
      - [Images](#images)

### Summary Table of API Endpoints

| Type   | Endpoints                      | Description                          | Access  |
| ------ | ------------------------------ | ------------------------------------ | ------- |
| POST   | /api/register                  | Register User                        | Public  |
| POST   | /api/login                     | Login user                           | Public  |
| GET    | /api/users                     | Get all users                        | Private |
| GET    | /api/user                      | Get current user                     | Private |
| GET    | /api/user/:id                  | Get user by id                       | Private |
| GET    | /api/user/:id/items            | Get all users bucket list items      | Private |
| GET    | /api/user/friends              | Get all users friends                | Private |
| POST   | /user/friends/:friend_id       | Add a friend to your friends list    | Private |
| DELETE | /user/friends/:friend_id       | Remove a friend to your friends list | Private |
| GET    | /api/item/:id                  | get item by id                       | Private |
| POST   | /api/item                      | post item                            | Private |
| PUT    | /api/item/:id                  | Update item                          | Private |
| DELETE | /api/item/:id                  | delete item                          | Private |
| GET    | /api/item/:item_id/posts       | Get array of posts by item_id        | Private |
| GET    | /api/item/post/:id             | get post by id                       | Private |
| PUT    | /api/item/post/:id             | Update post                          | Private |
| DELETE | /api/item/post/:id             | Delete post                          | Private |
| POST   | /api/item/post                 | Add a post                           | Private |
| GET    | /api/item/post/:post_id/images | get images                           | Private |
| GET    | /api/item/post/images/:id      | get single image by id               | Private |
| POST   | /api/item/post/image           | Add image                            | Private |
| PUT    | /api/item/post/image/:id       | Update image                         | Private |
| DELETE | /api/item/post/image/:id       | delete image                         | Private |


### If Access is Private you need to pass token as header (Authorization...)

## Register-user

`Register example`

### Endpoint: https://bucket-list-webpt6.herokuapp.com/api/register

```
{
	"name": "john12",                       required
	"email": "john12@yahoo.com",            required
	"password": "john"                      required
}

```

#### Register user: 201 response ✅

```
{
    "message": "User created",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiZW1haWwiOiJqb2huMTJAeWFob28uY29tIiwicGFzc3dvcmQiOiIkMmEkMDgkcjV1OUQzaWdqUWVDeWVudFRRYWNwdXljT0tLQVdNb2IwcDBLdExCWGpTYmVjZ1BCVXg3ZmEiLCJpYXQiOjE1NjM4MjQ3ODEsImV4cCI6MTU2NjQxNjc4MX0.6tliWkNzyr5qgOuWtwGh37AYGza_n-w0eglAgBPWutI"
}
```

#### Register user: 400 Bad Request ❗️
- If there's no email ,password 
```
{
    "message": "Missing user information"
}
```

#### Register user: 500 Internal Server Errror ❗️

```
{
    "message": "insert into `users` (`email`, `location`, `password`, `username`) values ('john@yahoo.com', 'San Diego', 'miranda', 'john27') - SQLITE_CONSTRAINT: UNIQUE constraint failed: users.username"
}
```

## Login-user

### Endpoint: https://bucket-list-webpt6.herokuapp.com/api/login

`Login example`


```
{
	"email": "john12@yahoo.com",
	"password": "john"
}

```

#### Login user: 200 response ✅

```
{
    "message": "Logged in",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiZW1haWwiOiJqb2huMTJAeWFob28uY29tIiwicGFzc3dvcmQiOiIkMmEkMDgkcjV1OUQzaWdqUWVDeWVudFRRYWNwdXljT0tLQVdNb2IwcDBLdExCWGpTYmVjZ1BCVXg3ZmEiLCJpYXQiOjE1NjM4MjYwODcsImV4cCI6MTU2NjQxODA4N30.NqLeO1jGqRczW_2ijStLBSpiLxo0ulWGYhSDtdbct_U"
}
```

#### Login user: 400 Bad Request ❗️

```
{
    "message": "Login info missing"
}
```

#### Login user: 401 Internal Server Errror ❗️

```
{
    "message": "Invalid credentials, Unauthorized"
}
```

## Users
- These are examples of what endpoints you can do with `/api/user`
- User must be Logged In
- Headers Authorization required




### Endpoint: https://bucket-list-webpt6.herokuapp.com/api/user

- You will need to make a `GET` request to this endpoint
- Get current User logged in

```
{
    "user": {
        "id": 3,
        "name": "john12",
        "email": "john12@yahoo.com",
        "created": "2019-07-22T19:46:21.129Z"
    }
}

```
### Endpoint: https://bucket-list-webpt6.herokuapp.com/api/users

- You will need to make a `GET` request to this endpoint
- Get All users

```
{
    "users": [
        {
            "id": 1,
            "name": "Test User",
            "email": "test@test.com",
            "created": "2019-07-22T19:45:57.819Z"
        },
        {
            "id": 2,
            "name": "Test User 2",
            "email": "test2@test.com",
            "created": "2019-07-22T19:45:57.819Z"
        },
        {
            "id": 3,
            "name": "john12",
            "email": "john12@yahoo.com",
            "created": "2019-07-22T19:46:21.129Z"
        }
    ]
}

```
### Endpoint: https://bucket-list-webpt6.herokuapp.com/api/user/2

- Get user by id
- You will need to make a `GET` request to this endpoint
- And add id to @params
```
{
    "user": {
        "id": 2,
        "name": "Test User 2",
        "email": "test2@test.com",
        "created": "2019-07-22T19:45:57.819Z"
    }
}

```
### Endpoint: https://bucket-list-webpt6.herokuapp.com/api/user/1/items

- You will need to make a `GET` request to this endpoint
- Need user_id to @params
```
{
    "items": [
        {
            "id": 1,
            "user_id": 1,
            "completed": false,
            "description": "Drive a Ferrari",
            "created": "2019-07-22T19:46:02.851Z"
        },
        {
            "id": 2,
            "user_id": 1,
            "completed": false,
            "description": "Go to Hawaii",
            "created": "2019-07-22T19:46:02.851Z"
        },
        {
            "id": 3,
            "user_id": 1,
            "completed": false,
            "description": "Eat a pizza",
            "created": "2019-07-22T19:46:02.851Z"
        }
    ]
}

```


## Buckets 
### Item
- These are examples of what endpoints you can do with `/api/item`
- User must be Logged In
- Headers Authorization required


### Endpoint: https://bucket-list-webpt6.herokuapp.com/api/item/2
- Get item by id
```
{
    "item": {
        "id": 2,
        "user_id": 1,
        "completed": false,
        "description": "Go to Hawaii",
        "created": "2019-07-22T19:46:02.851Z"
    }
}

```
### Endpoint: https://bucket-list-webpt6.herokuapp.com/api/item/
- Post Bucket item
- Payload example below
```
{
    "completed": false,
    "description": "Go to Hawaii",
	  "user_id":1
}

```
### Endpoint: https://bucket-list-webpt6.herokuapp.com/api/item/17
- Update item 
- pass item id in the @params
- type of request `PUT`


### Endpoint: https://bucket-list-webpt6.herokuapp.com/api/item/17
- DELETING an Item 
- pass item id in the @params
- type of request `DELETE`


### Posts

### Endpoint: https://bucket-list-webpt6.herokuapp.com/api/item/post/17
- Getting post by id
- type of request `GET`
- 200 success response 💚
<!-- 
  ```
  {
    "post": {
        "id": 17,
        "item_id": 1,
        "message": "I did not drive one",
        "created": "2019-07-22T21:11:16.983Z"
    }
}
``` -->


### Endpoint: https://bucket-list-webpt6.herokuapp.com/api/item/post
- Add a post
- type of request `POST`
- payload example below
```
{
    "item_id": 1,
    "message": "I did not drive one"
}
```

### Images
- CRUD

### Endpoint: https://bucket-list-webpt6.herokuapp.com/api/item/post/:post_id/images
- you need to pass post_id as params
- type of request `GET`
- get all images from that's equal to post_id


### Endpoint: https://bucket-list-webpt6.herokuapp.com/api/item/post/image
- Add image
- type of request `POST`
- payload example below



#### Documented by:

- John Miranda : Team-Lead / Project-Manager --> you can dm me directly if you have any question `Happy Coding🧙🧙🧙`
