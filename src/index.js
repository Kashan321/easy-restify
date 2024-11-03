import express from 'express';
import registerResource from './utils/resourceManager.js';
import setupSwaggerDocs from './config/swagger.js';

const easyRestify = (app) => {

    app.use(express.json());

    
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

    
    registerResource(app, userResource);

   
    setupSwaggerDocs(app);
};

export { easyRestify, registerResource };  
export default easyRestify;


export const defaultExport = easyRestify;
