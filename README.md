# Social Media Api

## Deployment

deployed link: https://social-media-api-l3uq.onrender.com



## Installation

1. Clone the repository: git clone https://github.com/VishalKNigam/Social-media-api
2. Install dependencies:  npm install
3. Set up environment variables:
Create a `.env` file in the root directory and add the following variables:
PORT=8080
MONGO_URL=your_database_url
secretKey=your_secret_key
refreshSecretKey=your_refrshsecret_key



## Usage

1. Start the server: npm run start
2. Access the API endpoints: Base URL: http://localhost:8080
3. Available endpoints:
- `/user/register` (POST): Register a new user.
- `/user/login` (POST): Login with username and password.
- `/post/create` (POST): Create a new post.
- `/post/` (GET): Retrieve all posts.
- `/relation/follow`(POST): To Follow.
- `/relation/unfollow`(POST): To Unfollow.

### Register User
POST /user/register
{
"username": "user",
"email": "user@.com",
"password": "password"
}


### Login
POST /user/login
{
"email": "user@.com",
"password": "password"
}


**Thank You!!**



