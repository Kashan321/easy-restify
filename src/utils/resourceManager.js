import express from 'express'
import createValidationMiddleware from './validation.js';

/**
 * Registers CRUD routes for a given resource with Swagger documentation.
 * 
 * @param {object} app - The Express app instance
 * @param {object} resourceConfig - Configuration for the resource
 * @param {string} resourceConfig.route - The base route for the resource
 * @param {object} resourceConfig.attributes - Attributes for the resource validation
 * @param {object} resourceConfig.permissions - Permissions for CRUD operations
 */
const registerResource = (app, resourceConfig) => {
    const router = express.Router();
    const { route, attributes, permissions } = resourceConfig;

    /**
     * @swagger
     * /{route}:
     *   post:
     *     summary: Create a new resource entry
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             properties:
     *               name:
     *                 type: string
     *               email:
     *                 type: string
     *     responses:
     *       201:
     *         description: Resource created successfully
     */
    if (permissions.create) {
        router.post('/', createValidationMiddleware(attributes), (req, res) => {
            res.json({ message: `Creating a new ${route} entry`, data: req.body });
        });
    }

    /**
     * @swagger
     * /{route}:
     *   get:
     *     summary: Get all entries
     *     responses:
     *       200:
     *         description: A list of resource entries
     */
    if (permissions.read) {
        router.get('/', (req, res) => {
            res.json({ message: `Fetching all ${route} entries` });
        });

        /**
         * @swagger
         * /{route}/{id}:
         *   get:
         *     summary: Get a single entry by ID
         *     parameters:
         *       - name: id
         *         in: path
         *         required: true
         *         schema:
         *           type: string
         *     responses:
         *       200:
         *         description: A single resource entry
         */
        router.get('/:id', (req, res) => {
            res.json({ message: `Fetching ${route} entry with id ${req.params.id}` });
        });
    }

    /**
     * @swagger
     * /{route}/{id}:
     *   put:
     *     summary: Update an entry by ID
     *     parameters:
     *       - name: id
     *         in: path
     *         required: true
     *         schema:
     *           type: string
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             properties:
     *               name:
     *                 type: string
     *               email:
     *                 type: string
     *     responses:
     *       200:
     *         description: Resource updated successfully
     */
    if (permissions.update) {
        router.put('/:id', createValidationMiddleware(attributes), (req, res) => {
            res.json({ message: `Updating ${route} entry with id ${req.params.id}`, data: req.body });
        });
    }

    /**
     * @swagger
     * /{route}/{id}:
     *   delete:
     *     summary: Delete an entry by ID
     *     parameters:
     *       - name: id
     *         in: path
     *         required: true
     *         schema:
     *           type: string
     *     responses:
     *       200:
     *         description: Resource deleted successfully
     */
    if (permissions.delete) {
        router.delete('/:id', (req, res) => {
            res.json({ message: `Deleting ${route} entry with id ${req.params.id}` });
        });
    }

    app.use(route, router);
};

export default registerResource;
