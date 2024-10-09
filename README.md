
## Library Management API

This is a Library Management API built with Node.js and Express that allows users to manage books, authors and operations in a library system.

Features

- Book Management: Add, update, delete, and view books.
- Author Management: Add, update, delete, and view authors.
- Validation: Input validation using `Joi`.
- Error Handling: Centralized error handling for API errors.
- Unified Response Structure: Consistent response format for all API endpoints.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
  - [Books](#books)
  - [Authors](#authors)
- [Request/Response Examples](#requestresponse-examples)
- [Middleware](#middleware)
- [Error Handling](#error-handling)
- [Dependencies](#dependencies)

## Installation

Prerequisites

Make sure you have the following installed:

- Node.js (v20 or higher)
- npm (Node package manager)

Steps

1. Clone the repository:

git clone https://github.com/Rundiva/library-api.git  

2. Install dependencies:
   npm i

3. Start the server
   npm run start
  
By default, the server will run on `http://localhost:5000`. You can change the port by setting the `PORT` environment variable.

## Usage

After setting up the server, you can interact with the API using tools like Postman, integrating it with a frontend application. 


## API Endpoints
Books

- `GET - /books` - Get a list of all books.
- `GET /books/:id` - Get details of a specific book by its ID.
- `POST /books` - Add a new book.
- `PUT /books/:id` - Update book details.
- `DELETE /books/:id` - Delete a book.
Authors
- `GET /authors` - Get a list of all authors.
- `GET /authors/:id` - Get details of a specific author.
- `POST /authors` - Add a new author.
- `PUT /authors/:id` - Update an author.
- `DELETE /authors/:id` - Delete an author.

## Request/Response Examples
Add a New Book
Request:
json
POST /books
{
  "title": "The Great Gatsby",
  "summary": "This book is about greatness",
  "cover": "cover-image-url",
  "content": “Book content”,
}

Response:

json
{
  "success": true,
  "message": "Book added successfully",
  "data": {
  "title": "The Great Gatsby",
  "summary": "This book is about greatness",
  "cover": "cover-image-url",
  "content": “Book content”,
  }
}

## Middleware
Validation Middleware
- Joi is used to validate input data for endpoints like adding or updating books, and authors details.
Example validation middleware for adding a book:
javascript
import Joi from 'joi';
const bookSchema = Joi.object({
  title: Joi.string().min(3).required(),
  summary: Joi.string().required(),
  cover: Joi.string().required(),
  content: Joi.string().required(),
});

export const validateBook = (req, res, next) => {
  const { error } = bookSchema.validate(req.body);
  if (error) {
    return res.status(400).json({
      success: false,
      message: error.details[0].message
    });
  }
  next(error);
};

## Error Handling Middleware
Errors are handled centrally, ensuring that every response follows a unified structure.
Example:
javascript
export const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    success: false,
    message: err.message || 'Internal Server Error'
  });
};

## Error Handling
For any error that occurs in the API, the response format is consistent:
- Status Codes: Appropriate HTTP status codes are returned for errors like `400` (Bad Request), `404` (Not Found), and `500` (Internal Server Error).
- Response Format: Every error response follows this structure:
json
{
  "success": false,
  "message": "Error message here"
}

## Dependencies
- Express: Web framework for building the API.
- Mongoose (if using MongoDB): MongoDB object modeling for Node.js
- Joi: Data validation library.
- Cors: The cors dependency allows Node.js API to handle and permit cross-origin requests from browsers, enabling external domains to access the API resources securely.
 
## License
This project is licensed under the Rundev License
This `README.md` file provides an overview of the project, installation instructions, API endpoint details, request/response examples, and a guide on using the middleware and error handling.
