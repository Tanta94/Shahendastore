<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Shahenda Store - Premium Perfumes</title>

<link href="https://fonts.googleapis.com/css2?family=Playfair+Display&family=Inter&display=swap" rel="stylesheet">

<style>
body {background:#0a0a0a;color:#fff;font-family:Inter;text-align:center;}
.products-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:20px;padding:20px;}
.product-card{background:#111;padding:20px;border-radius:15px;border:1px solid gold;}
.product-image img{width:100%;height:200px;object-fit:cover;border-radius:10px;}
button{background:gold;border:none;padding:10px;margin-top:10px;cursor:pointer;}
.size-btn{margin:5px;padding:5px 10px;border:1px solid gold;background:transparent;color:gold;cursor:pointer;}
.size-btn.active{background:gold;color:black;}
</style>
</head>

<body>

<h1>Shahenda Store</h1>

<div class="products-grid" id="productsGrid"></div>

<script>

const products = [
{ name:"Baccarat Rouge", price:"L.E350", desc:"Luxury scent", image:"https://source.unsplash.com/300x400/?baccarat,perfume" },
{ name:"Khamra", price:"L.E280", desc:"Rich oriental", image:"https://source.unsplash.com/300x400/?arabic,perfume" },
{ name:"Libre", price:"L.E320", desc:"Elegant feminine", image:"https://source.unsplash.com/300x400/?ysl,perfume" },
{ name:"Dior", price:"L.E295", desc:"Classic luxury", image:"https://source.unsplash.com/300x400/?dior,perfume" },
{ name:"Chanel No.5", price:"L.E420", desc:"Iconic fragrance", image:"https://source.unsplash.com/300x400/?chanel,perfume" },
{ name:"Coco Mademoiselle", price:"L.E380", desc:"Soft & classy", image:"https://source.unsplash.com/300x400/?chanel,perfume,bottle" },
{ name:"Good Girl", price:"L.E310", desc:"Bold & sweet", image:"https://source.unsplash.com/300x400/?heels,perfume" },
{ name:"Miss Dior", price:"L.E290", desc:"Floral beauty", image:"https://source.unsplash.com/300x400/?rose,perfume" },
{ name:"Valentino", price:"L.E340", desc:"Elegant touch", image:"https://source.unsplash.com/300x400/?valentino,perfume" },
{ name:"Black Opium", price:"L.E305", desc:"Dark coffee scent", image:"https://source.unsplash.com/300x400/?black,perfume" },
{ name:"La Vie Est Belle", price:"L.E315", desc:"Sweet luxury", image:"https://source.unsplash.com/300x400/?lancome,perfume" },
{ name:"Dior Sauvage", price:"L.E275", desc:"Fresh masculine", image:"https://source.unsplash.com/300x400/?men,perfume" },
{ name:"Bleu de Chanel", price:"L.E330", desc:"Deep & fresh", image:"https://source.unsplash.com/300x400/?blue,perfume" },
{ name:"Acqua di Gio", price:"L.E260", desc:"Ocean vibes", image:"https://source.unsplash.com/300x400/?water,perfume" },
{ name:"Hawas", price:"L.E220", desc:"Modern fresh", image:"https://source.unsplash.com/300x400/?fresh,perfume" },
{ name:"One Million", price:"L.E285", desc:"Gold luxury", image:"https://source.unsplash.com/300x400/?gold,perfume" },
{ name:"212", price:"L.E240", desc:"City style", image:"https://source.unsplash.com/300x400/?urban,perfume" },
{ name:"Bad Boy", price:"L.E265", desc:"Strong vibe", image:"https://source.unsplash.com/300x400/?dark,perfume" },
{ name:"Jean Paul", price:"L.E360", desc:"Bold classic", image:"https://source.unsplash.com/300x400/?jeanpaul,perfume" },
{ name:"Stronger With You", price:"L.E290", desc:"Warm scent", image:"https://source.unsplash.com/300x400/?warm,perfume" }
];

const sizes = ["30ml","50ml","100ml"];

function generateProducts(){
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
<b>${p.price}</b>

<div>
${sizes.map(s=>`<button class="size-btn">${s}</button>`).join("")}
</div>

<button onclick="order('${p.name}')">اطلب الآن</button>
`;

grid.appendChild(card);
});
}

function order(product){
let url="https://wa.me/201110511138?text=عايز اطلب "+product;
window.open(url,"_blank");
}

generateProducts();

</script>

</body>
</html>
