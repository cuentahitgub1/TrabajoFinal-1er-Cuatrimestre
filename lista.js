let lista = document.getElementById("lista");
let totalText = document.getElementById("total");
let total = 0;


const productos = ["Cocacola", "Fernet Branca", "Aceite Girasol", "Puré de Tomate", "Guaymayen Triple",
 "Bizcochos Don Satur", "Quílmes", "Azúcar", "Oreo Clásica", "Yerba Mate", "Sprite", "Dulce de Leche"];
const precios = [4100, 8260, 1700, 900, 500, 850, 1800, 1300, 1000, 3200, 4000, 2000];
const stock = [8, 3, 20, 7, 33, 15, 10, 4, 12, 6, 8, 5];


function pintarProductos2(arrayProductos, arrayPrecios, arrayStock) {

    for (let i = 0; i < arrayProductos.length; i++) {
        lista.innerHTML += `<li class="objetos"> 
       ${arrayProductos[i]} -
       ($${arrayPrecios[i]})        
        <input type="number" id="stock${i}" value="${arrayStock[i]}">
        <input type="number" id="entrada${i}" placeholder="Ingrese cantidad">
        <button id="btn${i}">Agregar</button> </li>`}
}

function agregar(index) {
    const stockHTML = document.getElementById(`stock${index}`);
    const entradaHTML = document.getElementById(`entrada${index}`);
    const stock = parseInt(stockHTML.value);
    const cantidad = parseInt(entradaHTML.value);
    const precio = precios[index];
   
    console.log(stockHTML.value)
    console.log(stock)
    if (cantidad > 0 && cantidad <= stock) {
        total += cantidad * precio;
        totalText.innerHTML = `Total: $${total}`
        stockHTML.value = stock - cantidad;
        entradaHTML.value = "";
        alert(`Producto agregado con éxito`);} 
    
    else {alert('ERROR. La cantidad elejida es menor u igual a 0 o mayor al Stock');}}

function displayTotal() {
    const totalDisplay = document.getElementById('total');
    totalDisplay.innerText = total;
    totalDisplay.style.display = 'flex';}

function resetTotal() 
{document.getElementById('total').innerText = 'Total: ', alert("Gracias por su Compra");}

displayTotal();

pintarProductos2(productos, precios, stock);

for (let i = 0; i < productos.length; i++) 
    {document.getElementById(`btn${i}`).addEventListener("click", ()=> {agregar(i);})}
 

