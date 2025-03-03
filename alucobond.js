//Añadir elementos
const cardsContainers = document.querySelector('.cards-container');
const productList = [];

//Lisa de los elementos
productList.push({
    name: 'N1 - Fachada de Alucobond',
    image: './alucobondImagenes/1alucobond.webp',
});
productList.push({
    name: 'N2 - Fachada de Alucobond',
    image: './alucobondImagenes/2alucobond.webp',
});
productList.push({
    name: 'N3 - Fachada de Alucobond',
    image: './alucobondImagenes/3alucobond.webp',
});
productList.push({
    name: 'N4 - Fachada de Alucobond',
    image: './alucobondImagenes/4alucobond.webp',
});

productList.push({
    name: 'N5 - Fachada de Alucobond',
    image: './alucobondImagenes/5alucobond.webp',
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
                
        const productName = document.createElement('p');
        productName.innerText = product.name;
                
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