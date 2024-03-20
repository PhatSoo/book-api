# Book Management API
**HOST:** _host:port/api/v1_

## 1. Login route:
   - Endpoint: `/login`
   - Method: `POST`

### Description: _Route for user login._
   - ### Parameters:
     - `email`: User email.
     - `password`: User password.

> Request Body Example:
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

  - ### Response:
> Upon successful authentication, the route returns the following JSON object:
```json
{
  "message": "Login successfully!",
  "status": 200,
  "metadata": {
    "userId": "1234567890",
    "accessToken": "your_access_token_here"
  }
}
```
  - ### Errors:
    - `400 Bad request`: If missing parameters or login failed.

## 2. Logout route:
   - Endpoint: `/logout`
   - Method: `POST`

### Description: _Route to invalidate user's access token and logout._

   - ### Request Headers:
     - `Authorization`: Bearer token containing the access token.
> Request Body Example:
```json
{
  "accessToken": "your_access_token_here",
  "userId": "1234567890"
}
```

   - ### Response:
> Upon successful logout, the route returns a success message:
```json
{
  "message": "Logout successful",
  "status": 200,
  "metadata": null
}
```

  - ### Errors:
    - `401 Unauthorized`: If the access token is missing or invalid.
