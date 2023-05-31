###Create a user
POST /user
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

###Create a post
POST /post
{
"name": "Objet à échanger",
"description": "Description de l'objet à échanger",
"pictures": ["url1.jpg", "url2.jpg"],
"opened": true,
"userId": "123456789",
"offersId": []
}

###Create an offer on a post
POST /offer
{
"name": "Offre d'échange",
"description": "Description de l'offre d'échange",
"pictures": ["url1.jpg", "url2.jpg"],
"opened": true,
"userId": 123456789,
"postId": "1234567890"
}

###Login a user
/login
{
"email": "johndoe@example.com",
"password": "motdepasse123",
}

###Get a user by id
GET /user/id

###Get a post by id
GET /post/id

###Delete a post by id
DELETE /post/id

###Delete an offer by id
DELETE /offer/id

###Get all posts
GET /posts

###Get all users
GET /users
