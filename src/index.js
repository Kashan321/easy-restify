import express from 'express'
import registerResource from './utils/resourceManager.js';
import setupSwaggerDocs from './config/swagger.js'

const app = express();

app.use(express.json());

// Example resource configuration
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

// Register resource routes
registerResource(app, userResource);

// Setup Swagger documentation
setupSwaggerDocs(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
