
# easy-restify

**easy-restify** is a simple, flexible framework for creating RESTful APIs in Express, with dynamic route generation and integrated Swagger documentation. Configure resources in seconds and focus on building features rather than boilerplate code!

## Features

- 🚀 **Dynamic CRUD Routes**: Define and register routes effortlessly.
- 🛠 **Input Validation**: Define schema-based validation for resource attributes.
- 📜 **Swagger Integration**: Automatic Swagger documentation generation.
- ⚙️ **Customizable Permissions**: Easily control CRUD permissions.

## Installation

Install the package using npm:

```bash
npm install easy-restify
```

Or with Yarn:

```bash
yarn add easy-restify
```

## Usage

Here's how to set up and use **easy-restify** in an Express application.

### Step 1: Import and Initialize `easy-restify`

```javascript
import express from 'express';
import easyRestify from 'easy-restify';

const app = express();
app.use(express.json());
```

### Step 2: Define a Resource

Create a resource configuration object that defines the route, attributes, and permissions.

```javascript
const userResource = {
    route: '/users',
    attributes: {
        name: { type: 'string', required: true },
        email: { type: 'string', required: true },
    },
    permissions: {
        create: true,
        read: true,
        update: true,
        delete: true,
    },
};
```

### Step 3: Register the Resource

Register the resource using `easyRestify.registerResource()` to automatically generate CRUD routes.

```javascript
easyRestify.registerResource(app, userResource);
```

### Step 4: Set Up Swagger Documentation (Optional)

Swagger documentation can be served at `/api-docs` for a quick, interactive API overview.

```javascript
easyRestify.setupSwaggerDocs(app);
```

### Step 5: Start the Server

Finally, start the Express server:

```javascript
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`App running on http://localhost:${PORT}`);
});
```

Your server now has CRUD routes for `/users` with input validation and Swagger documentation!

## Example Requests

Once you've set up `easy-restify`, try making requests to your new API:

- **Create User**: `POST /users`
- **Get All Users**: `GET /users`
- **Get User by ID**: `GET /users/:id`
- **Update User by ID**: `PUT /users/:id`
- **Delete User by ID**: `DELETE /users/:id`

## Options

- **route**: Base route for the resource.
- **attributes**: Object defining the structure and validation requirements of the resource.
- **permissions**: Object with `create`, `read`, `update`, and `delete` flags to enable or disable specific routes.

## Example Resource Object

```javascript
const productResource = {
    route: '/products',
    attributes: {
        title: { type: 'string', required: true },
        price: { type: 'number', required: true },
    },
    permissions: {
        create: true,
        read: true,
        update: true,
        delete: false,
    },
};
```

## License

This package is open-source and available under the MIT License.

## Contact Me
[GitHub](https://github.com/Kashan321)
[LinkedIn](https://www.linkedin.com/in/mkashanhaider)
[Gmail]muhammadkashanhaider3241@gmail.com

