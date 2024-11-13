<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cookie's Website (CtrlAltCookie) - Web Design | KittyCode Creative</title>
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
    <link rel="canonical" href="https://www.kittycodecreative.com/portfolio/ctrlaltcookie">
</head>

<body>

    <?php include '../includes/navigation.php' ?>
    <div class="blur1"></div>

    <main>


        <div class="hero align-items-normal fade-content" id="hero">
            <div class="hero-text fade-content">
                <div class="backlink"><a href="/our-portfolio">&mapstoleft; back to portfolio page</a></div>
                <label for="hero">We designed...</label>
                <h1>CtrlAltCookie</h1>
                <div class="hero-description gap fade-content">
                    <p class="date-type">April 2024 | Portfolio</p>
                    <div class="tags">
                        <div class="tag">content creator</div>
                        <div class="tag">landing page</div>
                    </div>

                    <p>This website for Cookie is a hub for all of her content, social media and contact information. It shows stats and links from all of the platforms she is on, as well as a banner which appears when she is live on Twitch. There's also a page dedicated to fan art, which is pulled directly from Bluesky.</p>
                </div>

                <div class="hero-buttons">
                    <a href="https://www.ctrlaltcookie.com" target="_blank">
                        <button class="long-button" data-effect="throb">
                            <span class="text">visit website</span>
                            <span class="shimmer"></span>
                        </button>
                    </a>
                </div>

            </div>

            <div class="hero-img full-width">
                <img src="../images/portfolio/ctrlaltcookie/main_1.png" alt="">
            </div>

        </div>

        <section class="full-text fade-content">
            <div class="section-text fade-content">
                <h3>What we did</h3>
                <div class="section-description">
                    <p>This site was designed to showcase all of Cookie's online content. As she is a content creator, it is highly beneficial to have a landing page where an audience can find all of the information they need in one place. The site contains information about Cookie, her social media stats, where to find her online, how to join the discord community, and how to contact her for business enqueries. It also utilises both the Twitch and Youtube API's to grab data from those websites to show when she's streaming on Twitch as well as dispaly the most recent few videos she has uploaded on Youtube. As these are her most active areas, it is important to have dynamic and up to date content.</p>
                    <p>Additionally, there's a second page that is dedicated to fan art which her community likes to draw. These images are all grabbed automatically from Bluesky using their public API, grabbing all posts with images from the hashtag 'CtrlArtCookie'.</p>
                    <p>For this project, we used HTML, CSS, JavaScript and PHP to secure the backend. The JavaScript library GSAP was used to make the emojis on the page move around relative to the position of the cursor, giving the page more movement and making it more playful.</p>
                </div>
            </div>

            <div class="grid-images fade-content">
                <div class="grid-item"><img src="../images/portfolio/ctrlaltcookie/1.jpg" alt=""></div>
                <div class="grid-item"><img src="../images/portfolio/ctrlaltcookie/1-light.jpg" alt=""></div>
                <div class="grid-item"><img src="../images/portfolio/ctrlaltcookie/2.jpg" alt=""></div>
                <div class="grid-item"><img src="../images/portfolio/ctrlaltcookie/2-light.jpg" alt=""></div>
                <div class="grid-item"><img src="../images/portfolio/ctrlaltcookie/3.jpg" alt=""></div>
                <div class="grid-item"><img src="../images/portfolio/ctrlaltcookie/4.jpg" alt=""></div>
                <div class="grid-item"><img src="../images/portfolio/ctrlaltcookie/5.jpg" alt=""></div>
                <div class="grid-item"><img src="../images/portfolio/ctrlaltcookie/6.jpg" alt=""></div>
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
                            <img src="../images/portfolio-austinspillman_small.jpg" alt="Austin's Portfolio Website Preview">
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

    <?php include '../includes/navigation-footer.php' ?>
    <?php include '../includes/cookie-banner.php' ?>

</body>

</html>