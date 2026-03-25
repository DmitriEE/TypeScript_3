"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = require("fastify");
const fastify = (0, fastify_1.default)();
const start = async () => {
    try {
        await fastify.listen({ port: 3000 });
        console.log('Server is running at http://localhost:3000');
    }
    catch (err) {
        console.error(err);
        process.exit(1);
    }
};
start();
fastify.post('/api/v1/books', async (request, reply) => {
    const { title, author } = request.body;
    return {
        message: 'Book created',
        book: { title, author }
    };
});
