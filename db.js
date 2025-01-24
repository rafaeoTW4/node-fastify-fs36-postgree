import pg from 'pg'
const { Pool } = pg

export const pool = new Pool({
    user: 'neondb_owner',
    password: 'npg_xtAr8mvUg0ja',
    host: 'ep-sparkling-wind-a8ptpo98-pooler.eastus2.azure.neon.tech',
    port: 5432,
    database: 'neondb', 
    ssl: { rejectUnauthorizrd: false }
})



const result = await pool.query('SELECT NOW()');

//console.log(result.rows[0].now)

