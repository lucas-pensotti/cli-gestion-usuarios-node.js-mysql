import { baseDeDatos } from "./config.js"

const getUsers = async () => {
    const q = `SELECT * FROM users`
    const [respuesta] = await baseDeDatos.query(q)
    return respuesta
}

const createUser = async (username, email, password) => {

    const q = `INSERT INTO users (id, username, email, password) VALUES (?,?,?,?)`

    const [respuesta] = await baseDeDatos.query(q, [crypto.randomUUID(), username, email, password])

    if (respuesta.serverStatus === 2) {
        return "usuario creado exitosamente"
    }
}

const updateUser = (id, updates) => {
    return "Usuario actualizado"
}

const deleteUser = async (id) => {
    const q = `DELETE from users WHERE id = ?`
    const [respuesta] = await baseDeDatos.query(q, [id])

    if (respuesta.serverStatus === 2) {
        return "Usuario eliminado"
    }
}

export { getUsers, createUser, updateUser, deleteUser }