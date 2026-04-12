<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Shahenda Store</title>

<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet">

<style>
*{
margin:0;
padding:0;
box-sizing:border-box;
}

body{
font-family:Inter;
background:#070707;
color:#fff;
overflow-x:hidden;
}

/* HERO */
.hero{
display:flex;
justify-content:space-between;
align-items:center;
padding:100px;
min-height:100vh;
background:radial-gradient(circle at top,#1a1408,#000);
}

.hero h1{
font-family:Playfair Display;
font-size:80px;
line-height:1.1;
font-weight:700;
background:linear-gradient(90deg,#ffd700,#fff);
-webkit-background-clip:text;
-webkit-text-fill-color:transparent;
animation:fadeIn 1.5s ease;
}

.hero p{
max-width:420px;
opacity:0.7;
margin-top:20px;
}

.glass-bottle{
width:340px;
height:450px;
border-radius:35px;
background:linear-gradient(145deg,#111,#222);
border:1px solid rgba(255,215,0,0.3);
box-shadow:0 0 120px rgba(255,215,0,0.15);
display:flex;
align-items:center;
justify-content:center;
font-size:60px;
animation:float 4s ease-in-out infinite;
}

/* FILTERS */
.filters{
display:flex;
gap:15px;
padding:20px 100px;
}

.filters button{
padding:10px 20px;
border:1px solid rgba(255,215,0,0.3);
background:transparent;
color:#fff;
border-radius:25px;
cursor:pointer;
transition:0.3s;
}

.filters button:hover,
.filters button.active{
background:#ffd700;
color:#000;
transform:scale(1.05);
}

/* GRID */
.grid{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(280px,1fr));
gap:30px;
padding:50px 100px;
}

.card{
background:linear-gradient(145deg,#111,#0c0c0c);
border-radius:25px;
padding:20px;
border:1px solid rgba(255,215,0,0.1);
transition:0.4s;
position:relative;
overflow:hidden;
}

.card:hover{
transform:translateY(-12px);
border-color:rgba(255,215,0,0.4);
box-shadow:0 30px 60px rgba(0,0,0,0.6);
}

.img{
height:230px;
border-radius:20px;
overflow:hidden;
background:#1a1a1a;
}

.img img{
width:100%;
height:100%;
object-fit:cover;
transition:0.5s;
}

.card:hover img{
transform:scale(1.1);
}

h3{
margin-top:15px;
font-family:Playfair Display;
font-size:22px;
}

.price{
color:#ffd700;
margin-top:5px;
font-weight:600;
}

.buy{
width:100%;
margin-top:15px;
padding:12px;
border:none;
border-radius:12px;
cursor:pointer;
font-weight:bold;
background:linear-gradient(90deg,#ffd700,#ffed4e);
transition:0.3s;
}

.buy:hover{
transform:scale(1.05);
}

/* ANIMATIONS */
@keyframes float{
0%,100%{transform:translateY(0);}
50%{transform:translateY(-20px);}
}

@keyframes fadeIn{
from{opacity:0;transform:translateY(40px);}
to{opacity:1;transform:translateY(0);}
}
</style>
</head>

<body>

<div class="hero">
<div>
<h1>Luxury scents,<br>made for you.</h1>
<p>Premium perfumes delivered instantly via WhatsApp.</p>
</div>

<div class="glass-bottle">🖤</div>
</div>

<div class="filters">
<button class="active">ALL</button>
<button>WOMEN</button>
<button>MEN</button>
<button>UNISEX</button>
</div>

<div class="grid" id="grid"></div>

<script>

const products = [
{name:"Baccarat Rouge",price:"1,650 EGP",img:"https://source.unsplash.com/500x600/?luxury,perfume"},
{name:"Khamra",price:"950 EGP",img:"https://source.unsplash.com/500x600/?arabic,perfume"},
{name:"Libre",price:"1,450 EGP",img:"https://source.unsplash.com/500x600/?perfume,bottle"},
{name:"Dior Sauvage",price:"1,550 EGP",img:"https://source.unsplash.com/500x600/?dior,perfume"},
{name:"Chanel No.5",price:"1,700 EGP",img:"https://source.unsplash.com/500x600/?chanel,perfume"},
{name:"Miss Dior",price:"1,300 EGP",img:"https://source.unsplash.com/500x600/?rose,perfume"},
{name:"Black Opium",price:"1,400 EGP",img:"https://source.unsplash.com/500x600/?black,perfume"},
{name:"One Million",price:"1,200 EGP",img:"https://source.unsplash.com/500x600/?gold,perfume"}
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
<div class="price">${p.price}</div>
<button class="buy" onclick="order('${p.name}')">Order Now</button>
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
