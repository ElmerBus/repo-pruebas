function verContrasena(campoPassword) {
      if (campoPassword.type === "password") {
            campoPassword.placeholder="Contraseña";
            campoPassword.type = "text";
      } else {
            campoPassword.placeholder="••••••••";
            
            campoPassword.type = "password";
      }
}
function validarCampo(campo) {
      if (campo.value.trim() === '') {
            campo.autocomplete="off"
            campo.setCustomValidity(
                  'Por favor, llena este campo'
            );
            campo.reportValidity();
            campo.requiered = 'true'

            return false;
      }
      return true

}
