# 🔥 Bucket-List-API 🔥

## Backend URL : https://bucket-list-webpt6.herokuapp.com/

## Table of Contents

- [Summary Table of API Endpoints](#summary-table-of-api-endpoints)

  - [Register-user](#register-user)
  - [Login-user](#login-user)
  - [Posts](#posts)

### Summary Table of API Endpoints

| Type | Endpoints     | Description   | Access |
| ---- | ------------- | ------------- | ------ |
| POST | /api/register | Register User | Public |
| POST | /api/login    | Login user    | Public |


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
    "id": 1,
    "username": "john miranda",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoxMiwidXNlcm5hbWUiOiJqb2huIG1pcmFuZGEiLCJpYXQiOjE1NjM3NzA5MjgsImV4cCI6MTU2Mzg1NzMyOH0.6NS1ABm8VY0iu0ltLPjpGNlIxWQWaU3-YLnA0ll9XQU"

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

### Endpoint: https://chef-portfolio-webtp6.herokuapp.com/api/auth/login

`Login example`

```
{
    "username": "john miranda12",
    "password": "password"
}

```

#### Login user: 200 response ✅

```
{
    "message": "john miranda12 is logged in.",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoxNCwidXNlcm5hbWUiOiJqb2huIG1pcmFuZGExMiIsImlhdCI6MTU2Mzc3MTM2MiwiZXhwIjoxNTYzODU3NzYyfQ.Vp1_TX_iBL9YPQ0kEPa8dzdQFcdXg8snDfbYND9RF8k"
}
```

#### Login user: 400 Bad Request ❗️

```
{
    "message": "Username field is required"
}
```

#### Login user: 401 Internal Server Errror ❗️

```
{
    "message": "Invalid credentials, Unauthorized"
}
```

## Posts

### Endpoint: https://chef-portfolio-webtp6.herokuapp.com/api/posts/all

- You will need to make a `GET` request to this endpoint
- This will return all the posts
- @Access Public , you don't need to Log in for this endpoint

### Endpoint: https://chef-portfolio-webtp6.herokuapp.com/api/posts

- User must be Logged In
- Headers Authorization required
- You will need to make a `GET` request to this endpoint

```
[
    {
        "id": 1,
        "chef_name": "Erica",
        "recipe_title": "Pizza",
        "item_photo": "https://images.unsplash.com/photo-1528137871618-79d2761e3fd5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        "chef_location": "Boston, Massachusetts",
        "item_ingredients": "Pizza Dough, Pizza Sauce, Cheese, Basil",
        "user_id": 1
    },
]

```

### Endpoint: https://chef-portfolio-webtp6.herokuapp.com/api/posts/5

- You will need to make a `GET` request to this endpoint
- fetch Posts by id
- Add Posts Id on the end of the URL just like the endpoint above

```
{
    "id": 5,
    "chef_name": "Mitsuki",
    "recipe_title": "Soup",
    "item_photo": "https://images.unsplash.com/photo-1547592166-23ac45744acd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80",
    "chef_location": "Austin, TX",
    "item_ingredients": "Water, Tomatoes, Cream, Basil",
    "user_id": 2
}

```

### Endpoint: https://chef-portfolio-webtp6.herokuapp.com/api/posts/

- Creating new post
- You will need to make a `POST` request to this endpoint
- Payload example below
- Headers Authorization required

```
{
    "chef_name": "Mitsuki",
    "recipe_title": "Soup",
    "item_photo": "https://images.unsplash.com/photo-1547592166-23ac45744acd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80",
    "chef_location": "Austin, TX",
    "item_ingredients": "Water, Tomatoes, Cream, Basil",
    "user_id": 2
}

```

#### Documented by:

- John Miranda : Team-Lead / Project-Manager --> you can dm me directly if you have any question `Happy Coding🧙🧙🧙`
