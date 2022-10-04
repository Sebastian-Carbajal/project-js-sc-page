// Aplicación Web basado en un convertidor de divisas. A priori, convertir un par de divisas a otra en un solo sentido. 
// Se espera la evolución de la app en el avance de las clases 

let cash = prompt("Ingrese cantidad de dinero que desea calcular");
let divisaUno = prompt("Ingrese la divisa que desea convertir a la otra");
let divisaDos = prompt("Ingrese la divisa que convertirá el valor económico ingresado");
let acum = parseFloat("")

function conversionDeDivisas (dinero,divisa1,divisa2) {
    if(cash >=0) {
        switch(divisaUno) {
            case "PESOS ARGENTINOS":
            case "Pesos argentinos":
            case "pesos argentinos":
            
            if(divisaDos === "Soles" || divisaDos === "soles" || divisaDos === "SOLES") {
                acum = cash * 0.027;  
            } 
            else if (divisaDos === "Euros" || divisaDos === "euros" || divisaDos === "EUROS") {
                acum = cash * 0.0069;
            }
            else if (divisaDos === "Libra esterlina" || divisaDos === "libra esterlina" || divisaDos === "LIBRA ESTERLINA") {
                acum = cash * 0.0060;
            }
            else if (divisaDos === "Reales" || divisaDos === "reales" | divisaDos === "REALES") {
                acum = cash * 0.0367;
            }
            else if (divisaDos === "Dólares" || divisaDos === "Dolares" || divisaDos === "dolares" || divisaDos === "DOLARES" || divisaDos === "DÓLARES") {
                acum = cash * 0.0067;
            }
            else {
                alert("Divisa no existente");
            }
            break;
            
            case "SOLES":
            case "Soles":
            case "soles":

                if(divisaDos === "Pesos argentinos" || divisaDos === "pesos argentinos" || divisaDos === "PESOS ARGENTINOS") {
                    acum = cash * 36.84;  
                } 
                else if (divisaDos === "Euros" || divisaDos === "euros" || divisaDos === "EUROS") {
                    acum = cash * 0.25512;
                }
                else if (divisaDos === "Libras esterlinas" || divisaDos === "libras esterlinas" || divisaDos === "LIBRAS ESTERLINAS") {
                    acum = cash * 0.22;
                }
                else if (divisaDos === "Reales" || divisaDos === "reales" | divisaDos === "REALES") {
                    acum = cash * 1.35;
                }
                else if (divisaDos === "Dólares" || divisaDos === "Dolares" || divisaDos === "dolares" || divisaDos === "DOLARES" || divisaDos === "DÓLARES") {
                    acum = cash * 0.25;
                }
                else {
                    alert("Divisa no existente");
                }
                break;

            case "EUROS":
            case "Euros":
            case "euros":

                if(divisaDos === "Soles" || divisaDos === "soles" || divisaDos === "SOLES") {
                    acum = cash * 3.88;  
                } 
                else if (divisaDos === "Pesos argentinos" || divisaDos === "pesos argentinos" || divisaDos === "PESOS ARGENTINOS") {
                    acum = cash * 144.33;
                }
                else if (divisaDos === "Libras esterlinas" || divisaDos === "libras esterlinas" || divisaDos === "LIBRAS ESTERLINAS") {
                    acum = cash * 0.8767;
                }
                else if (divisaDos === "Reales" || divisaDos === "reales" | divisaDos === "REALES") {
                    acum = cash * 5.30;
                }
                else if (divisaDos === "Dólares" || divisaDos === "Dolares" || divisaDos === "dolares" || divisaDos === "DOLARES" || divisaDos === "DÓLARES") {
                    acum = cash * 0.98;
                }
                else {
                    alert("Divisa no existente");
                }
                break;

            case "LIBRAS ESTERLINAS":
            case "Libras esterlinas":
            case "libras esterlinas":

                if(divisaDos === "Soles" || divisaDos === "soles" || divisaDos === "SOLES") {
                    acum = cash * 4.42;  
                } 
                else if (divisaDos === "Euros" || divisaDos === "euros" || divisaDos === "EUROS") {
                    acum = cash * 1.139;
                }
                else if (divisaDos === "Pesos argentinos" || divisaDos === "pesos argentinos" || divisaDos === "PESOS ARGENTINOS") {
                    acum = cash * 164.4;
                }
                else if (divisaDos === "Reales" || divisaDos === "reales" | divisaDos === "REALES") {
                    acum = cash * 6.038;
                }
                else if (divisaDos === "Dólares" || divisaDos === "Dolares" || divisaDos === "dolares" || divisaDos === "DOLARES" || divisaDos === "DÓLARES") {
                    acum = cash * 1.13;
                }
                else {
                    alert("Divisa no existente");
                }
                break;
                
            case "REALES":
            case "Reales":
            case "reales":

                if(divisaDos === "Soles" || divisaDos === "soles" || divisaDos === "SOLES") {
                    acum = cash * 0.732;  
                } 
                else if (divisaDos === "Euros" || divisaDos === "euros" || divisaDos === "EUROS") {
                    acum = cash * 0.188;
                }
                else if (divisaDos === "Libra esterlina" || divisaDos === "libra esterlina" || divisaDos === "LIBRA ESTERLINA") {
                    acum = cash * 0.165;
                }
                else if (divisaDos === "Pesos argentinos" || divisaDos === "pesos argentinos" | divisaDos === "PESOS ARGENTINOS") {
                    acum = cash * 27.21;
                }
                else if (divisaDos === "Dólares" || divisaDos === "Dolares" || divisaDos === "dolares" || divisaDos === "DOLARES" || divisaDos === "DÓLARES") {
                    acum = cash * 0.19;
                }
                else {
                    alert("Divisa no existente");
                }
                break;

            case "Dólares":
            case "Dolares":
            case "dolares":
            case "dólares":
            case "DOLARES":
            case "DÓLARES":
                
                if(divisaDos === "Soles" || divisaDos === "soles" || divisaDos === "SOLES") {
                    acum = cash * 3.98;  
                } 
                else if (divisaDos === "Euros" || divisaDos === "euros" || divisaDos === "EUROS") {
                    acum = cash * 1.02;
                }
                else if (divisaDos === "Libra esterlina" || divisaDos === "libra esterlina" || divisaDos === "LIBRA ESTERLINA") {
                    acum = cash * 0.88;
                }
                else if (divisaDos === "Reales" || divisaDos === "reales" | divisaDos === "REALES") {
                    acum = cash * 5.16;
                }
                else if (divisaDos === "Pesos argentinos" || divisaDos === "pesos argentinos" || divisaDos === "PESOS ARGENTINOS") {
                    acum = cash * 148.24;
                }
                else {
                    alert("Divisa no existente");
                }
                break;

            default: 
            alert("Divisa no existente");
            break;
        }
    }         
}           

let converter = conversionDeDivisas(cash,divisaUno,divisaDos);
console.log(cash + " " + divisaUno + " es equivalente a " + acum + " " + divisaDos);

