import { baseDeDatos } from "./config.js"

const getUsers = async () => {
    const q = `SELECT * FROM users`
    const [respuesta] = await baseDeDatos.query(q)
    return respuesta
}

const createUser = async (username, email, password) => {
    
    // - Campos onligatorios
    if (!username || !email || !password) {
        return "Los campos username, email y password son obligatorios"
    }

    // - El email debe ser gmail
    if (!email.endsWith("gmail.com")) {
        return "El email debería terminar en gmail.com"
    }

    // - Validación del @
    if (!email.includes("@")) {
        return "Sin el @ el email no es válido"
    }

    // - Caracteres mínimos de usuario
    if (username.length < 3) {
        return "El usuario debe tener mínimo 3 caracteres"
    }

    // - Caracteres mínimos de contraseña
    if (password.length < 5) {
        return "La contraseña debe tener mínimo 5 caracteres"
    }

    const q = `INSERT INTO users (id, username, email, password) VALUES (?,?,?,?)`

    const [respuesta] = await baseDeDatos.query(q, [crypto.randomUUID(), username, email, password])

    if (respuesta.serverStatus === 2) {
        return "usuario creado exitosamente"
    }
}

const updateUser = async (id, updates) => {
    if (!id) {
        return "ID requerido"
    }

    const q = `UPDATE users SET username = ?, email = ?, password = ? WHERE id = ?`
    const { username, email, password } = updates
    const [respuesta] = await baseDeDatos.query(q, [username, email, password, id])

    if (respuesta.affectedRows === 0) {
        return "Usuario no encontrado";
    }
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