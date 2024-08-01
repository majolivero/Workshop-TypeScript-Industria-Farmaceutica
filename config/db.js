import mysql from 'mysql2/promise';

const pool = mysql.createPool({
    host:'localhost',
    user:'root',
    database:'industria_farmaceutica',
    port:3306,
    password:'',
});

async function getConnection(){
    try{
        const connection = await pool.getConnection();
        console.log('Database connection succesful');
        return connection;
    }catch(err){
        console.error('Database connection failed',err);
        throw err;
    }
}

getConnection();

export { pool }  //Exportamos el pool por si necesitamos hacer una operación específica