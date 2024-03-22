# Book Management API

**HOST:** _host:port/api/v1_

## 1. Login route:

-   Endpoint: `/login`
-   Method: `POST`

### Description: _Route for user login._

-   ### Permissions: `No permission`

-   ### Request body:
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

-   ### Permissions: `No permission`

-   ### Request Headers:

    -   `Authorization`: containing access token.

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

-   ### Permissions: `No permission`

-   ### Request Headers:

    -   `x-rf-token`: containing refresh token.

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

## 4. Books route: `/book`

-   ### 4.1. Endpoint: `/book`

    -   Method: `GET`
    -   Permissions: `No permission`
    -   Description: _List all books_

-   ### Response:
    > Upon successful, the route returns a success message:

```json
{
    "message": "List books successfully!",
    "status": 200,
    "metadata": {
        "data": [
            {
                "title": "Book title 1",
                "authorId": 1,
                "publishedDate": "21/03/2023"
            },
            {
                "title": "Book title 2",
                "authorId": 2,
                "publishedDate": "21/03/2023"
            }
        ],
        "limit": 10,
        "page": 1,
        "total": 20
    }
}
```

-   ### 4.2. Endpoint: `/book/:id`

    -   Method: `GET`
    -   Request params: `:id` book's id
    -   Permissions: `No permission`
    -   Description: _Get book details_

-   ### Response:
    > Upon successful, the route returns a success message:

```json
{
    "message": "Get details of book successfully!",
    "status": 200,
    "metadata": {
        "data": {
            "title": "Book title",
            "authorId": 1,
            "publishedDate": "21/03/2023"
        }
    }
}
```

-   ### 4.3. Endpoint: `/book`

    -   Method: `POST`
    -   Permissions: `['ADMIN', 'AUTHOR']`
    -   Description: _Create a new book_
    -   Request body: book's info

> Request body example:

```json
{
    "title": "Book title",
    "authorId": 1,
    "publishedDate": "21/03/2023"
}
```

-   ### Response:
    > Upon successful, the route returns a success message:

```json
{
    "message": "Create a new book successfully!",
    "status": 200,
    "metadata": {
        "data": {
            "id": 1,
            "title": "Book title",
            "authorId": 1,
            "publishedDate": "21/03/2023"
        }
    }
}
```

-   ### 4.4. Endpoint: `/book/:id`

    -   Method: `PATCH`
    -   Permissions: `['ADMIN', 'AUTHOR']`
    -   Description: _Updade book's info_
    -   Request body: info that needed to be changed

> Request body example:

```json
{
    "title": "Book title changes"
}
```

-   ### Response:
    > Upon successful, the route returns a success message:

```json
{
    "message": "Update book info successfully!",
    "status": 200,
    "metadata": {
        "data": {
            "id": 1,
            "title": "Book title changes",
            "authorId": 1,
            "publishedDate": "21/03/2023"
        }
    }
}
```

-   ### 4.5. Endpoint: `/book/:id`

    -   Method: `DELETE`
    -   Permissions: `['ADMIN', 'AUTHOR']`
    -   Description: _Delete an exist book_
    -   Request params: `:id` book's id that needed to be deleted

-   ### Response:
    > Upon successful, the route returns a success message:

```json
{
    "message": "Delete book successfully!",
    "status": 200,
    "metadata": null
}
```
