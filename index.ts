import { httpServer } from "./server/socket/socket"

const port = 5500 //Aqui indico que vamos a usar el puerto 5500 para alojar el servidor, recordar que estamos usando el puerto 3000 para el cliente

//Este es el esuchador del servidor, es decir que lo lancemos en el puerto indicado, es decir, el 5500
httpServer.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
console.log("Hola")