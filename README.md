<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Shahenda Store</title>

<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Inter:wght@300;400;500&display=swap" rel="stylesheet">

<style>
body{
margin:0;
font-family:Inter;
background:#0a0a0a;
color:#fff;
}

/* HERO */
.hero{
display:flex;
justify-content:space-between;
align-items:center;
padding:80px;
min-height:100vh;
background:radial-gradient(circle at top, #1a1206, #000);
}

.hero h1{
font-family:Playfair Display;
font-size:70px;
line-height:1.1;
font-weight:700;
background:linear-gradient(90deg,#ffd700,#fff);
-webkit-background-clip:text;
-webkit-text-fill-color:transparent;
}

.hero p{
max-width:400px;
opacity:0.8;
}

.bottle{
width:320px;
height:420px;
background:linear-gradient(145deg,#111,#222);
border-radius:30px;
box-shadow:0 0 80px rgba(255,215,0,0.2);
display:flex;
align-items:center;
justify-content:center;
font-size:40px;
border:1px solid rgba(255,215,0,0.3);
}

/* FILTERS */
.filters{
display:flex;
gap:15px;
padding:20px 80px;
}

.filters button{
padding:10px 18px;
border:1px solid rgba(255,215,0,0.3);
background:transparent;
color:#fff;
border-radius:20px;
cursor:pointer;
}

.filters button.active{
background:#ffd700;
color:#000;
}

/* PRODUCTS */
.grid{
display:grid;
grid-template-columns:repeat(4,1fr);
gap:25px;
padding:40px 80px;
}

.card{
background:#111;
border-radius:25px;
padding:20px;
border:1px solid rgba(255,215,0,0.1);
transition:0.3s;
}

.card:hover{
transform:translateY(-10px);
border-color:rgba(255,215,0,0.4);
}

.img{
height:200px;
border-radius:20px;
background:linear-gradient(145deg,#222,#333);
display:flex;
align-items:center;
justify-content:center;
overflow:hidden;
}

.img img{
width:100%;
height:100%;
object-fit:cover;
}

.price{
color:#ffd700;
font-weight:600;
}

button.buy{
width:100%;
margin-top:10px;
padding:12px;
background:linear-gradient(90deg,#ffd700,#ffed4e);
border:none;
border-radius:12px;
cursor:pointer;
font-weight:bold;
}
</style>
</head>

<body>

<div class="hero">
<div>
<h1>Luxury scents,<br>clean shopping,<br>instant WhatsApp orders.</h1>
<p>Explore Shahenda Store premium perfumes collection in elegant sizes.</p>
</div>

<div class="bottle">🖤</div>
</div>

<div class="filters">
<button class="active">ALL</button>
<button>WOMEN</button>
<button>MEN</button>
<button>UNISEX</button>
</div>

<div class="grid" id="grid"></div>

<script>

const products=[
{name:"Baccarat Rouge",price:"1,650 EGP",img:"https://source.unsplash.com/400x500/?luxury,perfume"},
{name:"Khamra",price:"950 EGP",img:"https://source.unsplash.com/400x500/?arabic,perfume"},
{name:"Libre",price:"1,450 EGP",img:"https://source.unsplash.com/400x500/?perfume,bottle"},
{name:"Dior",price:"1,550 EGP",img:"https://source.unsplash.com/400x500/?dior,perfume"},
{name:"Chanel No.5",price:"1,650 EGP",img:"https://source.unsplash.com/400x500/?chanel,perfume"},
{name:"Miss Dior",price:"1,200 EGP",img:"https://source.unsplash.com/400x500/?rose,perfume"}
];

function load(){
let grid=document.getElementById("grid");

products.forEach(p=>{
let card=document.createElement("div");
card.className="card";

card.innerHTML=`
<div class="img">
<img src="${p.img}">
</div>
<h3>${p.name}</h3>
<p class="price">${p.price}</p>
<button class="buy" onclick="order('${p.name}')">Buy Now</button>
`;

grid.appendChild(card);
});
}

function order(name){
window.open("https://wa.me/201110511138?text=عايز اطلب "+name,"_blank");
}

load();

</script>

</body>
</html>
