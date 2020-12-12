const { Client } = require('pg');
const { Pool } = require('pg')
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'tcc',
  password: '123',
  port: 5432,
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
})

const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'tcc',
  password: '123',
  port: 5432,
}
);

class Conexao extends Pool {

  async Open() {

    const conex = await pool
      .connect()
      .catch((e) => {
        console.error("Não foi possivel abrir a conexao: " + e);
        return false
      })

    if (conex) {
      conex
        .query("SELECT ('Banco Conectado' , NOW())")
        .then(results => console.log(results.rows))
        .catch((e) => {

          console.error("Não foi possivel conectar com o banco: " + e)
          return false
        })
        .finally(console.log("Conectado"))
    }

    return await conex

  }

  async End(con) {


    await con
      .query("SELECT ('Solicitado Desconexão' , NOW())")
      .then(results => console.log(results.rows))
    await con.end((err, client, release) => {
      if (err) {

        console.error('não foi Possivel encerrar a conexão:', err.stack)

      } else {

        con.release()


        console.log('Banco Desconectado')
      }
    })
  }
}


module.exports = Conexao;