// Vamos imaginar que estamos trabalhando com o estoque de produtos de um
// vendedor no MeLi. Será composto pela seguinte lista de produtos:

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

function addID(products) {
    products.forEach((element,index) => {
        element.id=index + 1
    });

}

addID(products)

//console.log(products)

function printAllProducts(products) {
    products.forEach(element => {
        console.log(element)
    });

}

//print(products)

function printId3(products) {
    products.forEach(element => {
        if (element.id === 3) console.log(element)
    });

}

printId3(products)

function printColorBlack(products) {
    products.forEach(element => {
        if (element.colors.indexOf('black') >= 0) console.log(element)
    });

}

printColorBlack(products)



function printElementWithoutColor(products) {
    products.forEach(element => {
        if (element.colors.length === 0) console.log(element)
    });

}

printElementWithoutColor(products)

products.push({name: 'lapis', price: '10', quantity: 1, colors: ['red'], id: products.length + 1})
console.log('add produtos', products)
// Adicione um novo produto ao array com as mesmas propriedades dos produtos
// existentes.
// 2. Remova os produtos fora de estoque da matriz.
// 3. Imprima no console a soma do estoque de todos os produtos.
// 4. Imprima produtos com preço superior a um determinado valor.
// 5. Imprima o nome de todos os produtos que tenham a letra ‘o’ em seu nome.