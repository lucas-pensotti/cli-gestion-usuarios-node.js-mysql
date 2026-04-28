import { baseDeDatos } from "./config.js"

const getUsers = () => {
    return "Obteniendo usuarios"
}

const createUser = (username, email, password) => {
    const newUser = {
        id: crypto.randomUUID(),
        username: username,
        email: email,
        password: password
    }

    return newUser
}

const updateUser = (id, updates) => {
    return "Usuario actualizado"
}

const deleteUser = (id) => {
    return "Usuario borrado"
}

export { getUsers, createUser, updateUser, deleteUser }