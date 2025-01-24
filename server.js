// Import the framework and instantiate it
import Fastify from 'fastify'
import { pool } from './db.js'


const fastify = Fastify({
  logger: true
})

// Declare a route for the root
fastify.get('/', async function handler(request, reply) {
  return { Olá: 'Servidor funcionando' }
})

// Declare the new 'pasteis' route
fastify.get('/pasteis', async function handler(request, reply) {
  const result = await pool.query('select *from pastel');
  // return result.rows
  return {
    mensagem: 'Retornou os pasteis',
    data: result.rows
  }
})

// Run the server!
try {
  await fastify.listen({ port: 3000 })
  console.log("Servidor funcionando")
} catch (err) {
  fastify.log.error(err)
  process.exit(1)
}
