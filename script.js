// Aplicación Web basado en un convertidor de divisas

// Variables con prompts pidiendo los datos principales

let divisaUno = prompt("Ingrese divisa a convertir")
let divisaDos = prompt("Ingrese la divisa a la que convertirá la cantidad ingresada")
let cash = prompt("Ingrese cantidad de dinero que desea calcular")
let ac = 0

// Variables con valor de las conversiones actual

let divToArs = 0.006 

let eurToArs = 147.4
let eurToGbp = 0.87
let eurToUsd = 0.97

let usdToArs = 151.6
let usdToGbp = 0.90
let usdToEur = 1.03

let gbpToArs = 169.4 
let gbpToUsd = 1.12
let gbpToEur = 1.15

// Lista de divisas disponibles para poder ingresar

const divisasDisponibles = ["Pesos argentinos","Dolares","Libras esterlinas","Euros"]
 
// Función para validar el ingreso de las divisas

function validar (divisa1,divisa2) {
    if(divisasDisponibles.includes(divisa1)) {
            if(divisasDisponibles.includes(divisa2)){
                return "correcta" 
            }   else {
                return "inexistente"
            }
    }   else {
        return "inexistente"
        }
}

const functionOk = validar(divisaUno,divisaDos)
console.log("La divisa ingresada es " + functionOk)

// Creación de una clase para hacer los menús despegables y el texto para ingresar cantidad

class Dinero {
    constructor (divisaEntrante,cantidad,divisaDeSalida) {
        this.divisaEntrante = divisaEntrante
        this.cantidad = cantidad
        this.divisaDeSalida = divisaDeSalida
    }


// Método que pide ingresar cantidad de dinero mayor a cero

    ingresarCantidad (cantidad) {
        if(this.cantidad > 0) {
            return this.cantidad
        } else {
            alert("Ingreso un valor menor a 0")
            return null
        }
    }

// Método para convertir cantidad dependiendo las divisas que se ingresen 

    convertirA (divisaEntrante,divisaDeSalida) {
        if(this.divisaEntrante === 'Pesos argentinos') {
            ac = cash * divToArs
            return ac
        }
    
        else if(this.divisaEntrante === 'Euros') {
            if(this.divisaDeSalida === "Pesos argentinos"){
                ac = cash * eurToArs
                return ac 
            }
            else if(this.divisaDeSalida === "Libras esterlinas") {
                ac = cash * eurToGbp
                return ac 
            }
            else if(this.divisaDeSalida === "Dolares") {
                ac = cash * eurToUsd
                return ac 
            }  
        }

        else if(this.divisaEntrante === 'Dolares') { 
            if(this.divisaDeSalida === "Pesos argentinos"){
                ac = cash * usdToArs
                return ac 
            }
            else if(this.divisaDeSalida === "Libras esterlinas") {
                ac = cash * usdToGbp
                return ac 
            }
            else if(this.divisaDeSalida === "Euros") {
                ac = cash * usdToEur
                return ac 
            } 
        }
        
        else if(this.divisaEntrante === 'Libras esterlinas') {
            if(this.divisaDeSalida === "Pesos argentinos"){
                ac = cash * gbpToArs
                return ac 
            }
            else if(this.divisaDeSalida === "Dolares") {
                ac = cash * gbpToUsd
                return ac 
            }
            else if(this.divisaDeSalida === "Euros") {
                ac = cash * gbpToEur
                return ac 
            } 
        
        }   else {
                return 'No se pudo realizar la conversión'
            }
    } 
    
} 

const Dinero1 = new Dinero(divisaUno,cash,divisaDos)
console.log("Usted ingresó para convertir la cantidad de " + Dinero1.ingresarCantidad(cash))
console.log("La conversión es igual a " + Dinero1.convertirA(divisaUno,divisaDos))


// Método para ordenar la lista de divisas en orden alfabético

const ordenadoDeDivisas = divisasDisponibles.sort ( (a,b) => {
    if(a > b){
        return 1
    } else if (a < b){
        return -1
    } else {
        return 0
    }
})

console.log(ordenadoDeDivisas)
