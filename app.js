
const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}

const campos = {
	usuario: false,
	nombre: false,
	password: false,
	correo: false,
	telefono: false
}

const validarFormulario = (e) => {
	switch (e.target.name) {
		case "usuario":
			validarCampo(expresiones.usuario, e.target, 'usuario');
		break;
		case "nombre":
			validarCampo(expresiones.nombre, e.target, 'nombre');
		break;
		case "password":
			validarCampo(expresiones.password, e.target, 'password');
			validarPassword2();
		break;
		case "password2":
			validarPassword2();
		break;
		case "correo":
			validarCampo(expresiones.correo, e.target, 'correo');
		break;
		case "telefono":
			validarCampo(expresiones.telefono, e.target, 'telefono');
		break;
	}
}

const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos[campo] = true;
	} else {
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos[campo] = false;
	}
}

const validarPassword2 = () => {
	const inputPassword1 = document.getElementById('password');
	const inputPassword2 = document.getElementById('password2');

	if(inputPassword1.value !== inputPassword2.value){
		document.getElementById(`grupo__password2`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__password2`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__password2 i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__password2 i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__password2 .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos['password'] = false;
	} else {
		document.getElementById(`grupo__password2`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__password2`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__password2 i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__password2 i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__password2 .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos['password'] = true;
	}
}

inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
	e.preventDefault();

	const terminos = document.getElementById('terminos');
	if(campos.usuario && campos.nombre && campos.password && campos.correo && campos.telefono && terminos.checked ){
		formulario.reset();

		document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
		setTimeout(() => {
			document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
		}, 5000);

		document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
			icono.classList.remove('formulario__grupo-correcto');
		});
	} else {
		document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
	}
});




function validar()
{
    var nombre= document.getElementById("nombres").value;
    var mail=document.getElementById("email").value;
    var telefono =document.getElementById("telefono").value;
    var mensaje =document.getElementById("mensaje").value;
    var cont=parseInt(0)
    if((nombre==="")||(mail==="")||(telefono==="")||(mensaje===""))
    alert("Llene todos los campos");
  
    else
    {
        cont=parseInt(vNombre(nombre))+parseInt(Email(mail)) + parseInt( cell(telefono));
        if (cont===0)
        document.getElementById("respuesta2").innerHTML="Datos enviados"
    }
    
    
    
}
function validar1()
{
    var nombre= document.getElementById("nombres").value;
    var mail=document.getElementById("email").value;
    var telefono =document.getElementById("telefono").value;
    var mensaje =document.getElementById("mensaje").value;
    var pais =document.getElementById("pais").value;
    var cont=parseInt(0)
    if((nombre==="")||(mail==="")||(telefono==="")||(mensaje==="")(pais==""))
    alert("Llene todos los campos");
  
    else
    {
        cont=parseInt(vNombre(nombre))+parseInt(Email(mail)) + parseInt( cell(telefono)+parseInt(Pais(pais)));
        if (cont===0)
        document.getElementById("respuesta3").innerHTML="Datos enviados"
    }
    
    
    
}
function cell(telefono)
{
    var palabra=telefono
    var cont=parseInt(0)
  
        if(palabra.length!=10)
        {
            alert("Ingrese un número válido");
            cont=cont+1;
        }
      
        return cont
}
function vNombre(nombre)
{
    var palabra=""
    var cont=parseInt(0)
    for (var i=0; i < nombre.length; i++) {
        palabra=parseInt(nombre[i]);
        if(isNaN(palabra))
        {}
        else
        {
            alert("Los nombres no pueden tener números");
            cont=cont+1;
            i=nombre.length
        }
     }
     return cont
}
function Email(mail)
{
    var palabra=""
    var num=parseInt("0");
    var cont=parseInt(0);

    for (var i=0; i < mail.length; i++) {
        palabra=mail[i];
        if(palabra==="@")
        {
            num=num+1;
        }
    }
        if(num!=1)
        {
            alert("Ingrese un correo válido");
            cont=cont+1;
          
        }
   
        return cont
}