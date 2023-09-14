import sql, { query } from 'mssql'

const dbconfig = {

  user: 'Carlos',
  password: '0987',
  server: 'localhost',
  database: 'TiendaOnli',
  options: {
    encrypt: true,
    trustServerCertificate: true,
  },
};
export async function getConnection(){
  try {
    const pool = await sql.connect(dbconfig)
    return pool;
  } catch (error){
    console.error(error)
  }
};
export { sql }