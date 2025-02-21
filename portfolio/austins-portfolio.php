<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Austin's Portfolio - Web Design | KittyCode Creative</title>
    <link rel="icon" type="image/png" sizes="48x48" href="../favicon-48x48.png">
    <link rel="icon" type="image/png" sizes="192x192" href="../favicon-192x192.png">
    <link rel="apple-touch-icon" type="image/png" sizes="180x180" href="../favicon-180x180.png">
    <link rel="stylesheet" href="https://use.typekit.net/qqu4sal.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="../styles/scripts.js" defer></script>
    <script src="../styles/cookies.js"></script>
    <script type="module" src="../styles/sparkly-text.js"></script>
    <link rel="stylesheet" href="../styles/main.css">
    <link rel="stylesheet" href="../styles/button.css">
    <link rel="stylesheet" href="../styles/card.css">
    <link rel="canonical" href="https://www.kittycodecreative.com/portfolio/austins-portfolio">
</head>

<body>

    <?php include $_SERVER['DOCUMENT_ROOT'] . '/includes/navigation.php'; ?>
    <!-- <div class="blur1"></div> -->

    <main>


        <div class="hero align-items-normal fade-content" id="hero">
            <div class="hero-text fade-content">
                <div class="backlink"><a href="/our-portfolio">&mapstoleft; back to portfolio page</a></div>
                <label for="hero">We designed...</label>
                <h1>Austin's Portfolio</h1>
                <div class="hero-description gap fade-content">
                    <p class="date-type">April 2024 | Portfolio</p>
                    <div class="tags">
                        <div class="tag">portfolio</div>
                        <div class="tag">dark theme</div>
                    </div>

                    <p>A bespoke and unique portfolio website for the founder of KittyCode Creative. The website was
                        designed to show off Austin's creative and front-end development expertise. The brief was to
                        create a sleek, modern, dark website that was easy on the eyes and a perfect viewing experience
                        for oled displays.</p>
                </div>

                <div class="hero-buttons">
                    <a href="https://www.austinspillman.com" target="_blank">
                        <button class="long-button" data-effect="throb">
                            <span class="text">visit website</span>
                            <span class="shimmer"></span>
                        </button>
                    </a>
                </div>

            </div>

            <div class="hero-img full-width">
                <img src="../images/portfolio/austins-portfolio/main.jpg" alt="">
            </div>

        </div>

        <section class="full-text fade-content">
            <div class="section-text fade-content">
                <h3>What we did</h3>
                <div class="section-description">
                    <p>This site was designed to showcase a portfolio of digital and front-end design work. It was built
                        using modern CSS, HTML, Javascript, jQuery and PHP. The goal was to increase visibility and have
                        a strong modern portfolio to show potential clients and employers.</p>
                </div>
            </div>

            <div class="grid-images fade-content">
                <div class="grid-item"><img src="../images/portfolio/austins-portfolio/1.jpg" alt=""></div>
                <div class="grid-item"><img src="../images/portfolio/austins-portfolio/2.jpg" alt=""></div>
                <div class="grid-item"><img src="../images/portfolio/austins-portfolio/3.jpg" alt=""></div>
                <div class="grid-item"><img src="../images/portfolio/austins-portfolio/7.jpg" alt=""></div>
                <div class="grid-item"><img src="../images/portfolio/austins-portfolio/9.jpg" alt=""></div>
                <div class="grid-item"><img src="../images/portfolio/austins-portfolio/4.jpg" alt=""></div>
            </div>
        </section>


        <section class="our-portfolio fade-content">
            <div class="section-text centered fade-content">
                <label for="our-portfolio">How do you like us meow?</label>
                <h1>More Projects</h1>
                <div class="section-description centered">
                    <p>Other projects we have completed.</p>
                </div>
            </div>

            <div class="website-portfolios fade-content">

                <div class="portfolio-container">
                    <a href="ctrlaltcookie">
                        <div class="portfolio-image-small" data-text="CtrlAltCookie">
                            <img src="../images/portfolio-ctrlaltcookie_small.jpg" alt="Cookie's Website Preview">
                        </div>
                    </a>
                </div>

                <div class="portfolio-container">
                    <a href="beyond-the-tavern">
                        <div class="portfolio-image-small" data-text="Beyond the Tavern">
                            <img src="../images/portfolio-beyondthetavern_small.jpg" alt="Beyond the Tavern Website Preview">
                        </div>
                    </a>
                </div>

            </div>

            <div class="section-buttons centered-button">
                <a href="/our-portfolio"><button class="" data-effect="none">
                        <span class="text">see more</span>
                        <span class="shimmer"></span>
                    </button></a>
            </div>
        </section>



    </main>

    <div class="footer-top"></div>

    <?php include $_SERVER['DOCUMENT_ROOT'] . '/includes/navigation-footer.php'; ?>
    <?php include $_SERVER['DOCUMENT_ROOT'] . '/includes/cookie-banner.php'; ?>

</body>

</html>