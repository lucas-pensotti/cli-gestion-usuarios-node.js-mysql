import { getUsers, createUser, updateUser, deleteUser } from "./controllers.js"

const argv = process.argv
const parameters = argv.slice(2)
const operation = parameters[0]
let resultado

switch(operation) {
    case "get":
        resultado = await getUsers()
        break
    case "add":
        resultado = await createUser(parameters[1], parameters[2], parameters[3])
        break
    case "update":
        const updates = { username: parameters[1], email: parameters[2], password: parameters[3] }
        resultado = await updateUser()
        break
    case "delete":
        resultado = await deleteUser(parameters[1])
        break  
    default:
        resultado = "Operación inválida"
}

const main = () => {
    console.log(resultado)
}

main()