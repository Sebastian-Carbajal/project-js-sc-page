// Aplicación Web basado en un convertidor de divisas

// Variables globales

    // Acumulador
    let resultado = 0

// Variables con valor de las conversiones actual

let arsToUsd = 0.006
let arsToEur = 0.006
let arsToGbp = 0.005

let eurToArs = 155.4
let eurToGbp = 0.85
let eurToUsd = 0.99

let usdToArs = 156.1
let usdToGbp = 0.86
let usdToEur = 1.00

let gbpToArs = 181.1
let gbpToUsd = 1.16
let gbpToEur = 1.16

// Lista de divisas disponibles para poder ingresar

const divisasDisponibles = ["Pesos argentinos","Dolares","Libras esterlinas","Euros"]

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
// console.log(ordenadoDeDivisas)


// Llamada de elementos del DOM
// Creando un contenedor

const contenedor = document.getElementById('container')

// Creando un texto para indicar donde ingresar la cantidad a convertir

const quantityText = document.createElement('p')
contenedor.append(quantityText)
quantityText.innerText = 'Cantidad:'

// Creando un campo de texto de entrada y añadiéndolo al contenedor

const quantityInput = document.createElement("input")
contenedor.append(quantityInput)

// Creación de un menú desplegable

const fluentSelect = document.createElement("select")

// Agregando los elementos del array divisasDisponibles como las opciones del menú
// Añadiendo las opciones al menú

for (div of divisasDisponibles) {
    const options = document.createElement("option")
    options.innerHTML = div

    fluentSelect.append(options)
}

// Añadiendo el menú al contenedor

contenedor.append(fluentSelect)

// Evento en que aparece la opción seleccionada en consola

contenedor.addEventListener("change", () => {
    let selectDinamico = fluentSelect.value
    // console.log(selectDinamico)
})

console.log(contenedor)

// Creación del otro menú desplegable

const secondSelect = document.createElement("select")

// Agregando los elementos del array list como las opciones del menú
// Añadiendo las opciones al menú

for (div of divisasDisponibles) {
    const opciones = document.createElement("option")
    opciones.innerHTML = div

    secondSelect.append(opciones)
}

// Añadiendo el otro menú al contenedor

contenedor.append(secondSelect)

// Creación de botón
const liveButton = document.createElement("button")
liveButton.innerHTML = "CONVERTIR"
contenedor.append(liveButton)


// Creando texto para el output del resultado de la conversión
const textoFinal = document.createElement('p')
textoFinal.innerText = 'El resultado de la conversión es de:'
contenedor.append(textoFinal)

// Creando un campo de texto de output de resultado de conversión
const outputResult = document.createElement('input')
contenedor.append(outputResult)

// Creando texto para devolver divisa convertida en la página
const textoFinal2 = document.createElement('p')
contenedor.append(textoFinal2)

// Función para solamente escribir valores mayores a 0 ********
// Function o condición en caso de ingresar un número negativo o cero en la cantidad a convertir ******

// quantityInput.addEventListener('change',validarCantidad)

function validarCantidad () {
    if(quantityInput.value < 0) {
        resultado = 0
    } else if (quantityInput.value === 0) {
        resultado = 0
    }
}

// Función para el caso de que se seleccionen los mismos valores en ambos selects

function valoresIguales() {
    if((fluentSelect.value === secondSelect.value) && (quantityInput.value < 0)){
        resultado = 0
    } else if ((fluentSelect.value === secondSelect.value)) {
        resultado = quantityInput.value
    }
}   


// Función para hacer los cálculos de conversión

function calcularConversion () {
    resultado = 0

    if(fluentSelect.value === 'Dolares') {
        switch(secondSelect.value){
            case 'Euros':
                resultado = quantityInput.value * usdToEur
                break
            case 'Libras esterlinas':
                resultado = quantityInput.value * usdToGbp
                break
            case 'Pesos argentinos':
                resultado = quantityInput.value * usdToArs
                break
            default:
                resultado = NaN
        }
    }
    else if(fluentSelect.value === 'Euros'){
        switch(secondSelect.value){
            case 'Pesos argentinos':
                resultado = quantityInput.value * eurToArs
                break
            case 'Libras esterlinas':
                resultado = quantityInput.value * eurToGbp
                break
            case 'Dolares':
                resultado = quantityInput.value * eurToUsd
                break
            default:
                resultado = NaN

        }
    }
    else if(fluentSelect.value === 'Libras esterlinas'){
        switch(secondSelect.value){
            case 'Pesos argentinos':
                resultado = quantityInput.value * gbpToArs
                break
            case 'Dolares':
                resultado = quantityInput.value * gbpToUsd
                break
            case 'Euros':
                resultado = quantityInput.value * gbpToEur
                break
            default:
                resultado = NaN

        }
    }
    else if(fluentSelect.value === 'Pesos argentinos'){
        switch(secondSelect.value){
            case 'Dolares':
                resultado = quantityInput.value * arsToUsd
                break
            case 'Euros':
                resultado = quantityInput.value * arsToEur
                break
            case 'Libras esterlinas':
                resultado = quantityInput.value * arsToGbp
                break
            default:
                resultado = NaN
        }
    }
    else {
        resultado = NaN
    }

    
    valoresIguales()
    outputResult.value = resultado
    textoFinal2.innerHTML = secondSelect.value
    
    // Pasaje del resultado de la conversión (tipo number) a JSON  
    JSON.stringify(localStorage.setItem('Resultado_De_Conversion',resultado))
    const resultadoConversion = JSON.stringify(resultado)
    // Resultado de la conversión mostrado en consola como tipo string (pasado a JSON)
    // console.log(typeof resultadoConversion)
    validarCantidad()
}

// Evento al presionar el botón
liveButton.addEventListener("click",calcularConversion)
liveButton.addEventListener("click", () => {

    // Pasaje de la cantidad (tipo number) a JSON 
    JSON.stringify(localStorage.setItem('Cantidad',quantityInput.value))
    const cantidadAConvertir = JSON.stringify(quantityInput.value)
    // Cantidad a convertir mostrada en consola como tipo string (pasada a JSON) 
    // console.log(typeof cantidadAConvertir)
    
    // Pasaje de la cantidad de tipo JSON (string) a tipo number
    const obtenerCantidad = localStorage.getItem('Cantidad')
    const cantidadInput = JSON.parse(obtenerCantidad)
    // Cantidad pasada de JSON a su tipo de objeto number 
    // console.log(typeof cantidadInput)

    // Pasaje del resultado de la conversión de JSON (tipo string) a tipo number
    const obtenerResultado = localStorage.getItem('Resultado_De_Conversion')
    const resultadoInput = JSON.parse(obtenerResultado)
    // Resultado de la conversión pasada de JSON a su tipo de objeto number
    // console.log(typeof resultadoInput)

    // Pasaje de la primera divisa a JSON 
    JSON.stringify(localStorage.setItem('Divisa_A_Convertir',fluentSelect.value))
    JSON.stringify(fluentSelect.value)

    // Pasaje de la segunda divisa a JSON 
    JSON.stringify(localStorage.setItem('Divisa_A_La_Que_Fue_Convertida',secondSelect.value)) 
    JSON.stringify(secondSelect.value)

    // Se convoca a la divisa que fue convertida a la consola 
    const divisaDos = localStorage.getItem('Divisa_A_La_Que_Fue_Convertida')
    // console.log(divisaDos)
})




