//Añadir elementos
const cardsContainers = document.querySelector('.cards-container');
const productList = [];

//Lisa de los elementos
productList.push({
    name: 'N1 - Escalera caracol',
    price: 800,
    image: './escalerasImagenes/1Escalera.webp',
});
productList.push({
    name: 'N2 - Gradas metálicas con pasamanos',
    price: 600,
    image: './escalerasImagenes/2Escalera.webp',
});
productList.push({
    name: 'N3 - Pasamano de hierro',
    price: 45,
    image: './escalerasImagenes/3Escalera.webp',
});
productList.push({
    name: 'N4 - Pasamanos acero inox',
    price: 110,
    image: './escalerasImagenes/4Escalera.webp',
});
productList.push({
    name: 'N5 - Pasamanos acero inox',
    price: 45,
    image: './escalerasImagenes/1Pasamanos.webp',
});
productList.push({
    name: 'N6 - Pasamanos acero inox',
    price: 45,
    image: './escalerasImagenes/2Pasamanos.webp',
});
productList.push({
    name: 'N7 - Pasamanos de hierro',
    price: 45,
    image: './escalerasImagenes/3Pasamanos.webp',
});
productList.push({
    name: 'N8 - Pasamanos de acero inox con vidrio templado',
    price: 210,
    image: './escalerasImagenes/4Pasamanos.webp',
});
productList.push({
    name: 'N9 - Pasamanos de hierro',
    price: 45,
    image: './escalerasImagenes/5Pasamanos.webp',
});
productList.push({
    name: 'N10 - Pasamanos de hierro',
    price: 45,
    image: './escalerasImagenes/6Pasamanos.webp',
});
productList.push({
    name: 'N11 - Pasamanos de hierro',
    price: 45,
    image: './escalerasImagenes/7Pasamanos.webp',
});
productList.push({
    name: 'N12 - Pasamanos de acero inox',
    price: 110,
    image: './escalerasImagenes/8Pasamanos.webp',
});
productList.push({
    name: 'N13 - Pasamanos de hierro',
    price: 45,
    image: './escalerasImagenes/9Pasamanos.webp',
});

productList.push({
    name: 'N14 - Pasamanos inox',
    price: 110,
    image: './escalerasImagenes/11Pasamanos.webp',
});
productList.push({
    name: 'N15 - Pasamanos de hierro',
    price: 45,
    image: './escalerasImagenes/13Pasamanos.webp',
});
productList.push({
    name: 'N16 - Pasamanos acero inox',
    price: 110,
    image: './escalerasImagenes/15Pasamanos.webp',
});
productList.push({
    name: 'N17 - Pasamanos acero inox',
    price: 110,
    image: './escalerasImagenes/17Pasamanos.webp',
});
productList.push({
    name: 'N18 - Pasamanos acero inox',
    price: 110,
    image: './escalerasImagenes/18Pasamanos.webp',
});
productList.push({
    name: 'N19 - Pasamanos acero inox',
    price: 110,
    image: './escalerasImagenes/19Pasamanos.webp',
});
productList.push({
    name: 'N20 - Pasamanos hierro',
    price: 45,
    image: './escalerasImagenes/20Pasamanos.webp',
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
        productLink.setAttribute('href', 'https://api.whatsapp.com/send?phone=+593995680603&text=Hola,%20vengo%20de%20la%20p%C3%A1gina%20web%20HIERRO,%20ACERO%20Y%20ALUMINIO%20EC,%20en%20la%20secci%C3%B3n%20de%20escaleras-pasamanos%20y%20quer%C3%ADa%20saber%20sobre...');
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