let products = [
    { name: 'Macbook', price: 1300, quantity: 40, colors: ['silver', 'black', 'white'] },
    { name: 'Iphone', price: 1000, quantity: 50, colors: ['silver', 'red', 'white'] },
    { name: 'Pendrive', price: 10, quantity: 10, colors: [] },
    { name: 'Headset', price: 50, quantity: 0, colors: ['black'] },
    { name: 'Mouse', price: 20, quantity: 5, colors: ['white', 'black', 'blue'] },
    { name: 'Tablet', price: 500, quantity: 20, colors: ['white', 'black'] },
    { name: 'USB adaptor', price: 5, quantity: 0, colors: [] },
    { name: 'Keyboard', price: 30, quantity: 35, colors: ['white'] },
    { name: 'Gamepad', price: 30, quantity: 25, colors: ['black', 'silver'] },
    { name: 'Monitor', price: 200, quantity: 3, colors: [] },
    ]



    





products.push({name: 'lapis', price: 10, quantity: 1, colors: ['red'], id: products.length + 1})
console.log('add produtos', products)

function removeElementOutofStock(products) {
    products.forEach((element,index) => {
        if (element.quantity === 0) products.splice(index,1)
    });

}

removeElementOutofStock(products)
console.log('item 2')
console.log(products)


function TotalPriceInStock(products) {
    let totalPrice = 0
    products.forEach((element) => {
        if (element.quantity > 0) totalPrice += element.price * element.quantity
    });
     console.log(totalPrice)

}
console.log('item 3')
TotalPriceInStock(products)

console.log('ítem 4')

function PrintElementsMoreExpensives(products, minimumPrice) {
    products.forEach((element) => {
        if (element.price > minimumPrice) console.log(element)
    });
}

PrintElementsMoreExpensives(products,800)
console.log('ítem 5')

function printLetterO(products) {
    products.forEach(element => {
        let nameInLowerCase=element.name.toLowerCase()
        if (nameInLowerCase.indexOf('o') >= 0) console.log(element)
    });

}

printLetterO(products)

// Adicione um novo produto ao array com as mesmas propriedades dos produtos
// existentes.
// 2. Remova os produtos fora de estoque da matriz.
// 3. Imprima no console a soma do estoque de todos os produtos.
// 4. Imprima produtos com preço superior a um determinado valor.
// 5. Imprima o nome de todos os produtos que tenham a letra ‘o’ em seu nome.