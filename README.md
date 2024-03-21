# Book Management API

**HOST:** _host:port/api/v1_

## 1. Login route:

-   Endpoint: `/login`
-   Method: `POST`

### Description: _Route for user login._

-   ### Parameters:
    -   `email`: User email.
    -   `password`: User password.

> Request Body Example:

```json
{
    "email": "user@example.com",
    "password": "password123"
}
```

-   ### Response:
    > Upon successful authentication, the route returns the following JSON object:

```json
{
    "message": "Login successfully!",
    "status": 200,
    "metadata": {
        "accessToken": "your_access_token_here",
        "refreshToken": "your_refresh_token_here"
    }
}
```

-   ### Errors:
    -   `400 Bad request`: If missing parameters or login failed.

## 2. Logout route:

-   Endpoint: `/logout`
-   Method: `POST`

### Description: _Route to invalidate user's access token and logout._

-   ### Request Headers:
         - `Authorization`: Bearer token containing the access token.
    > Request Body Example:

```json
{
    "authorization": "your_access_token_here"
}
```

-   ### Response:
    > Upon successful logout, the route returns a success message:

```json
{
    "message": "Logout successful",
    "status": 200,
    "metadata": null
}
```

-   ### Errors:
    -   `401 Unauthorized`: If the access token is missing or invalid.

## 3. Refresh token route:

-   Endpoint: `/refresh-token`
-   Method: `POST`

### Description: _Route to invalidate current refresh token and re-generate new accessToken & refreshToken._

-   ### Request Headers:
         - `Authorization`: Bearer token containing the refresh token.
    > Request Body Example:

```json
{
    "x-rf-token": "your_refresh_token_here"
}
```

-   ### Response:
    > Upon refresh-token successful, the route returns a success message:

```json
{
    "message": "Refresh Token successfully!",
    "status": 200,
    "metadata": {
        "accessToken": "your_access_token_here",
        "refreshToken": "your_refresh_token_here"
    }
}
```

-   ### Errors:
    -   `401 Unauthorized`: If the refresh token is missing or invalid.
