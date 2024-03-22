function enviar(){

    const correo = document.getElementById('correoIn').value;
    const password = document.getElementById('pass').value;
    
    const correo2 = "rchahuan2001@gmail.com";
    const contrasena= "primeras";
    
    if (correo === correo2 && contrasena === password) {
        console.log('pass');
        location.href = '../index.html'; 
       
    } else {
       
    alert('Su contraseña no es correcta');
    }
    
    };