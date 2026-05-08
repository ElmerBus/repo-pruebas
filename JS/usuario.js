async function validarUsuario(usuario, contrasena) {
      let  data
      if (usuario.includes('@')) {
            data={correo:usuario, contrasena:contrasena}
      } else {
            data={numEmpleado:usuario, contrasena:contrasena}
      }

      try{
            const llamado = await $.ajax({
                  url: 'link',
                  method: "POST",
                  dataType:"json",
            })
            //localStorage.setItem('Token',llamado.data.)
            
      }catch{

      }
}