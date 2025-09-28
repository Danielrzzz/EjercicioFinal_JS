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

products.forEach(product => {
    const productDiv = document.createElement('div');
    productDiv.className = 'product';

    const img = document.createElement('img');
    img.src = product.image || '';
    img.alt = product.name || '';

    const name = document.createElement('h3');
    name.textContent = product.name || '';

    const price = document.createElement('p');
    price.textContent = `€ ${product.price?.toFixed(2) || '0.00'}`;

    const seller = document.createElement('p');
    seller.textContent = product.seller ? `Seller: ${product.seller}` : '';

    const brand = document.createElement('p');
    brand.textContent = product.brand ? `Brand: ${product.brand}` : '';

    const referencia = document.createElement('p');
    referencia.textContent = product.Referencia ? `Reference: ${product.Referencia}` : '';

    // Controles: carrito + favorito
    const controls = document.createElement('div');
    controls.className = 'product-controls';

    const cartBtn = document.createElement('button');
    cartBtn.className = 'add-cart-btn';
    cartBtn.textContent = 'Agregar al carrito';
    cartBtn.addEventListener('click', () => {
        // aquí puedes cambiar por la lógica real del carrito
        alert(`"${product.name}" agregado al carrito.`);
    });

    const favLabel = document.createElement('label');
    favLabel.className = 'fav-checkbox';
    const favInput = document.createElement('input');
    favInput.type = 'checkbox';
    favInput.className = 'fav-input';
    const heartSpan = document.createElement('span');
    heartSpan.className = 'heart';
    favLabel.appendChild(favInput);
    favLabel.appendChild(heartSpan);

    controls.appendChild(cartBtn);
    controls.appendChild(favLabel);

    // Añadir todo al productDiv
    productDiv.appendChild(img);
    productDiv.appendChild(name);
    productDiv.appendChild(price);
    productDiv.appendChild(seller);
    productDiv.appendChild(brand);
    productDiv.appendChild(referencia);
    productDiv.appendChild(controls);

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
const featuredProducts = [
  {
    name: 'Complejo de Aceites de Espino Amarillo 12ml',
    price: 19.99,
    stars: 4.8,
    image: 'https://www.herbolarionavarro.es/media/catalog/product/a/c/aceite_espinoamarillo_4744183010192_b.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=1024&width=1024&canvas=1024:1024'
  },
  {
    name: 'Aceite esencial de Romero ecológico 30ml',
    price: 19.99,
    stars: 5.0,
    image: 'https://www.herbolarionavarro.es/media/catalog/product/8/4/8432430106748.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=1024&width=1024&canvas=1024:1024'
  },
  {
    name: 'Aceite de almendras dulces 500ml',
    price: 12.99,
    stars: 4.9,
    image: 'https://www.herbolarionavarro.es/media/catalog/product/3/2/32304045_1.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=1024&width=1024&canvas=1024:1024'
  }
];
article.append(h2, featured);

const featuredContainer = document.createElement('div');
featuredContainer.className = 'featured-products-carousel';

const img = document.createElement('img');
const title = document.createElement('h3');
const price = document.createElement('p');
const rating = document.createElement('p');

featuredContainer.append(img, title, price, rating);

// Botones de navegación
const prevBtn = document.createElement('button');
prevBtn.textContent = '⟨';
const nextBtn = document.createElement('button');
nextBtn.textContent = '⟩';
featuredContainer.append(prevBtn, nextBtn);

article.appendChild(featuredContainer);

let currentIndex = 0;

function showFeaturedProduct(index) {
  const product = featuredProducts[index];
  img.src = product.image;
  img.alt = product.name;
  title.textContent = product.name;
  price.textContent = `Price: ${product.price} €`;
  rating.textContent = `Rating: ${product.stars}`;
}

showFeaturedProduct(currentIndex);

prevBtn.onclick = () => {
  currentIndex = (currentIndex - 1 + featuredProducts.length) % featuredProducts.length;
  showFeaturedProduct(currentIndex);
};

nextBtn.onclick = () => {
  currentIndex = (currentIndex + 1) % featuredProducts.length;
  showFeaturedProduct(currentIndex);
};

// Carrusel automático cada 4 segundos
setInterval(() => {
  nextBtn.click();
}, 4000);

const footer = document.querySelector('footer');
const textIntro = document.createElement('p');
textIntro.textContent = 'Creado por Daniel Rodriguez - DAM';
footer.appendChild(textIntro);

const secondLine = document.createElement('p');
secondLine.textContent = '© 2025 Natures Oils. All rights reserved.';
footer.appendChild(secondLine);