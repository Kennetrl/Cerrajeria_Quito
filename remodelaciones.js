//Añadir elementos
const cardsContainers = document.querySelector('.cards-container');
const productList = [];

//Lisa de los elementos
productList.push({
    name: 'Piso Flotante',
    price: 16,
    image: './otrosImagenes/1PisoFlotante.webp',
});
productList.push({
    name: 'Pérgola de aluminio con policarbonato',
    price: 55,
    image: './otrosImagenes/1otros.webp',
});
productList.push({
    name: 'Pérgola con policabonato',
    price: 55,
    image: './otrosImagenes/3otros.webp',
});
productList.push({
    name: 'Pérgola con policabonato',
    price: 55,
    image: './otrosImagenes/4otros.webp',
});
productList.push({
    name: 'Techo con policarbonato',
    price: 55,
    image: './otrosImagenes/5otros.webp',
});
productList.push({
    name: 'Nova losa',
    price: 40,
    image: './otrosImagenes/6otros.webp',
});
productList.push({
    name: 'Policarbonato con hierro',
    price: 55,
    image: './otrosImagenes/7otros.webp',
});
productList.push({
    name: 'Techo metálico tipo teja',
    price: 40,
    image: './otrosImagenes/8otros.webp',
});
productList.push({
    name: 'Pérgola con policarbonato',
    price: 55,
    image: './otrosImagenes/9otros.webp',
});
productList.push({
    name: 'Cubierta de policabonato sencilla',
    price: 50,
    image: './otrosImagenes/10otros.webp',
});
productList.push({
    name: 'Cubierta de policabonato corrediza',
    price: 55,
    image: './otrosImagenes/11otros.webp',
});
productList.push({
    name: 'Cubierta de policabonato',
    price: 55,
    image: './otrosImagenes/12otros.webp',
});
productList.push({
    name: 'Cubierta de hierro con policarbonato corrediza',
    price: 65,
    image: './otrosImagenes/13otros.gif',
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
        productImgCart.setAttribute('alt', 'Contactar por WhatsApp');
        productLink.setAttribute('href', 'https://api.whatsapp.com/send?phone=+593995680603&text=Hola,%20vengo%20de%20la%20p%C3%A1gina%20web%20HIERRO,%20ACERO%20Y%20ALUMINIO%20EC,%20en%20la%20secci%C3%B3n%20de%20Otros%20y%20quer%C3%ADa%20saber%20sobre...');
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