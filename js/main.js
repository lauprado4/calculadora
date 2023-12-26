let resultado = ""
let nombre = prompt("Bienvenido! ¿Cuál es tu nombre?");

let operacion = prompt(nombre + ", ¿Desea sumar, restar, multiplicar o dividir?");

while (operacion != "sumar" | operacion != "restar" | operacion != "multiplicar" | operacion != "dividir"){
    let mensaje = "Eso no es un operador.";
    alert(mensaje);
} 

let numero1 = parseInt(prompt("Ingrese el número a " + operacion +"."));
let numero2 = parseInt(prompt("Ingrese el segundo número que quiera " + operacion +"."));

if (operacion === "sumar"){
    resultado = numero1 + numero2;
    let mensaje = "El resultado es " + resultado + ". Es correcto?";
    let aprobacion = confirm(mensaje);

    if(aprobacion == true){
        let mensaje2 = "Que bien! No suelo equivocarme mucho 😎";
         alert(mensaje2);
    }
    else if (aprobacion == false){
        let mensaje2 = "Estás seguro de que no es correcto? 🤔";
        let aprobacion2 = confirm(mensaje2);

            if(aprobacion2 == true){
                let mensaje3 = "No puede ser... revisalo bien porque yo nunca me equivoco! 🤨";
                let aprobacion3 = confirm(mensaje3);
        
                    if(aprobacion3 == true){
                    let mensaje4 = "Basta!!! Todos sabemos que el resultado de " + operacion + " " + numero1 + " y " + numero2 + " siempre da " + resultado + ". 😡";
                    let aprobacion4 = confirm(mensaje4);
                    
                        if(aprobacion4 == true){
                            let mensaje5 = "Me hiciste enojar. No quiero hablar más con vos! 😤";
                            alert(mensaje5);
                        }
                    }
            }
    }
}
else if (operacion === "restar"){
    resultado = numero1 - numero2;
    let mensaje = "El resultado es " + resultado + ". Es correcto?";
    let aprobacion = confirm(mensaje);

    if(aprobacion == true){
        let mensaje2 = "Que bien! No suelo equivocarme mucho 😎"
         alert(mensaje2)
     }
     else if (aprobacion == false){
        let mensaje2 = "Estás seguro de que no es correcto? 🤔";
        let aprobacion2 = confirm(mensaje2);

            if(aprobacion2 == true){
                let mensaje3 = "No puede ser... revisalo bien porque yo nunca me equivoco! 🤨";
                let aprobacion3 = confirm(mensaje3);
        
                    if(aprobacion3 == true){
                    let mensaje4 = "Basta!!! Todos sabemos que el resultado de " + operacion + " " + numero1 + " y " + numero2 + " siempre da " + resultado + ". 😡";
                    let aprobacion4 = confirm(mensaje4);
                    
                        if(aprobacion4 == true){
                            let mensaje5 = "Me hiciste enojar. No quiero hablar más con vos! 😤";
                            alert(mensaje5);
                        }
                    }
            }
    }
}
else if (operacion === "multiplicar"){
    resultado = numero1 * numero2;
    let mensaje = "El resultado es " + resultado + ". Es correcto? ";
    let aprobacion = confirm(mensaje);

    if(aprobacion == true){
        let mensaje2 = "Que bien! No suelo equivocarme mucho 😎"
         alert(mensaje2)
     }
     else if (aprobacion == false){
        let mensaje2 = "Estás seguro de que no es correcto? 🤔";
        let aprobacion2 = confirm(mensaje2);

            if(aprobacion2 == true){
                let mensaje3 = "No puede ser... revisalo bien porque yo nunca me equivoco! 🤨";
                let aprobacion3 = confirm(mensaje3);
        
                    if(aprobacion3 == true){
                    let mensaje4 = "Basta!!! Todos sabemos que el resultado de " + operacion + " " + numero1 + " y " + numero2 + " siempre da " + resultado + ". 😡";
                    let aprobacion4 = confirm(mensaje4);
                    
                        if(aprobacion4 == true){
                            let mensaje5 = "Me hiciste enojar. No quiero hablar más con vos! 😤";
                            alert(mensaje5);
                        }
                    }
            }
    }
}
else if (operacion === "dividir"){
    if (numero2 == 0){
        let mensaje = "Syntax Error. Intente nuevamente y no divida por 0 😒";
        alert(mensaje);
        
    }
    else if (operacion === "dividir"){
        resultado = numero1 / numero2;
        let mensaje = "El resultado es " + resultado + ". Es correcto?";
        let aprobacion = confirm(mensaje);

        if(aprobacion == true){
           let mensaje2 = "Que bien! No suelo equivocarme mucho 😎"
            alert(mensaje2)
        }
        else if (aprobacion == false){
            let mensaje2 = "Estás seguro de que no es correcto? 🤔";
            let aprobacion2 = confirm(mensaje2);
    
                if(aprobacion2 == true){
                    let mensaje3 = "No puede ser... revisalo bien porque yo nunca me equivoco! 🤨";
                    let aprobacion3 = confirm(mensaje3);
            
                        if(aprobacion3 == true){
                        let mensaje4 = "Basta!!! Todos sabemos que el resultado de " + operacion + " " + numero1 + " y " + numero2 + " siempre da " + resultado + ". 😡";
                        let aprobacion4 = confirm(mensaje4);
                        
                            if(aprobacion4 == true){
                                let mensaje5 = "Me hiciste enojar. No quiero hablar más con vos! 😤";
                                alert(mensaje5);
                            }
                        }
                }
        }
    }
}

else() =>{
   let mensaje = "Eso no es un operador.";
   alert(mensaje);
}
