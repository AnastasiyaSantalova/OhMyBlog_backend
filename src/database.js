import mysql from 'mysql';

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'hapi-server',
    password: 'qwerty123!',
    database: 'oh-my-blog'
});

export const db = {
    connect: () => {
        connection.connect();
    },
    query: (queryString, escapeValues) => {
        return new Promise((resolve, reject) => {
            connection.query(queryString, escapeValues, (error, results, fields) => {
                if (error) reject(error);
                resolve({ results, fields });
            })
        })
    },
    end: () => connection.end(),
}