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

        /* Header */
        .header {
            background: rgba(10, 10, 10, 0.95);
            backdrop-filter: blur(20px);
            position: fixed;
            top: 0;
            width: 100%;
            z-index: 1000;
            padding: 1rem 0;
            border-bottom: 1px solid rgba(255, 215, 0, 0.1);
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
            background: linear-gradient(135deg, #ffd700, #ffed4e);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        .cart-icon {
            position: relative;
            font-size: 1.5rem;
            color: #ffd700;
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .cart-icon:hover {
            transform: scale(1.1);
            color: #ffed4e;
        }

        /* Hero Section */
        .hero {
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            background: radial-gradient(ellipse at center, rgba(255, 215, 0, 0.05) 0%, transparent 70%);
            position: relative;
        }

        .hero-content h1 {
            font-family: 'Playfair Display', serif;
            font-size: clamp(3rem, 8vw, 6rem);
            font-weight: 700;
            background: linear-gradient(135deg, #ffd700, #ffed4e);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            margin-bottom: 1.5rem;
            animation: glow 2s ease-in-out infinite alternate;
        }

        .hero-content p {
            font-size: 1.3rem;
            max-width: 600px;
            margin: 0 auto 3rem;
            opacity: 0.9;
        }

        .cta-button {
            display: inline-block;
            padding: 1rem 3rem;
            background: linear-gradient(135deg, #ffd700, #ffed4e);
            color: #000;
            text-decoration: none;
            border-radius: 50px;
            font-weight: 600;
            font-size: 1.1rem;
            transition: all 0.3s ease;
            box-shadow: 0 10px 30px rgba(255, 215, 0, 0.3);
        }

        .cta-button:hover {
            transform: translateY(-3px);
            box-shadow: 0 20px 40px rgba(255, 215, 0, 0.4);
        }

        /* Products Section */
        .products-section {
            padding: 120px 2rem 4rem;
            max-width: 1400px;
            margin: 0 auto;
        }

        .section-title {
            font-family: 'Playfair Display', serif;
            font-size: clamp(2.5rem, 5vw, 4rem);
            text-align: center;
            margin-bottom: 4rem;
            background: linear-gradient(135deg, #ffd700, #ffed4e);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        .products-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
            gap: 2rem;
        }

        .product-card {
            background: rgba(20, 20, 20, 0.8);
            border-radius: 20px;
            padding: 2rem;
            text-align: center;
            transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            border: 1px solid rgba(255, 215, 0, 0.1);
            position: relative;
            overflow: hidden;
        }

        .product-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255, 215, 0, 0.05), transparent);
            transition: left 0.5s;
        }

        .product-card:hover::before {
            left: 100%;
        }

        .product-card:hover {
            transform: translateY(-15px) scale(1.02);
            background: rgba(30, 30, 30, 0.95);
            box-shadow: 0 30px 60px rgba(255, 215, 0, 0.2);
            border-color: rgba(255, 215, 0, 0.3);
        }

        .product-image {
            width: 140px;
            height: 200px;
            margin: 0 auto 1.5rem;
            border-radius: 15px;
            position: relative;
            overflow: hidden;
            transition: all 0.4s ease;
            background: linear-gradient(145deg, #1a1a1a, #2a2a2a);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 3rem;
        }

        .product-card:hover .product-image {
            transform: scale(1.05) rotate(2deg);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
        }

        .product-name {
            font-family: 'Playfair Display', serif;
            font-size: 1.4rem;
            font-weight: 600;
            margin-bottom: 0.5rem;
            color: #f0f0f0;
        }

        .product-description {
            color: #b0b0b0;
            font-size: 0.95rem;
            margin-bottom: 1.5rem;
            line-height: 1.5;
        }

        .product-price {
            font-size: 1.5rem;
            font-weight: 700;
            color: #ffd700;
            margin-bottom: 1.5rem;
        }

        .size-selector {
            display: flex;
            gap: 0.5rem;
            margin-bottom: 1.5rem;
            justify-content: center;
            flex-wrap: wrap;
        }

        .size-btn {
            padding: 0.5rem 1rem;
            border: 2px solid rgba(255, 215, 0, 0.3);
            background: transparent;
            color: #ffd700;
            border-radius: 25px;
            font-size: 0.9rem;
            font-weight: 500;
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .size-btn:hover, .size-btn.active {
            background: #ffd700;
            color: #000;
            border-color: #ffd700;
            transform: scale(1.05);
        }

        .buy-now-btn {
            width: 100%;
            padding: 1rem;
            background: linear-gradient(135deg, #ffd700, #ffed4e);
            color: #000;
            border: none;
            border-radius: 12px;
            font-weight: 600;
            font-size: 1rem;
            cursor: pointer;
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
        }

        .buy-now-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 15px 35px rgba(255, 215, 0, 0.4);
        }

        .buy-now-btn:active {
            transform: translateY(0);
        }

        /* Animations */
        @keyframes glow {
            from { filter: drop-shadow(0 0 10px rgba(255, 215, 0, 0.5)); }
            to { filter: drop-shadow(0 0 20px rgba(255, 215, 0, 0.8)); }
        }

        @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
        }

        /* Responsive */
        @media (max-width: 768px) {
            .nav {
                padding: 0 1rem;
            }
            
            .products-grid {
                grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
                gap: 1.5rem;
            }
            
            .product-card {
                padding: 1.5rem;
            }
        }

        @media (max-width: 480px) {
            .products-grid {
                grid-template-columns: 1fr;
                gap: 1rem;
            }
            
            .hero-content h1 {
                font-size: 2.5rem;
            }
        }

        /* Scroll animations */
        .fade-in {
            opacity: 0;
            transform: translateY(30px);
            transition: all 0.6s ease;
        }

        .fade-in.visible {
            opacity: 1;
            transform: translateY(0);
        }
    </style>
</head>
<body>
    <!-- Header -->
    <header class="header">
        <nav class="nav">
            <div class="logo">Shahenda Store</div>
            <div class="cart-icon">🛒</div>
        </nav>
    </header>

    <!-- Hero Section -->
    <section class="hero">
        <div class="hero-content">
            <h1>Premium Perfumes</h1>
            <p>Discover the world's most luxurious fragrances. Timeless elegance in every bottle.</p>
            <a href="#products" class="cta-button">Shop Collection</a>
        </div>
    </section>

    <!-- Products Section -->
    <section class="products-section" id="products">
        <h2 class="section-title fade-in">Our Collection</h2>
        <div class="products-grid" id="productsGrid">
            <!-- Products will be generated by JavaScript -->
        </div>
    </section>

    <script>
        // Product data
        const products = [
            { name: "Baccarat Rouge", price: "$350", desc: "Woody floral musk with saffron and jasmine.", icon: "💎" },
            { name: "Khamra", price: "$280", desc: "Rich oriental with dates, praline and vanilla.", icon: "🌹" },
            { name: "Libre", price: "$320", desc: "Lavender, orange blossom and vanilla.", icon: "🕊️" },
            { name: "Dior", price: "$295", desc: "Iconic floral chypre fragrance.", icon: "🌸" },
            { name: "Chanel No. 5", price: "$420", desc: "Timeless aldehydic floral masterpiece.", icon: "⭐" },
            { name: "Coco Mademoiselle", price: "$380", desc: "Elegant patchouli and orange fusion.", icon: "💖" },
            { name: "Good Girl – Carolina Herrera", price: "$310", desc: "Almond, tonka bean and tuberose.", icon: "👠" },
            { name: "Miss Dior", price: "$290", desc: "Fresh rose and peony bouquet.", icon: "🌺" },
            { name: "Valentino", price: " $340", desc: "Bergamot, iris and vanilla.", icon: "👑" },
            { name: "Black Opium (YSL)", price: "$305", desc: "Coffee, vanilla and white flowers.", icon: "☕" },
            { name: "La Vie Est Belle (Lancôme)", price: "$315", desc: "Iris, patchouli and praline.", icon: "🎀" },
            { name: "Dior Sauvage", price: "$275", desc: "Fresh bergamot and ambroxan.", icon: "🔥" },
            { name: "Bleu de Chanel", price: "$330", desc: "Citrus, sandalwood and cedar.", icon: "🌊" },
            { name: "Acqua di Giò", price: "$260", desc: "Marine notes and rosemary.", icon: "🌿" },
            { name: "Rasasi Hawas for Him", price: "$220", desc: "Aquatic bergamot and apple.", icon: "💧" },
            { name: "One Million", price: "$285", desc: "Spicy cinnamon and leather.", icon: "💰" },
            { name: "212", price: "$240", desc: "Green apple and ginger.", icon: "🍏" },
            { name: "Bad Boy", price: "$265", desc: "Tonk and cocoa intensity.", icon: "😈" },
            { name: "Jean Paul", price: "$360", desc: "Bold lavender and vanilla.", icon: "⚡" },
            { name: "Stronger With You", price: "$290", desc: "Chestnut, vanilla and sage.", icon: "💪" }
        ];

        const sizes = ['30ml', '50ml', '100ml'];

        // Generate product cards
        function generateProducts() {
            const grid = document.getElementById('productsGrid');
            products.forEach((product, index) => {
                const card = document.createElement('div');
                card.className = 'product-card fade-in';
                card.style.animationDelay = `${index * 0.1}s`;
                
                card.innerHTML = `
                    <div class="product-image">${product.icon}</div>
                    <h3 class="product-name">${product.name}</h3>
                    <p class="product-description">${product.desc}</p>
                    <div class="product-price">${product.price}</div>
                    <div class="size-selector" data-product="${product.name}">
                        ${sizes.map(size => 
                            `<button class="size-btn" data-size="${size}">${size}</button>`
                        ).join('')}
                    </div>
                    <button class="buy-now-btn" data-product="${product.name}">Buy Now</button>
                `;
                grid.appendChild(card);
            });
        }

        // Size selector functionality
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('size-btn')) {
                const selector = e.target.parentElement;
                const productName = selector.dataset.product;
                
                // Remove active class from all size buttons
                selector.querySelectorAll('.size-btn').forEach(btn => btn.classList.remove('active'));
                // Add active class to clicked button
                e.target.classList.add('active');
                
                // Store selected size for product
                selector.dataset.selectedSize = e.target.dataset.size;
            }
            
            if (e.target.classList.contains('buy-now-btn')) {
                const productName = e.target.dataset.product;
                const sizeSelector = e.target.parentElement.querySelector('.size-selector');
                const selectedSize = sizeSelector.dataset.selectedSize || '50ml';
                
                const message = `Hello, I want to order ${productName} - ${selectedSize}`;
                const whatsappUrl = `https://wa.me/201110511138?text=${encodeURIComponent(message)}`;
                window.open(whatsappUrl, '_blank');
            }
        });

        // Intersection Observer for scroll animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Initialize
        document.addEventListener('DOMContentLoaded', () => {
            generateProducts();
            
            // Observe fade-in elements
            document.querySelectorAll('.fade-in').forEach(el => {
                observer.observe(el);
            });
        });

        // Header scroll effect
        window.addEventListener('scroll', () => {
            const header = document.querySelector('.header');
            if (window.scrollY > 100) {
                header.style.background = 'rgba(10, 10, 10, 0.98)';
            } else {
                header.style.background = 'rgba(10, 10, 10, 0.95)';
            }
        });
    </script>
</body>
</html>
