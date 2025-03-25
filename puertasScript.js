//Añadir elementos
const cardsContainers = document.querySelector('.cards-container');
const productList = [];

//Lisa de los elementos
productList.push({
    name: 'N1 - Puerta con tol perforado',
    price: 250,
    image: './puertasImagenes/1puerta.webp',
});
productList.push({
    name: 'N2 - Puerta con tol galvanizado',
    price: 250,
    image: './puertasImagenes/2puerta.webp',
});
productList.push({
    name: 'N3 - Puerta de Garage',
    price: 550,
    image: './puertasImagenes/3puerta.webp',
});
productList.push({
    name: 'N4 - Puerta de tol',
    price: 250,
    image: './puertasImagenes/4puerta.webp',
});
productList.push({
    name: 'N5 - Puerta de tol',
    price: 250,
    image: './puertasImagenes/5puerta.webp',
});
productList.push({
    name: 'N6 - Puerta corrediza de aluminio sencilla',
    price: 250,
    image: './puertasImagenes/6puerta.webp',
});
productList.push({
    name: 'N7 - Puerta de garage con alucobond',
    price: 550,
    image: './puertasImagenes/7puerta.webp',
});
productList.push({
    name: 'N8 - Cubre-puerta',
    price: 250,
    image: './puertasImagenes/8puerta.webp',
});

productList.push({
    name: 'N11 - Puerta de tol',
    price: 250,
    image: './puertasImagenes/11puerta.webp',
});
productList.push({
    name: 'N12 - Puerta batiente',
    price: 220,
    image: './puertasImagenes/12puerta.webp',
});
productList.push({
    name: 'N14 - Puerta de Garage',
    price: 500,
    image: './puertasImagenes/14puerta.webp',
});
productList.push({
    name: 'N15 - Puerta mixta',
    price: 240,
    image: './puertasImagenes/15puerta.webp',
});
productList.push({
    name: 'N16 - Puerta batiente de aluminio',
    price: 250,
    image: './puertasImagenes/16puerta.webp',
});
productList.push({
    name: 'N17 - Puerta de garage',
    price: 550,
    image: './puertasImagenes/17puerta.webp',
});
productList.push({
    name: 'N22 - Puerta de garage',
    price: 650,
    image: './puertasImagenes/22puerta.webp',
});
productList.push({
    name: 'N25 - Puerta de tol',
    price: 250,
    image: './puertasImagenes/25puerta.webp',
});
productList.push({
    name: 'N28 - Cubre-puerta',
    price: 250,
    image: './puertasImagenes/28puerta.webp',
});
productList.push({
    name: 'N29 - Puerta de tol',
    price: 250,
    image: './puertasImagenes/29puerta.webp',
});
productList.push({
    name: 'N30 - Puerta de tol',
    price: 250,
    image: './puertasImagenes/30puerta.webp',
});
productList.push({
    name: 'N31 - Puerta de tol',
    price: 250,
    image: './puertasImagenes/31puerta.webp',
});
productList.push({
    name: 'N32 - Puerta de tol',
    price: 250,
    image: './puertasImagenes/32puerta.webp',
});
productList.push({
    name: 'N33 - Cubre-puerta',
    price: 250,
    image: './puertasImagenes/33puerta.webp',
});
productList.push({
    name: 'N34 - Puerta de garage',
    price: 600,
    image: './puertasImagenes/34puerta.webp',
});
productList.push({
    name: 'N35 - Puerta de garage',
    price: 600,
    image: './puertasImagenes/35puerta.webp',
});
productList.push({
    name: 'N36 - Puerta peatonal',
    price: 250,
    image: './puertasImagenes/36puerta.webp',
});
productList.push({
    name: 'N37 - Puerta mixta',
    price: 240,
    image: './puertasImagenes/37puerta.webp',
});
productList.push({
    name: 'N38 - Puerta tamborada de tol',
    price: 350,
    image: './puertasImagenes/38puerta.webp',
});
productList.push({
    name: 'N40 - Cubre-puerta',
    price: 250,
    image: './puertasImagenes/40puerta.webp',
});
productList.push({
    name: 'N42 - Cubre-puerta',
    price: 250,
    image: './puertasImagenes/42puerta.webp',
});
productList.push({
    name: 'N43 - Puerta de Vidrio Templado',
    price: 480,
    image: './puertasImagenes/43puerta.webp',
});
productList.push({
    name: 'N44 - Puerta metálica peatonal tipo madera',
    price: 250,
    image: './puertasImagenes/44puerta.webp',
});
productList.push({
    name: 'N47 - Puerta metálica tamborada o blindada',
    price: 350,
    image: './puertasImagenes/47puerta.webp',
});
productList.push({
    name: 'N48 - Puerta metálica de garaje tipo madera',
    price: 600,
    image: './puertasImagenes/48puerta.webp',
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
        productLink.setAttribute('href', 'https://api.whatsapp.com/send?phone=+593995680603&text=Hola,%20vengo%20de%20la%20p%C3%A1gina%20web%20HIERRO,%20ACERO%20Y%20ALUMINIO%20EC,%20en%20la%20secci%C3%B3n%20de%20puertas%20y%20quer%C3%ADa%20saber%20sobre...');
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