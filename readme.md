Install MongoDB on MacOS following [this page](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-os-x/
)

Start MongoDB, and use mongosh to create the database with use your-database-name

Put your database url in a .env file at the base of the project

```markdown
DB_URL=mongodb://127.0.0.1:27017/your-database-name
```

### Create a user

<details>
<summary>POST /user</summary>

```json
{
  "nickname": "johnny123",
  "firstname": "John",
  "lastname": "Doe",
  "email": "johndoe@example.com",
  "password": "motdepasse123",
  "age": 25,
  "postalcode": 12345,
  "city": "Paris",
  "phonenumber": 123456789
}
```

</details>

### Create a post

<details>
<summary>
POST /post
</summary>

```json
{
  "name": "Objet à échanger",
  "description": "Description de l'objet à échanger",
  "pictures": ["url1.jpg", "url2.jpg"],
  "opened": true,
  "userId": "123456789",
  "offersId": []
}
```

</details>

### Create an offer on a post

<details>
<summary>
POST /offer
</summary>

```json
{
  "name": "Offre d'échange",
  "description": "Description de l'offre d'échange",
  "pictures": ["url1.jpg", "url2.jpg"],
  "opened": true,
  "userId": 123456789,
  "postId": "1234567890"
}
```

</details>

### Login a user

<details>
<summary>
/login
</summary>

```json
{
  "email": "johndoe@example.com",
  "password": "motdepasse123"
}
```

</details>

### Get a user by id

GET /user/id

### Get a post by id

GET /post/id

### Delete a post by id

DELETE /post/id

### Delete an offer by id

DELETE /offer/id

### Get all posts

GET /posts

### Get all users

GET /users
