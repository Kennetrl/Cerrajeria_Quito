//Añadir elementos
const cardsContainers = document.querySelector('.cards-container');
const productList = [];

//Lista de los elementos
productList.push({
    name: 'N1 - Estructura Metálica',
    image: './estructurasImagenes/1estructuraMetalica.webp',
});
productList.push({
    name: 'N2 - Estructura Metálica',
    image: './estructurasImagenes/2estructuraMetalica.webp',
});
productList.push({
    name: 'N3 - Estructura Metálica',
    image: './estructurasImagenes/3estructuraMetalica.webp',
});
productList.push({
    name: 'N4 - Estructura Metálica',
    image: './estructurasImagenes/4estructuraMetalica.webp',
});
productList.push({
    name: 'N5 - Estructura Metálica',
    image: './estructurasImagenes/5estructuraMetalica.webp',
});
productList.push({
    name: 'N6 - Estructura Metálica',
    image: './estructurasImagenes/6estructuraMetalica.webp',
});
productList.push({
    name: 'N7 - Estructura Metálica',
    image: './estructurasImagenes/7estructuraMetalica.webp',
});
productList.push({
    name: 'N8 - Estructura Metálica',
    image: './estructurasImagenes/8estructuraMetalica.webp',
});
productList.push({
    name: 'N9 - Estructura Metálica',
    image: './estructurasImagenes/9estructuraMetalica.webp',
});
productList.push({
    name: 'N10 - Estructura Metálica',
    image: './estructurasImagenes/10estructuraMetalica.webp',
});
productList.push({
    name: 'N11 - Estructura Metálica',
    image: './estructurasImagenes/11estructuraMetalica.webp',
});
productList.push({
    name: 'N12 - Estructura Metálica',
    image: './estructurasImagenes/12estructuraMetalica.webp',
});
productList.push({
    name: 'N13 - Estructura Metálica',
    image: './estructurasImagenes/13estructuraMetalica.webp',
});
productList.push({
    name: 'N14 - Estructura Metálica',
    image: './estructurasImagenes/14estructuraMetalica.webp',
});

//Función para mostrar la lista (sin precios)
function renderProducts(arr) {
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.setAttribute('alt', product.name);

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        const productInfoDiv = document.createElement('div');

        const productName = document.createElement('p');
        productName.innerText = product.name;

        productInfoDiv.appendChild(productName);

        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        const productLink = document.createElement('a');

        productImgCart.setAttribute('src', './icons/whatsapp.webp');
        productImgCart.setAttribute('alt', 'Contactar por WhatsApp');
        productLink.setAttribute('href', 'https://api.whatsapp.com/send?phone=+593995680603&text=Hola,%20vengo%20de%20la%20p%C3%A1gina%20web%20HIERRO,%20ACERO%20Y%20ALUMINIO%20EC,%20en%20la%20secci%C3%B3n%20de%20estructuras%20met%C3%A1licas%20y%20quer%C3%ADa%20saber%20sobre...');
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
