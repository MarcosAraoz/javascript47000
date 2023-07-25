let producto = parseInt(prompt("Selecciona el producto: 1.Zapatillas - 2.Buzo - 3.Remera"))
let totalCompra = 0 
let decision 
let seguirComprando = true

while (seguirComprando === true) {
    if (producto === 1){
        totalCompra = totalCompra + 250
    } else if (producto === 2){
        totalCompra = totalCompra + 60
    } else if (producto === 3){
        totalCompra = totalCompra + 20
    } else {
        producto = parseInt(prompt("Selecciona un producto habilitado 1.Zapatilla - 2.Buzo - 3.Remera"))
        continue
    }

   decision = parseInt (prompt("Quieres seguir comprando? 1.Si - 2.No"))
   if (decision === 1){
    producto = parseInt(prompt("Selecciona el producto que deseas comprar 1.Zapatilla - 2.Buzo - 3.Remera"))
   } else {
    seguirComprando = false
   }
}

alert("El total de compra es " + totalCompra )