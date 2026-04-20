import Fastify from 'fastify';
import { getBookById } from './exportFunctions.js';
const server = Fastify({});
const opts = {
    schema: {
        response: {
            200: {
                type: 'object',
                properties: {
                    pong: {
                        type: 'string'
                    }
                }
            }
        }
    }
};
server.get('/ping', opts, async (request, reply) => {
    return { pong: 'it worked!' };
});
server.get('/api/v1/books/:id', async (request, reply) => {
    const id = Number(request.params.id);
    const result = await getBookById(id);
    return { id: id, result: result };
});
server.post('/api/v1/books', async (request, reply) => {
    // Логика для создания новой книги
    return { message: 'Книга создана' };
});
const start = async () => {
    try {
        await server.listen({ port: 3000 });
        console.log(`Server running at http://localhost:3000/`);
        const address = server.server.address();
        const port = typeof address === 'string' ? address : address?.port;
    }
    catch (err) {
        server.log.error(err);
        process.exit(1);
    }
};
start();
