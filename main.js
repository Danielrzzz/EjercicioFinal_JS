const products = [
  {
    name: 'Aceite de Aguacate corporal 125ml',
    price: 16.85,
    stars: 4.8,
    reviews: 829,
    seller: 'Natures Oils',
    brand: 'Bio Cesta',
    Referencia: '21100009',
    image: 'https://www.herbolarionavarro.es/media/catalog/product/8/4/8432430006482.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=1024&width=1024&canvas=1024:1024'
  },
  {
    name: 'Aceite esencial de Manzanilla 12ml',
    price: 16.15,
    stars: 4.2,
    reviews: 340,
    seller: 'Natures Oils',
    brand: 'Bio Cesta',
    Referencia: '13104452',
    image: 'https://www.herbolarionavarro.es/media/catalog/product/8/4/8432430005805.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=1024&width=1024&canvas=1024:1024'
  },
  {
    name: 'Aceite de Aguacate 250ml',
    price: 12.05,
    stars: 4.6,
    reviews: 300,
    seller: 'Natures Oils',
    brand: 'Olivado',
    Referencia: '99700990',
    image: 'https://www.herbolarionavarro.es/media/catalog/product/a/c/aceite-de-aguacate-250ml-.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=1024&width=1024&canvas=1024:1024'
  },
  {
    name: 'Aceite esencial de Naranja 12ml',
    price: 11.05,
    stars: 4.3,
    reviews: 130,
    seller: 'Natures Oils',
    brand: 'Bio Cesta',
    Referencia: '32401018',
    image: 'https://www.herbolarionavarro.es/media/catalog/product/8/4/8432430010540.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=1024&width=1024&canvas=1024:1024'
  },
  {
    name: 'Aceite esencial de Limón ecológico 30ml',
    price: 13.49,
    stars: 4.0,
    reviews: 180,
    seller: 'Natures Oils',
    brand: 'Bio Cesta',
    Referencia: '99706143',
    image: 'https://www.herbolarionavarro.es/media/catalog/product/8/4/8432430106724.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=1024&width=1024&canvas=1024:1024'
  },
  {
    name: 'Aceite de almendras dulces 500ml',
    price: 12.99,
    stars: 4.9,
    reviews: 800,
    seller: 'Natures Oils',
    brand: 'Terra Verda',
    Referencia: '32304045',
    image: 'https://www.herbolarionavarro.es/media/catalog/product/3/2/32304045_1.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=1024&width=1024&canvas=1024:1024'
  },
  {
    name: 'Complejo de Aceites de Espino Amarillo 12ml',
    price: 19.99,
    stars: 4.8,
    reviews: 1233,
    seller: 'Natures Oils',
    brand: 'Natura Siberica',
    Referencia: '99713242',
    image: 'https://www.herbolarionavarro.es/media/catalog/product/a/c/aceite_espinoamarillo_4744183010192_b.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=1024&width=1024&canvas=1024:1024'
  },
  {
    name: 'Aceite esencial de Romero ecológico 30ml',
    price: 19.99,
    stars: 5.0,
    reviews: 450,
    seller: 'Natures Oils',
    brand: 'Bio Cesta',
    Referencia: '99706141',
    image: 'https://www.herbolarionavarro.es/media/catalog/product/8/4/8432430106748.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=1024&width=1024&canvas=1024:1024'
  },
  {
    name: 'Aceite de zanahoria corporal 125ml',
    price: 16.99,
    stars: 4.5,
    reviews: 233,
    seller: 'Natures Oils',
    brand: 'Bio Cesta',
    Referencia: '99709006',
    image: 'https://www.herbolarionavarro.es/media/catalog/product/a/c/aceite-de-zanahoria-125ml.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=1024&width=1024&canvas=1024:1024'
  },
  {
    name: 'Aceite esencial de Repelente de Insectos 12ml',
    price: 7.99,
    stars: 4.5,
    reviews: 185,
    seller: 'Natures Oils',
    brand: 'Bio Cesta',
    Referencia: '32401028',
    image: 'https://www.herbolarionavarro.es/media/catalog/product/8/4/8432430010649.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=1024&width=1024&canvas=1024:1024'
  }
];
let listContainer = document.getElementById('product-list'); 
products.forEach(product => { //bucle para crear cada div de productos dentro del HTML
    const productDiv = document.createElement('div'); //donde voy a meter cada elemento del producto
    productDiv.className = 'product';
    const img = document.createElement('img'); //agrego la imagen con el nombre como alt
    img.src = product.image; 
    img.alt = product.name;
    const name = document.createElement('h3'); //nombre del producto
    name.textContent = product.name;
    const price = document.createElement('p'); //precio
    price.textContent = `Price: ${product.price} €`;
    const stars = document.createElement('p'); //valoraciones
    stars.textContent = `Rating: ${product.stars} (${product.reviews} reviews)`;
    const seller = document.createElement('p'); //vendedor
    seller.textContent = `Seller: ${product.seller}`;
    const brand = document.createElement('p'); //marca
    brand.textContent = `Brand: ${product.brand}`;
    const referencia = document.createElement('p'); //referencias
    referencia.textContent = `Reference: ${product.Referencia}`;
    productDiv.appendChild(img);
    productDiv.appendChild(name);
    productDiv.appendChild(price);
    productDiv.appendChild(stars);
    productDiv.appendChild(seller);
    productDiv.appendChild(brand);
    productDiv.appendChild(referencia);
    listContainer.appendChild(productDiv);
});

const header = document.querySelector('header');

const h1 = document.createElement('h1');
h1.textContent = 'Nature Oils';

const nav = document.createElement('nav');
['Home', 'Products', 'About', 'Contact'].forEach(text => {
    const links = document.createElement('a');
    links.href = '#';
    links.textContent = text;
    nav.appendChild(links);
});

const intro = document.createElement('section');
intro.id = 'introduction';
const introText = document.createElement('p');
introText.textContent = 'A healthy option, for everyone.';
intro.appendChild(introText);

header.append(h1, nav, intro);

const article = document.querySelector('article');
const h2 = document.createElement('h2');
h2.textContent = 'Featured Product';

const featured = document.createElement('div');
featured.className = 'featured-products';
featured.innerHTML = `
<img src="https://www.herbolarionavarro.es/media/catalog/product/a/c/aceite_espinoamarillo_4744183010192_b.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=1024&width=1024&canvas=1024:1024"
         alt="Complejo de Aceites de Espino Amarillo 12ml">
    <h3>Complejo de Aceites de Espino Amarillo 12ml</h3>
    <p>Price: 19.99 €</p>
    <p>Rating: 4.8</p>
`;
article.append(h2, featured);

const listConteiner = document.createElement('div');
listConteiner.id = 'product-list';
article.appendChild(listConteiner);
document.body.appendChild(listConteiner);

const footer = document.querySelector('footer');
const textIntro = document.createElement('p');
textIntro.textContent = '© 2025 Natures Oils. All rights reserved.';
footer.appendChild(textIntro);