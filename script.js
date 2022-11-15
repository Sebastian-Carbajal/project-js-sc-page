// Aplicación Web basado en un convertidor de divisas

// Variables globales -- Acumulador 
let resultado = 0

// Lista de divisas disponibles para poder ingresar
const divisasDisponibles = ["Pesos argentinos","Dolares","Libras esterlinas","Euros","Soles","Yenes","Francos"]

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

// Llamada y creación de elementos 

// Llamada al contenedor
const contenedor = document.getElementById('container')

// Llamada a la caja
const caja = document.getElementById('cajaConversion')
caja.className = 'caja'

// Creación y llamada de elementos que serán el contenido de la caja
const palabra = document.getElementById('parrafoDeCantidad')
palabra.style.fontWeight = 'bold'

const quantityInput = document.getElementById('numberDeEntrada')
quantityInput.className = 'padding'

const convertirDe = document.createElement('p')

// Adición del contenido de texto que acompaña al primer select
convertirDe.innerText = 'Convertir de:'
caja.append(convertirDe)
convertirDe.style.fontSize = '1.2rem'

// Llamada al primer select
const fluentSelect = document.getElementById('firstSelect')
caja.append(fluentSelect)
fluentSelect.className = 'editSelects'

// Adición del contenido de texto que acompaña al segundo select
const string = document.createElement("p")
string.innerText = 'a:'
caja.append(string)
string.style.fontSize = '1.2rem'

// Llamada al segundo select 
const secondSelect = document.getElementById('secondSelect')
caja.append(secondSelect)
secondSelect.className = 'editSelects'

// Agregando los elementos del array divisasDisponibles como las opciones del menú
// Añadiendo las opciones al menú

for (div of divisasDisponibles) {
    const options = document.createElement("option")
    options.innerHTML = div

    fluentSelect.append(options)
}

// Agregando los elementos del array divisasDisponibles como las opciones del menú
// Añadiendo las opciones al menú

for (div of divisasDisponibles) {
    const opciones = document.createElement("option")
    opciones.innerHTML = div

    secondSelect.append(opciones)
}

// Creación de botón de conversión
const liveButton = document.createElement("button")
liveButton.innerHTML = "CONVERTIR"
caja.append(liveButton)
liveButton.className = 'padding'


// Creación del texto que indica un mensaje respecto al resultado de la conversión 
const textoFinal = document.createElement('p')
textoFinal.innerText = 'El resultado de la conversión es de:'
caja.append(textoFinal)
textoFinal.style.fontWeight = 'bold'

// Creación del campo de texto que será el output de resultado de la conversión
const outputResult = document.createElement('input')
caja.append(outputResult)
outputResult.className = 'padding'

// Creación del texto que devuelve divisa convertida en la página
const textoFinal2 = document.createElement('p')
caja.append(textoFinal2)

// Creación del botón de reversa para revertir la conversión 
const reverseButton = document.createElement('button')
reverseButton.innerHTML = "<i class='bx bx-revision'></i>"
caja.append(reverseButton)
reverseButton.className = 'padding'


// Evento al presionar el botón
liveButton.addEventListener("click",calcularConversion)

// Evento para el caso de que se ingrese una cantidad negativa
liveButton.addEventListener("click",cantidadNegativa)

// Evento para el botón de revertir
reverseButton.addEventListener('click', () => {

    const tempSelect = fluentSelect.value
    fluentSelect.value = secondSelect.value
    secondSelect.value = tempSelect
    calcularConversion()
    cantidadNegativa()
})

// Evento para la activación/desactivación del botón de revertir 
reverseButton.addEventListener('click', () => {
    deshabilitarBoton()
    setTimeout( () => {
        deshabilitarBoton(false)}, 400)
})



