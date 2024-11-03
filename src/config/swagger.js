import swaggerJsdoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Easy-Restify API',
            version: '1.0.0',
            description: 'A dynamically generated REST API',
        },
    },
    apis: ['./src/utils/resourceManager.js'], // Point to resourceManager.js for Swagger docs
};

const swaggerSpec = swaggerJsdoc(options);

const setupSwaggerDocs = (app) => {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};

export default setupSwaggerDocs;
