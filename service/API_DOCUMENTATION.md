# Truth or Dare Web Application - REST API Documentation

## Overview
This document provides detailed information about the REST API endpoints for the "Truth or Dare" application. The API allows for retrieving and managing questions (Truth) and challenges (Dare).

## Base URL
The base URL for all endpoints is:
http://localhost:8080/api


If you are hosting the application on a different server, replace `localhost` with the server's IP address or domain name.

## API Endpoints

### 1. Retrieve All Truth Cards

- **Endpoint**: `GET /api/truths`
- **Description**: Retrieves a list of all "Truth" cards (questions).
- **Response Format**: JSON
- **Example Request**:
    ```
    GET http://localhost:8080/api/truths
    ```
- **Example Response**:
    ```json
    [
        {
            "id": 1,
            "question": "What is your biggest secret?"
        },
        {
            "id": 2,
            "question": "What would you change about yourself?"
        },
        {
            "id": 3,
            "question": "Who among the present people do you find most interesting?"
        }
    ]
    ```
- **HTTP Status Codes**:
    - `200 OK` - The request was successful and the list of questions is returned.
    - `500 Internal Server Error` - There was an issue retrieving the data.

### 2. Retrieve All Dare Cards

- **Endpoint**: `GET /api/dares`
- **Description**: Retrieves a list of all "Dare" cards (challenges).
- **Response Format**: JSON
- **Example Request**:
    ```
    GET http://localhost:8080/api/dares
    ```
- **Example Response**:
    ```json
    [
        {
            "id": 1,
            "challenge": "Eat a spoonful of mustard!"
        },
        {
            "id": 2,
            "challenge": "Dance without music for 1 minute."
        },
        {
            "id": 3,
            "challenge": "Hold a plank position for 30 seconds."
        }
    ]
    ```
- **HTTP Status Codes**:
    - `200 OK` - The request was successful and the list of challenges is returned.
    - `500 Internal Server Error` - There was an issue retrieving the data.


## Authentication (Planned)
Currently, the API does not require authentication, but this is a planned feature. Once implemented, you will need to include an authentication token in the headers of each request.
