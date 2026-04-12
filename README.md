<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Shahenda Store - Premium Perfumes</title>

<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet">

<style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Inter', sans-serif;
            background: #0a0a0a;
            color: #f0f0f0;
            line-height: 1.6;
            overflow-x: hidden;
        }

        .header {
            background: rgba(10,10,10,0.95);
            backdrop-filter: blur(20px);
            position: fixed;
            top: 0;
            width: 100%;
            z-index: 1000;
            padding: 1rem 0;
            border-bottom: 1px solid rgba(255,215,0,0.1);
        }

        .nav {
            max-width: 1200px;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 2rem;
        }

        .logo {
            font-family: 'Playfair Display', serif;
            font-size: 2rem;
            font-weight: 700;
            background: linear-gradient(135deg,#ffd700,#ffed4e);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        .hero {
            height: 100vh;
            display:flex;
            align-items:center;
            justify-content:center;
            text-align:center;
            background: radial-gradient(ellipse at center, rgba(255,215,0,0.05), transparent);
        }

        .hero-content h1 {
            font-family:'Playfair Display';
            font-size:4rem;
            background:linear-gradient(135deg,#ffd700,#ffed4e);
            -webkit-background-clip:text;
            -webkit-text-fill-color:transparent;
        }

        .products-section {
            padding:120px 2rem;
            max-width:1400px;
            margin:auto;
        }

        .products-grid {
            display:grid;
            grid-template-columns:repeat(auto-fill,minmax(320px,1fr));
            gap:2rem;
        }

        .product-card {
            background:#141414;
            border-radius:20px;
            padding:2rem;
            text-align:center;
            border:1px solid rgba(255,215,0,0.1);
            transition:0.3s;
        }

        .product-card:hover {
            transform:translateY(-10px);
            border-color:rgba(255,215,0,0.3);
        }

        .product-image img {
            width:140px;
            height:200px;
            object-fit:cover;
            border-radius:15px;
        }

        .product-price {
            color:#ffd700;
            font-size:1.4rem;
            font-weight:bold;
        }

        .buy-now-btn {
            margin-top:10px;
            padding:10px;
            width:100%;
            background:linear-gradient(135deg,#ffd700,#ffed4e);
            border:none;
            cursor:pointer;
            font-weight:bold;
        }
</style>
</head>

<body>

<header class="header">
<div class="nav">
<div class="logo">Shahenda Store</div>
</div>
</header>

<section class="hero">
<div class="hero-content">
<h1>Premium Perfumes</h1>
</div>
</section>

<section class="products-section">
<div class="products-grid" id="productsGrid"></div>
</section>

<script>

const products = [
{ name:"Baccarat Rouge", price:"L.E350", desc:"Luxury scent", image:"https://source.unsplash.com/300x400/?baccarat,perfume" },
{ name:"Khamra", price:"L.E280", desc:"Rich oriental", image:"https://source.unsplash.com/300x400/?arabic,perfume" },
{ name:"Libre", price:"L.E320", desc:"Elegant scent", image:"https://source.unsplash.com/300x400/?ysl,perfume" },
{ name:"Dior", price:"L.E295", desc:"Luxury perfume", image:"https://source.unsplash.com/300x400/?dior,perfume" },
{ name:"Chanel No.5", price:"L.E420", desc:"Classic fragrance", image:"https://source.unsplash.com/300x400/?chanel,perfume" },
{ name:"Coco Mademoiselle", price:"L.E380", desc:"Elegant perfume", image:"https://source.unsplash.com/300x400/?chanel,bottle" },
{ name:"Good Girl", price:"L.E310", desc:"Bold scent", image:"https://source.unsplash.com/300x400/?perfume,heels" },
{ name:"Miss Dior", price:"L.E290", desc:"Floral scent", image:"https://source.unsplash.com/300x400/?rose,perfume" },
{ name:"Valentino", price:"L.E340", desc:"Luxury vibe", image:"https://source.unsplash.com/300x400/?valentino,perfume" },
{ name:"Black Opium", price:"L.E305", desc:"Dark scent", image:"https://source.unsplash.com/300x400/?black,perfume" }
];

const sizes=["30ml","50ml","100ml"];

function generate(){
const grid=document.getElementById("productsGrid");

products.forEach(p=>{
let card=document.createElement("div");
card.className="product-card";

card.innerHTML=`
<div class="product-image">
<img src="${p.image}">
</div>

<h3>${p.name}</h3>
<p>${p.desc}</p>
<div class="product-price">${p.price}</div>

<button class="buy-now-btn" onclick="order('${p.name}')">Buy Now</button>
`;

grid.appendChild(card);
});
}

function order(name){
window.open("https://wa.me/201110511138?text=عايز اطلب "+name,"_blank");
}

generate();

</script>

</body>
</html>
