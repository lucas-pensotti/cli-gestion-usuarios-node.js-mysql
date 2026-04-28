import { getUsers, createUser, updateUser, deleteUser } from "./controllers.js"

const argv = process.argv
const parameters = argv.slice(2)
const operation = parameters[0]
let resultado

switch(operation) {
    case "get":
        resultado = getUsers()
        break
    case "add":
        resultado = createUser(parameters[1], parameters[2], parameters[3])
        break
    case "update":
        resultado = updateUser()
        break
    case "delete":
        resultado = deleteUser()
        break  
    default:
        resultado = "Operación inválida"
}

const main = () => {
    console.log(resultado)
}

main()