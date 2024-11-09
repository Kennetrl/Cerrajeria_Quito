//Añadir elementos
const cardsContainers = document.querySelector('.cards-container');
const productList = [];

//Lisa de los elementos
productList.push({
    name: 'N1 - Ventana corrediza de aluminio',
    price: 45,
    image: './ventanasImagenes/1ventana.webp',
});
productList.push({
    name: 'N2 - Cubre-ventana',
    price: 35,
    image: './ventanasImagenes/2ventana.webp',
});
productList.push({
    name: 'N3 - Cubre-ventana',
    price: 35,
    image: './ventanasImagenes/3ventana.webp',
});
productList.push({
    name: 'N4 - Ventana corrediza',
    price: 45,
    image: './ventanasImagenes/4ventana.webp',
});
productList.push({
    name: 'N5 - Cubre-ventana',
    price: 35,
    image: './ventanasImagenes/5ventana.webp',
});
productList.push({
    name: 'N6 - Cubre-ventana',
    price: 35,
    image: './ventanasImagenes/6ventana.webp',
});
productList.push({
    name: 'N7-Cubre-ventana',
    price: 35,
    image: './ventanasImagenes/7ventana.webp',
});
productList.push({
    name: 'N8 - Ventana corrediza con sistema ingles',
    price: 55,
    image: './ventanasImagenes/8ventana.webp',
});
productList.push({
    name: 'N9 - Cubre-ventana',
    price: 35,
    image: './ventanasImagenes/9ventana.webp',
});
productList.push({
    name: 'N10 - Cubre-ventana',
    price: 35,
    image: './ventanasImagenes/10ventana.webp',
});
productList.push({
    name: 'N11 - Cubre-ventana',
    price: 40,
    image: './ventanasImagenes/11ventana.webp',
});
productList.push({
    name: 'N12 - Cubre-ventana',
    price: 35,
    image: './ventanasImagenes/12ventana.webp',
});
productList.push({
    name: 'N13 - Cubre-ventana',
    price: 35,
    image: './ventanasImagenes/13ventana.webp',
});
productList.push({
    name: 'N14 - Ventana de aluminio color madera',
    price: 65,
    image: './ventanasImagenes/16ventana.webp',
});




//Función para mostrar las lista
function renderProducts(arr){
    for (product of arr){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
                
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.setAttribute('alt', product.name);
                
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
                
        const productInfoDiv = document.createElement('div');
                
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
                
        const productName = document.createElement('p');
        productName.innerText = product.name;
                
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);

        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        const productLink = document.createElement('a');

        productImgCart.setAttribute('src', './icons/whatsapp.webp');
        productLink.setAttribute('href', 'https://api.whatsapp.com/send?phone=+593995680603&text=Hola,%20vengo%20de%20la%20p%C3%A1gina%20web%20HIERRO,%20ACERO%20Y%20ALUMINIO%20EC,%20en%20la%20secci%C3%B3n%20de%20Ventanas-Cubreventas%20y%20quer%C3%ADa%20saber%20sobre...');
        productLink.setAttribute('target', '_blank');
    
        productInfoFigure.appendChild(productImgCart);
        
                
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productLink);
        productLink.appendChild(productInfoFigure);


        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
        
        cardsContainers.appendChild(productCard);
    
    }
}
renderProducts(productList);