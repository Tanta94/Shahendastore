```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Luxe Éclat - Premium Perfumes</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&family=Playfair+Display:wght@400;500;600&display=swap');
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Playfair Display', serif;
            background: radial-gradient(ellipse at center, #0a0a0a 0%, #000000 70%);
            color: #f5f5f5;
            overflow-x: hidden;
            cursor: none;
        }

        /* Custom Cursor */
        .cursor {
            position: fixed;
            width: 20px;
            height: 20px;
            background: radial-gradient(circle, #d4af37, #b8860b);
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            mix-blend-mode: difference;
            transition: transform 0.1s ease;
        }

        .cursor-follower {
            position: fixed;
            width: 40px;
            height: 40px;
            border: 1px solid #d4af37;
            border-radius: 50%;
            pointer-events: none;
            z-index: 9998;
            transition: all 0.3s ease;
            opacity: 0.3;
        }

        /* Intro Animation */
        .intro {
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background: radial-gradient(ellipse at center, #1a0f00 0%, #000000 70%);
            z-index: 1000;
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
        }

        .perfume-bottle {
            position: relative;
            width: 300px;
            height: 500px;
            transform-style: preserve-3d;
            animation: bottleIntro 4s ease-out forwards;
        }

        .bottle-body {
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
            width: 120px;
            height: 350px;
            background: linear-gradient(145deg, #1a1a2e 0%, #16213e 50%, #0f0f23 100%);
            border-radius: 60px 60px 20px 20px;
            box-shadow: 
                0 20px 40px rgba(0,0,0,0.8),
                inset 0 10px 20px rgba(255,255,255,0.1),
                inset -10px 0 20px rgba(26,26,46,0.3);
            animation: bottleRise 3s ease-out 0.5s forwards;
            opacity: 0;
        }

        .bottle-cap {
            position: absolute;
            top: -30px;
            left: 50%;
            transform: translateX(-50%);
            width: 100px;
            height: 60px;
            background: linear-gradient(145deg, #d4af37 0%, #b8860b 100%);
            border-radius: 50px 50px 20px 20px;
            box-shadow: 
                0 15px 30px rgba(212,175,55,0.4),
                inset 0 5px 10px rgba(255,255,255,0.3);
            transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .cap-open {
            animation: capLift 2s ease-out 2s forwards;
            transform: translateX(-50%) translateY(-80px) rotateX(15deg);
        }

        .fragrance-mist {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 200px;
            height: 200px;
            opacity: 0;
        }

        .mist-particle {
            position: absolute;
            background: radial-gradient(circle, rgba(212,175,55,0.8) 0%, rgba(138,134,11,0.4) 70%, transparent 100%);
            border-radius: 50%;
            animation: mistFloat 4s ease-out infinite;
        }

        /* Main Content */
        .main-content {
            position: relative;
            z-index: 1;
            opacity: 0;
            transform: translateY(50px);
            animation: fadeInUp 1s ease-out 4.5s forwards;
        }

        .hero-section {
            height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
            position: relative;
        }

        .hero-title {
            font-family: 'Cinzel', serif;
            font-size: clamp(3rem, 8vw, 8rem);
            background: linear-gradient(135deg, #d4af37 0%, #f4d03f 50%, #b8860b 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            margin-bottom: 1rem;
            filter: drop-shadow(0 10px 20px rgba(212,175,55,0.5));
        }

        .hero-subtitle {
            font-size: 1.5rem;
            color: #ccc;
            margin-bottom: 3rem;
            font-weight: 300;
        }

        .cta-button {
            padding: 1rem 3rem;
            font-size: 1.2rem;
            background: linear-gradient(145deg, #d4af37, #b8860b);
            color: #000;
            border: none;
            border-radius: 50px;
            cursor: none;
            font-family: inherit;
            font-weight: 500;
            box-shadow: 0 15px 35px rgba(212,175,55,0.4);
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
        }

        .cta-button:hover {
            transform: translateY(-5px);
            box-shadow: 0 25px 50px rgba(212,175,55,0.6);
        }

        /* Products Section */
        .products-section {
            padding: 10rem 2rem;
            max-width: 1400px;
            margin: 0 auto;
        }

        .section-title {
            font-family: 'Cinzel', serif;
            font-size: 4rem;
            text-align: center;
            margin-bottom: 5rem;
            background: linear-gradient(135deg, #d4af37 0%, #f4d03f 50%, #b8860b 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            filter: drop-shadow(0 10px 20px rgba(212,175,55,0.3));
        }

        .products-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            gap: 4rem;
            padding: 2rem 0;
        }

        .product-card {
            perspective: 1000px;
            height: 500px;
            cursor: none;
        }

        .product-container {
            position: relative;
            width: 100%;
            height: 100%;
            transform-style: preserve-3d;
            transition: transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .product-front, .product-back {
            position: absolute;
            width: 100%;
            height: 100%;
            backface-visibility: hidden;
            border-radius: 20px;
            padding: 2rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
        }

        .product-front {
            background: linear-gradient(145deg, rgba(26,26,46,0.9) 0%, rgba(10,10,10,0.95) 100%);
            box-shadow: 0 30px 60px rgba(0,0,0,0.8);
        }

        .product-back {
            background: linear-gradient(145deg, rgba(212,175,55,0.1) 0%, rgba(184,134,11,0.05) 100%);
            transform: rotateY(180deg);
            box-shadow: 0 30px 60px rgba(212,175,55,0.2);
        }

        .product-bottle {
            width: 150px;
            height: 300px;
            margin-bottom: 2rem;
            position: relative;
            transition: all 0.4s ease;
        }

        .product-name {
            font-family: 'Cinzel', serif;
            font-size: 2rem;
            margin-bottom: 1rem;
            background: linear-gradient(135deg, #d4af37 0%, #f4d03f 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        .product-price {
            font-size: 1.5rem;
            color: #d4af37;
            font-weight: 600;
        }

        /* Hover Effects */
        .product-card:hover .product-container {
            transform: rotateY(180deg) rotateX(10deg);
        }

        .product-card:hover .product-bottle {
            transform: scale(1.1) translateZ(50px);
        }

        /* Parallax */
        .parallax-bg {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: 
                radial-gradient(circle at 20% 80%, rgba(212,175,55,0.1) 0%, transparent 50%),
                radial-gradient(circle at 80% 20%, rgba(138,134,11,0.1) 0%, transparent 50%);
            z-index: -1;
            will-change: transform;
        }

        /* Animations */
        @keyframes bottleIntro {
            0% { opacity: 0; transform: scale(0.5) rotateX(90deg); }
            50% { opacity: 1; transform: scale(1) rotateX(0); }
            100% { opacity: 1; transform: scale(1) rotateX(0); }
        }

        @keyframes bottleRise {
            to { opacity: 1; transform: translateX(-50%) translateY(-20px); }
        }

        @keyframes capLift {
            0% { transform: translateX(-50%) translateY(0) rotateX(0); }
            100% { transform: translateX(-50%) translateY(-80px) rotateX(15deg); }
        }

        @keyframes mistFloat {
            0% {
                opacity: 0;
                transform: translate(-50%, -50%) scale(0) translateZ(0);
            }
            20% {
                opacity: 1;
                transform: translate(-50%, -50%) scale(1) translateZ(20px);
            }
            80% {
                opacity: 0.3;
                transform: translate(-50%, -50%) scale(1.2) translateZ(50px);
            }
            100% {
                opacity: 0;
                transform: translate(-50%, -50%) scale(1.5) translateZ(100px);
            }
        }

        @keyframes fadeInUp {
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        /* Responsive */
        @media (max-width: 768px) {
            .products-grid {
                grid-template-columns: 1fr;
                gap: 2rem;
            }
            
            .hero-title {
                font-size: 3rem;
            }
        }

        /* Scroll Animations */
        .fade-in {
            opacity: 0;
            transform: translateY(50px);
            transition: all 0.8s ease;
        }

        .fade-in.visible {
            opacity: 1;
            transform: translateY(0);
        }
    </style>
</head>
<body>
    <!-- Custom Cursor -->
    <div class="cursor"></div>
    <div class="cursor-follower"></div>

    <!-- Parallax Background -->
    <div class="parallax-bg"></div>

    <!-- Intro Animation -->
    <div class="intro" id="intro">
        <div class="perfume-bottle">
            <div class="bottle-cap" id="bottleCap"></div>
            <div class="bottle-body"></div>
            <div class="fragrance-mist" id="mistContainer"></div>
        </div>
    </div>

    <!-- Main Content -->
    <div class="main-content">
        <!-- Hero Section -->
        <section class="hero-section fade-in">
            <h1 class="hero-title">Luxe Éclat</h1>
            <p class="hero-subtitle">Experience the art of fragrance</p>
            <button class="cta-button">Discover Collection</button>
        </section>

        <!-- Products Section -->
        <section class="products-section">
            <h2 class="section-title fade-in">Our Signature Collection</h2>
            <div class="products-grid">
                <div class="product-card fade-in">
                    <div class="product-container">
                        <div class="product-front">
                            <div class="product-bottle" style="background: linear-gradient(145deg, #8B008B, #4B0082);"></div>
                            <h3 class="product-name">Amethyst Noir</h3>
                            <p class="product-price">$285</p>
                        </div>
                        <div class="product-back">
                            <h3 class="product-name">Amethyst Noir</h3>
                            <p>Deep violet notes of blackcurrant, jasmine, and sandalwood. A mysterious evening elixir.</p>
                            <button class="cta-button" style="margin-top: 1rem; padding: 0.8rem 2rem;">Add to Cart</button>
                        </div>
                    </div>
                </div>

                <div class="product-card fade-in">
                    <div class="product-container">
                        <div class="product-front">
                            <div class="product-bottle" style="background: linear-gradient(145deg, #006400, #228B22);"></div>
                            <h3 class="product-name">Emerald Myst</h3>
                            <p class="product-price">$320</p>
                        </div>
                        <div class="product-back">
                            <h3 class="product-name">Emerald Myst</h3>
                            <p>Fresh green mandarin, vetiver, and oakmoss. Nature's elegant whisper.</p>
                            <button class="cta-button" style="margin-top: 1rem; padding: 0.8rem 2rem;">Add to Cart</button>
                        </div>
                    </div>
                </div>

                <div class="product-card fade-in">
                    <div class="product-container">
                        <div class="product-front">
                            <div class="product-bottle" style="background: linear-gradient(145deg, #B22222, #8B0000);"></div>
                            <h3 class="product-name">Ruby Ember</h3>
                            <p class="product-price">$295</p>
                        </div>
                        <div class="product-back">
                            <h3 class="product-name">Ruby Ember</h3>
                            <p>Warm spices, rose otto, and amber. Passion in every drop.</p>
                            <button class="cta-button" style="margin-top: 1rem; padding: 0.8rem 2rem;">Add to Cart</button>
                        </div>
                    </div>
                </div>

                <div class="product-card fade-in">
                    <div class="product-container">
                        <div class="product-front">
                            <div class="product-bottle" style="background: linear-gradient(145deg, #1E90FF, #4169E1);"></div>
                            <h3 class="product-name">Sapphire Dawn</h3>
                            <p class="product-price">$310</p>
                        </div>
                        <div class="product-back">
                            <h3 class="product-name">Sapphire Dawn</h3>
                            <p>Aquatic bergamot, marine notes, and white musk. Ocean's first light.</p>
                            <button class="cta-button" style="margin-top: 1rem; padding: 0.8rem 2rem;">Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>

    <script>
        // Custom Cursor
        const cursor = document.querySelector('.cursor');
        const cursorFollower = document.querySelector('.cursor-follower');
        const cursorElements = document.querySelectorAll('.cta-button, .product-card');

        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
            cursorFollower.style.left = e.clientX + 'px';
            cursorFollower.style.top = e.clientY + 'px';
        });

        cursorElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursor.style.transform = 'scale(1.5)';
                cursorFollower.style.transform = 'scale(2)';
                cursorFollower.style.opacity = '0.6';
            });
            el.addEventListener('mouseleave', () => {
                cursor.style.transform = 'scale(1)';
                cursorFollower.style.transform = 'scale(1)';
                cursorFollower.style.opacity = '0.3';
            });
        });

        // Intro Animation Sequence
        const intro = document.getElementById('intro');
        const bottleCap = document.getElementById('bottleCap');
        const mistContainer = document.getElementById('mistContainer');
        const mainContent = document.querySelector('.main-content');

        setTimeout(() => {
            bottleCap.classList.add('cap-open');
        }, 2000);

        // Create mist particles
        function createMistParticle() {
            const particle = document
