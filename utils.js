const { Client } = require('pg');

const client = new Client({
    user: 'admin',
    host: 'localhost',
    database: 'vendasimples',
    password: '8%UFfra-',
    port: 5432,
});

client.connect()
    .then(() => console.log('Conectado ao PostgreSQL'))
    .catch(err => console.error('Erro ao conectar:', err));

    async function criarTabela() {
    try {
        await client.query(`
            CREATE TABLE IF NOT EXISTS usuarios (
                id SERIAL PRIMARY KEY,
                nome VARCHAR(100) NOT NULL,
                email VARCHAR(100) UNIQUE NOT NULL
            );
        `);
        console.log('Tabela criada com sucesso!');
    } catch (err) {
        console.error('Erro ao criar tabela:', err);
    }
}

async function criarTabela() {
    try {
        await client.query(`
            CREATE TABLE IF NOT EXISTS usuarios (
                id SERIAL PRIMARY KEY,
                nome VARCHAR(100) NOT NULL,
                email VARCHAR(100) UNIQUE NOT NULL
            );
        `);
        console.log('Tabela criada com sucesso!');
    } catch (err) {
        console.error('Erro ao criar tabela:', err);
    }
}