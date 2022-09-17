const mariadb = require('mariadb') ;

const pool = mariadb.createPool({
    host: 'mariadb',
    user: 'sql_user',
    password: 'password',
    database: 'food'
});

// Fetch Connection
const fetchConn = async () => {
    return pool.getConnection();
};

exports.excuteQuery = async (sql, value=[]) => {
    conn = await fetchConn();
    const result = await conn.query(sql, value);
    conn.release();
    return result;
};
