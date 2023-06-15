const valorEntrada = document.getElementById("Pagar").value = "Total a Pagar: $"

var cuenta;
const entradaenpesos = 200;
const descuentoestudiante = 200 * 80 / 100;
const descuentotrainee = 200 * 50 / 100;
const descuentojunior = 200 * 15 / 100;
var resultado = 0;
var cantidad;

function Resetear() {
  if (document.getElementById('nombre').value !== "" || document.getElementById('apellido').value !== "" || document.getElementById('mail').value !== "" || document.getElementById('cantidad').value !== "") {
    document.getElementById('nombre').value = '';
    document.getElementById('apellido').value = '';
    document.getElementById('mail').value = '';
    document.getElementById('cantidad').value = '';
    document.getElementById('Pagar').value = `${valorEntrada}`;
  }
}

function resultadofinal() {
  cantidad = parseInt(document.getElementById("cantidad").value)
  if (document.getElementById('student').value == 1) {
    cuenta = parseInt(`${entradaenpesos}`) * 80 / 100;
    cuenta = parseInt(`${entradaenpesos}`) - cuenta
    if (cantidad > 1) {
      document.getElementById("Pagar").value = valorEntrada + (cuenta * cantidad)
    } else {
      document.getElementById("Pagar").value = valorEntrada + cuenta
    }
  }
  if (document.getElementById('student').value == 2) {
    cuenta = parseInt(`${entradaenpesos}`) - descuentotrainee
    if (cantidad > 1) {
      document.getElementById("Pagar").value = valorEntrada + (cuenta * cantidad)
    } else {
      document.getElementById("Pagar").value = valorEntrada + cuenta
    }
  }
  if (document.getElementById('student').value == 3) {
    cuenta = parseInt(`${entradaenpesos}`) - descuentojunior
    if (cantidad > 1) {
      document.getElementById("Pagar").value = valorEntrada + (cuenta * cantidad)
    } else {
      document.getElementById("Pagar").value = valorEntrada + cuenta
    }
  }
}

