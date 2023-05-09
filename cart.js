const product = [{
        id: 1,
        image: 'https://5.imimg.com/data5/ANDROID/Default/2022/2/ZB/HX/DK/7349419/product-jpeg-500x500.jpg',
        title: 'Milk',
        price: '$1',
    },
    {
        id: 2,
        image: 'image/aa-1.jpg',
        title: 'Headphones',
        price: '$20',
    },
    {
        id: 3,
        image: 'image/aa-1.jpg',
        title: 'Headphones',
        price: '$20',
    },
    {
        id: 4,
        image: 'image/aa-1.jpg',
        title: 'Headphones',
        price: '$20',
    },
    {
        id: 5,
        image: 'image/aa-1.jpg',
        title: 'Headphones',
        price: '$20',
    },
    {
        id: 6,
        image: 'image/aa-1.jpg',
        title: 'Headphones',
        price: '$20',
    },
    {
        id: 7,
        image: 'image/aa-1.jpg',
        title: 'Headphones',
        price: '$20',
    },
    {
        id: 8,
        image: 'image/aa-1.jpg',
        title: 'Headphones',
        price: '$20',
    }
]
const categories = [...new ServiceWorker(product.map((item) => { return item }))]
let cart = document.getElementById('root')
cart.innerHTML = categories.map((item) => {
    var { image, title, price } = item;
    return (
        `<div class="box">
            <div class="img-box">
<img src=${image}></img>
            </div>
            <div class="left">
            <p>${title}</p>
            <h2>${price}</h2>
            <button>Add To Cart</button>
            </div>
        </div>`
    )
}).join('')