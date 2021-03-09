const url = 'http://localhost:4000/clientes';

//inserta un nuevo cliente en la API POST
export const nuevoCliente = async(cliente) => {

    console.log(cliente);

    try {
        const respuesta = await (await fetch(url, {
            method: 'POST',
            body: JSON.stringify(cliente),
            //informacion de que tipo de datos estamos enviando
            headers: {
                'Content-Type': 'application/json'
            }
        })).json()
        console.log('usuario agregado correctamente');
        window.location.href = 'index.html'
        console.log(respuesta);
    } catch (error) {
        console.log('error');
    }
}


//Obtiene los elementos de nuestra API GET
export const obtenerClientes = async() => {

    try {
        const clientes = await (await fetch(url)).json();
        console.log(clientes);
        return clientes;
    } catch (error) {
        console.log(error);
    }
}


//Elimina un cliente
export async function eliminarCliente(id) {
    try {
        await fetch(`${url}/${id}`, {
            method: 'DELETE'
        })
        console.log('cliente eliminado');
    } catch (error) {
        console.error(error);
    }
}

//obtiene un cliente por su id
export const obtenerClienteId = async(id) => {
    try {
        const cliente = await (await fetch(`${url}/${id}`)).json();
        return cliente;
    } catch (error) {
        console.log('error');
    }

}

//actualiza un registro
export const editarCliente = async(cliente) => {
    const { id } = cliente
    try {
        await fetch(`${url}/${id}`, {
            method: 'PUT',
            body: JSON.stringify(cliente),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        window.location.href = 'index.html'
    } catch (error) {
        console.log(error);
    }
}