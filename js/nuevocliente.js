import { mostrarAlerta, validar } from './funciones.js'
import { nuevoCliente } from './API.js'
(() => {

    //Quedan locales las variables de este archivo
    const formulario = document.querySelector('#formulario');
    formulario.addEventListener('submit', validarCliente);


    function validarCliente(e) {
        e.preventDefault();
        const nombre = document.querySelector('#nombre').value,
            email = document.querySelector('#email').value,
            telefono = document.querySelector('#telefono').value,
            empresa = document.querySelector('#empresa').value;

        //Object literal handsment
        const cliente = {
            nombre,
            email,
            telefono: Number(telefono),
            empresa
        }

        if (!validar(cliente)) {
            mostrarAlerta('faltan campos');
            return
        } else if (isNaN(cliente.telefono)) {
            mostrarAlerta('Porfavor verifica tu numero, no se aceptan letras ni espacios');
            return;
        }

        console.log(cliente.telefono);
        nuevoCliente(cliente);
        window.location.href = 'index.html';

    }





})()