// Función para hacer los cálculos de conversión
function calcularConversion () {
    const primerSelect = fluentSelect.value
    const segundoSelect = secondSelect.value
    const cantAConvertir = quantityInput.value
        fetch(`json/divisas.json`)
        .then((resp) => {
            return resp.json()
        }
        )
        .then( (divisas) => {

        const dolar = primerSelect === 'Dolares'&& true
        const dolar2 = segundoSelect === 'Dolares' && true
        const euro = primerSelect === 'Euros' && true
        const euro2 = segundoSelect === 'Euros' && true
        const libra = primerSelect === 'Libras esterlinas' && true
        const libra2 = segundoSelect === 'Libras esterlinas' && true
        const peso = primerSelect === "Pesos argentinos" && true
        const peso2 = segundoSelect === 'Pesos argentinos' && true
        const sol = primerSelect === 'Soles'&& true
        const sol2 = segundoSelect === 'Soles' && true
        const yen = primerSelect === 'Yenes' && true
        const yen2 = segundoSelect === 'Yenes' && true
        const franco = primerSelect === 'Francos' && true
        const franco2 = segundoSelect === 'Francos' && true
        

divisas.forEach(div => {

    setTimeout ( () => {             
            if(div.divisa === 'Pesos argentinos' && peso){
                const resultado = (peso && dolar2) ? (cantAConvertir * div.conversionesArs.arsToUsd) : (peso && libra2) ? (cantAConvertir * div.conversionesArs.arsToGbp) : (peso && euro2) ? (cantAConvertir * div.conversionesArs.arsToEur) : (peso && sol2) ? (cantAConvertir * div.conversionesArs.arsToPen) : (peso && yen2) ? (cantAConvertir * div.conversionesArs.arsToJpy) : (peso && franco2) ? (cantAConvertir * div.conversionesArs.arsToChf) : cantAConvertir
                outputResult.value = resultado
            } else if (div.divisa === 'Dolares' && dolar){
                const resultado2 = (dolar && peso2) ? (cantAConvertir * div.conversionesUsd.usdToArs) : (dolar && libra) ? (cantAConvertir * div.conversionesUsd.usdToGbp) : (dolar && euro2) ? (cantAConvertir * div.conversionesUsd.usdToEur) : (dolar && sol2) ? (cantAConvertir * div.conversionesUsd.usdToPen) : (dolar && yen2) ? (cantAConvertir * div.conversionesUsd.usdToJpy) : (dolar && franco2) ? (cantAConvertir * div.conversionesUsd.usdToChf) : cantAConvertir
                outputResult.value = resultado2
            } else if (div.divisa === 'Libras esterlinas' && libra) {
                const resultado3 = (libra && peso2) ? (cantAConvertir * div.conversionesGbp.gbpToArs) : (libra && dolar2) ? (cantAConvertir * div.conversionesGbp.gbpToUsd) : (libra && euro2) ? (cantAConvertir * div.conversionesGbp.gbpToEur) : (libra && sol2) ? (cantAConvertir * div.conversionesGbp.gbpToPen) : (libra && yen2) ? (cantAConvertir * div.conversionesGbp.gbpToJpy) : (libra && franco2) ? (cantAConvertir * div.conversionesGbp.gbpToChf) : cantAConvertir
                outputResult.value = resultado3
            } else if (div.divisa === 'Euros' && euro) {
                const resultado4 = (euro && peso2) ? (cantAConvertir * div.conversionesEur.eurToArs) : (euro && dolar2) ? (cantAConvertir * div.conversionesEur.eurToUsd) : (euro && libra2) ? (cantAConvertir * div.conversionesEur.eurToGbp) : (euro && sol2) ? (cantAConvertir * div.conversionesEur.eurToPen) : (euro && yen2) ? (cantAConvertir * div.conversionesEur.eurToJpy) : (euro && franco2) ? (cantAConvertir * div.conversionesEur.eurToChf) : cantAConvertir 
                outputResult.value = resultado4
            } else if (div.divisa === 'Soles peruanos' && sol) {
                const resultado5 = (sol && peso2) ? (cantAConvertir * div.conversionesPen.penToArs) : (sol && dolar2) ? (cantAConvertir * div.conversionesPen.penToUsd) : (sol && libra2) ? (cantAConvertir * div.conversionesPen.penToGbp) : (sol && euro2) ? (cantAConvertir * div.conversionesPen.penToEur) : (sol && yen2) ? (cantAConvertir * div.conversionesPen.penToJpy) : (sol && franco2) ? (cantAConvertir * div.conversionesPen.penToChf) : cantAConvertir
                outputResult.value = resultado5
            } else if (div.divisa === 'Yenes' && yen) {
                const resultado6 = (yen && peso2) ? (cantAConvertir * div.conversionesJpy.jpyToArs) : (yen && dolar2) ? (cantAConvertir * div.conversionesJpy.jpyToUsd) : (yen && libra2) ? (cantAConvertir * div.conversionesJpy.jpyToGbp) : (yen && euro2) ? (cantAConvertir * div.conversionesJpy.jpyToEur) : (yen && sol2) ? (cantAConvertir * div.conversionesJpy.jpyToPen) : (yen && franco2) ? (cantAConvertir * div.conversionesJpy.jpyToChf) : cantAConvertir
                outputResult.value = resultado6
            } else if (div.divisa === 'Francos suizos' && franco) {
                const resultado7 = (franco && peso2) ? (cantAConvertir * div.conversionesChf.chfToArs) : (franco && dolar2) ? (cantAConvertir * div.conversionesChf.chfToUsd) : (franco && libra2) ? (cantAConvertir * div.conversionesChf.chfToGbp) : (franco && euro2) ? (cantAConvertir * div.conversionesChf.chfToEur) : (franco && sol2) ? (cantAConvertir * div.conversionesChf.chfToPen) : (franco && yen2) ? (cantAConvertir * div.conversionesChf.chfToJpy) : cantAConvertir
                outputResult.value = resultado7 
            }
            
            textoFinal2.style.fontWeight = '800'
            textoFinal2.innerHTML = segundoSelect},400)
        })
})
        valoresIguales()
        cantidadIgualaCero()

    // Pasaje de los valores al LocalStorage 

    JSON.stringify(localStorage.setItem('Cantidad_A_Convertir',cantAConvertir))
    JSON.stringify(localStorage.setItem('Divisa_De_Entrada',primerSelect))
    JSON.stringify(localStorage.setItem('Divisa_De_Salida',segundoSelect))
    JSON.stringify(localStorage.setItem('Resultado_De_Conversion',outputResult.value))

}

