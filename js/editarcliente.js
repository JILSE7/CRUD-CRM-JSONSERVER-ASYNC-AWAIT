import { obtenerClienteId, editarCliente } from './API.js'
import { mostrarAlerta, validar } from './funciones.js'


(() => {
    const formulario = document.querySelector('#formulario');
    const nombreInput = document.querySelector('#nombre');
    const emailInput = document.querySelector('#email');
    const telefonoInput = document.querySelector('#telefono')
    const empresaInput = document.querySelector('#empresa');
    const idInput = document.querySelector('#id');
    document.addEventListener('DOMContentLoaded', async() => {
        //1.-extrayendo el id de la url con urlsearch y get
        const parametrosURL = new URLSearchParams(window.location.search);
        const idCliente = parametrosURL.get('id');


        const cliente = await obtenerClienteId(idCliente);

        //2.-mostrar el cliente ya que lo tengamos
        mostrarCliente(cliente);
        //3.-validar el cliente
        formulario.addEventListener('submit', validarCliente)

    });


    function mostrarCliente(cliente) {

        const { nombre, empresa, email, telefono, id } = cliente
        nombreInput.value = nombre;
        emailInput.value = email;
        telefonoInput.value = telefono;
        empresaInput.value = empresa;
        idInput.value = id;
    }

    function validarCliente(e) {
        e.preventDefault();
        //Object literal handsment
        const cliente = {
            nombre: nombreInput.value,
            email: emailInput.value,
            telefono: Number(telefonoInput.value),
            empresa: empresaInput.value,
            id: Number(idInput.value)
        }


        if (!validar(cliente)) {
            mostrarAlerta('faltan campos');
            return
        } else if (isNaN(cliente.telefono)) {
            mostrarAlerta('Porfavor verifica tu numero, no se aceptan letras ni espacios');
            return;
        }

        //rescribe el objeto
        editarCliente(cliente);

    }

})();