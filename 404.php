<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description"
        content="Sorry, the page you're looking for cannot be found. Return to the homepage to find what you need. KittyCode Creative, your digital web design agency, is here to help." />
    <meta property="og:title" content="Page Not Found - KittyCode Creative" />
    <meta property="og:description"
        content="Sorry, the page you're looking for cannot be found. Return to the homepage to find what you need. KittyCode Creative, your digital web design agency, is here to help." />
    <meta property="og:image" content="https://kittycodecreative.com/images/hero_1b.png" />
    <meta property="og:url" content="https://kittycodecreative.com/404" />
    <title>404 Page Not Found | KittyCode Creative</title>
    <link rel="icon" type="image/png" sizes="48x48" href="favicon-48x48.png">
    <link rel="icon" type="image/png" sizes="192x192" href="favicon-192x192.png">
    <link rel="apple-touch-icon" type="image/png" sizes="180x180" href="favicon-180x180.png">
    <link rel="stylesheet" href="https://use.typekit.net/qqu4sal.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="../styles/scripts.js" defer></script>
    <script src="../styles/cookies.js"></script>
    <script src="../styles/vanilla-tilt.js" defer></script>
    <script type="module" src="../styles/sparkly-text.js"></script>
    <link rel="stylesheet" href="../styles/main.css">
    <link rel="stylesheet" href="../styles/button.css">
    <link rel="stylesheet" href="../styles/card.css">
    <link rel="canonical" href="https://www.kittycodecreative.com/404">
</head>
<style>
    .cat-v2::before {
        content: '';
        background: url(./images/v3_cat1.png);
    }

    .cat-v2 {
        width: 100%;
        height: 800px;
        max-height: 800px;
        background: url(./images/v3_cat1.png);
        animation: changeImage 1s infinite;

        &:hover {
            background: url(./images/v3_cat2.png);
            animation: changeImage 0.7s infinite;
        }

        &:active {
            background: url(./images/v3_cat3.png);
            margin-top: 2px;
            animation: changeImageClick 0.1s infinite;
        }
    }

    @keyframes changeImage {
        0% {
            background: url(./images/v3_cat3.png);
            background-size: contain;
            background-position: center;
            background-repeat: no-repeat;
        }

        50% {
            background: url(./images/v3_cat2.png);
            background-size: contain;
            background-position: center;
            background-repeat: no-repeat;
        }

        100% {
            background: url(./images/v3_cat3.png);
            background-size: contain;
            background-position: center;
            background-repeat: no-repeat;
        }
    }

    @keyframes changeImageClick {
        0% {
            background: url(./images/v3_cat3a.png);
            background-size: contain;
            background-position: center;
            background-repeat: no-repeat;
        }

        50% {
            background: url(./images/v3_cat2a.png);
            background-size: contain;
            background-position: center;
            background-repeat: no-repeat;
        }

        100% {
            background: url(./images/v3_cat3a.png);
            background-size: contain;
            background-position: center;
            background-repeat: no-repeat;
        }
    }
</style>

<body>

<?php include 'includes/navigation.php' ?>
    <div class="blur1"></div>

    <main>

        <section class="hero fade-content">
            <div class="cat-v2"></div>
            <div class="section-text centered fade-content">
                <label for="404">ERROR 404</label>
                <h1>OH NO! HOW DID YOU GET HERE?</h1>
                <div class="section-description centered">
                    <p><em>let's go back. click the buttom below. pretend this was just a dream.</em></p>
                </div>

                <a href="index" style="width: 100%;"><button class="" id="404" data-effect="none" style="width: 100%;">
                        <span class="text">home</span>
                        <span class="shimmer"></span>
                    </button></a>

            </div>
        </section>

    </main>

    <div class="footer-top"></div>

    <?php include 'includes/navigation-footer.php' ?>
    <?php include 'includes/cookie-banner.php' ?>

</body>

</html>