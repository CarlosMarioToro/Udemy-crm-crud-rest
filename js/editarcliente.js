import { obtenerCliente } from "./API.js";

(function() {
    // Campos del formulario
    const nombreInput = document.querySelector('#nombre');
    const emailInput = document.querySelector("#email");
    const empresaInput = document.querySelector("#empresa");
    const telefonoInput = document.querySelector("#telefono");
    const idInput = document.querySelector("#id");

    document.addEventListener('DOMContentLoaded', async () => {
        const parametrosURL = new URLSearchParams(window.location.search);

        const idCliente = parseInt(parametrosURL.get('id'));

        const cliente = await obtenerCliente(idCliente);
        
        mostrarCliente(cliente)
    });

    function mostrarCliente(cliente) {
        const {nombre, email, telefono, empresa, id} = cliente;
        // Asignar los valores a las variables del DOM
        nombreInput.value = nombre;
        emailInput.value = email;
        telefonoInput.value = telefono;
        empresaInput.value= empresa;
        idInput.value = id;
    }
})();