// Función que se añade al evento del caso de ingreso de un valor negativo
function cantidadNegativa () {
    return new Promise( (resolve,reject) => {
        if(quantityInput.value < 0) {
                resolve(
                Swal.fire ({
                    icon: 'error',
                    title: 'ERROR',
                    text: 'No se pueden convertir valores negativos!',
                    width: 600,
                    padding: 50,
                }).then((action) => {
                    if(action.isConfirmed) {
                        outputResult.value = 0
                        quantityInput.value = ''
                        calcularConversion()
                    } else if (action.isDismissed) {
                        outputResult.value = 0
                        quantityInput.value = ''
                        calcularConversion()
                    }
                }))
        }
    })
}

// Función para el caso de que se seleccionen los mismos valores en ambos selects
function valoresIguales() {
    if(fluentSelect.value === secondSelect.value) {
        outputResult.value = quantityInput.value
    }
}
// Funcion para el caso de que la cantidad ingresada sea cero
function cantidadIgualaCero () {
    if(quantityInput.value === 0) {
        outputResult.value = 0
    }
}

// Función para bloquear el botón de revertir evitando su accionar reiteradas veces   
function deshabilitarBoton (boton = true) {
    if (boton) {
        reverseButton.disabled = true
    } else {
        reverseButton.disabled = ''
    }
}












