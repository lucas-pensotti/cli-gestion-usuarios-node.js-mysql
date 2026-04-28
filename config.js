import mysql from "mysql2/promise"

const baseDeDatos = mysql.createPool({
    host: "localhost",
    user: "root",
    passwor: "",
    database: "cli_gestion_usuarios",
    waitForConnections: true,
    connectionLimit: 5
})

export { baseDeDatos }