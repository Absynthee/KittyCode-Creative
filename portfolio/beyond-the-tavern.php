<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Beyond the Tavern - Web Design | KittyCode Creative</title>
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
    <link rel="canonical" href="https://www.kittycodecreative.com/portfolio/beyond-the-tavern">
</head>

<body>

    <?php include '../includes/navigation.php' ?>
    <div class="blur1"></div>

    <main>


        <div class="hero align-items-normal fade-content" id="hero">
            <div class="hero-text fade-content">
                <div class="backlink"><a href="/our-portfolio">&mapstoleft; back to portfolio page</a></div>
                <label for="hero">We designed...</label>
                <h1>Beyond the Tavern</h1>
                <div class="hero-description gap fade-content">
                    <p class="date-type">June 2024 | Portfolio</p>
                    <div class="tags">
                        <div class="tag">etsy</div>
                        <div class="tag">landing page</div>
                        <div class="tag">blog</div>
                    </div>

                    <p>Rose at Beyond the Tavern wanted a website to showcase the artwork she creates for her Etsy shop
                        of the same name. The website was designed to be one page layout plus a blog page so that all of
                        the information was easily reachable in one place.</p>
                </div>

                <div class="hero-buttons">
                    <a href="https://www.beyondthetavern.com" target="_blank">
                        <button class="long-button" data-effect="throb">
                            <span class="text">visit website</span>
                            <span class="shimmer"></span>
                        </button>
                    </a>
                </div>

            </div>

            <div class="hero-img full-width">
                <img src="../images/portfolio/beyond-the-tavern/main.jpg" alt="">
            </div>

        </div>

        <section class="full-text fade-content">
            <div class="section-text fade-content">
                <h3>What we did</h3>
                <div class="section-description">
                    <p>For this project we used a combination of html, css, javascript and jquery. The website is
                        enhanced with some smooth animations upon loading the main page, and the hero section contains a
                        nice rotating vertical animated carousel which shows customers immediately what to expect from
                        the site. The logo was created by the client and it was requested to keep the font-selection for
                        the website to match the fantasy font used in their branding.</p>
                </div>
            </div>

            <div class="grid-images fade-content">
                <div class="grid-item"><img src="../images/portfolio/beyond-the-tavern/1.jpg" alt=""></div>
                <div class="grid-item"><img src="../images/portfolio/beyond-the-tavern/2.jpg" alt=""></div>
                <div class="grid-item"><img src="../images/portfolio/beyond-the-tavern/3.jpg" alt=""></div>
                <div class="grid-item"><img src="../images/portfolio/beyond-the-tavern/4.jpg" alt=""></div>
                <div class="grid-item"><img src="../images/portfolio/beyond-the-tavern/5.jpg" alt=""></div>
                <div class="grid-item"><img src="../images/portfolio/beyond-the-tavern/6.jpg" alt=""></div>

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
                    <a href="austins-portfolio">
                        <div class="portfolio-image-small" data-text="Austin's Portfolio">
                            <img src="../images/portfolio-austinspillman.jpg" alt="Austin's Portfolio Website Preview">
                        </div>
                    </a>
                </div>

                <div class="portfolio-container">
                    <a href="beyond-the-tavern">
                        <div class="portfolio-image-small" data-text="Beyond the Tavern">
                            <img src="../images/portfolio-beyondthetavern.jpg" alt="Beyond the Tavern website Preview">
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

    <?php include '../includes/navigation-footer.php' ?>
    <?php include '../includes/cookie-banner.php' ?>

</body>

</html>