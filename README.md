# CLI de Gestión de Usuarios con Node.js y MySQL

## Descripción del proyecto

Es una aplicación de línea de comandos (CLI) en Node.js que permita gestionar
usuarios (crear, listar, actualizar y eliminar) utilizando una base de datos relacional
(MySQL).

## Requerimientos

- Node.js
- MySQL

## Uso de la aplicación

### Obtener usuarios

node index.js get 

### Crear usuario

node index.js add <username> <email> <password> 

Por ejemplo: node index.js add lucas lucas@gmail.com 123456 

### Actualizar usuario

node index.js update <username> <email> <password> <id> 

### Eliminar usuario

node index.js delete <id> 

## Validaciones

- Los campos son obligatorios
- El email debe terminar en @gmail.com
- El usuario debe tener mínimo 3 caracteres
- La contraseña debe tener mínimo 5 caracteres

## Nota final

Los IDs se generan automáticamente.

