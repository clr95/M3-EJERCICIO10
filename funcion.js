console.log("hola");
function validateForm() {
    var nombres = document.getElementById('nombres').value;
    var apellidos = document.getElementById('apellidos').value;
    var fechaNacimiento = document.getElementById('fechaNacimiento').value;
    var genero = document.getElementById('genero').value;
    var email = document.getElementById('email').value;
    var calle = document.getElementById('calle').value;
    var numero = document.getElementById('numero').value;
    var deptoCasa = document.getElementById('deptoCasa').value;
    var comuna = document.getElementById('comuna').value;
    var ciudad = document.getElementById('ciudad').value;
    var region = document.getElementById('region').value;
    var pais = document.getElementById('pais').value;
    var instrucciones = document.getElementById('instrucciones').value;
    var codigoPais = document.getElementById('codigoPais').value;
    var telefono = document.getElementById('telefono').value;
    var contrasena = document.getElementById('contrasena').value;
  
    // Validar que todos los campos sean completados
    if (
      nombres === '' ||
      apellidos === '' ||
      fechaNacimiento === '' ||
      genero === '' ||
      email === '' ||
      calle === '' ||
      numero === '' ||
      deptoCasa === '' ||
      comuna === '' ||
      ciudad === '' ||
      region === '' ||
      pais === '' ||
      instrucciones === '' ||
      codigoPais === '' ||
      telefono === '' ||
      contrasena === ''
    ) {
      alert('Por favor, complete todos los campos.');
      return false;
    }
  
    // Validar formato de correo electrónico
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Por favor, ingrese un correo electrónico válido.');
      return false;
    }
  
    // Validar formato de código de país
    var codigoPaisRegex = /^\+\d+$/;
    if (!codigoPaisRegex.test(codigoPais)) {
      alert('Por favor, ingrese un código de país válido.');
      return false;
    }
  
    // Validar longitud de teléfono
    var telefonoRegex = /^\d{6,9}$/;
    if (!telefonoRegex.test(telefono)) {
      alert('Por favor, ingrese un número de teléfono válido (6 a 9 dígitos).');
      return false;
    }
  
    // Validar formato de contraseña (al menos una mayúscula, un número y un carácter especial)
    var contrasenaRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).*$/;
    if (!contrasenaRegex.test(contrasena)) {
      alert('Por favor, ingrese una contraseña válida (al menos una mayúscula, un número y un carácter especial).');
      return false;
    }
 
    // Si todas las validaciones son exitosas, se envía el formulario
    alert('Formulario enviado correctamente.');
    return true;
  }

