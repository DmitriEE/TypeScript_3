import { getBookById } from './exportFunctions'
import Fastify from 'fastify'

const fastify = Fastify({
  logger: true
})

fastify.get('/api/v1/books/:id', async (request, reply) => {
  return { id: request.params }
})

/**
 * Run the server!
 */
const start = async () => {
  try {
    await fastify.listen({ port: 3000 })
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()