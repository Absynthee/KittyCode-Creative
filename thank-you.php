<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description"
        content="Thank you for contacting KittyCode Creative! Your submission has been received. We will get back to you shortly. In the meantime, explore our bespoke web design, development, SEO, and logo services." />
    <meta property="og:title" content="Thank You - KittyCode Creative" />
    <meta property="og:description"
        content="Thank you for contacting KittyCode Creative! Your submission has been received. We will get back to you shortly. Explore our bespoke web design, development, SEO, and logo services in the meantime." />
    <meta property="og:image" content="https://kittycodecreative.com/images/about-us.png" />
    <meta property="og:url" content="https://kittycodecreative.com/thank-you" />
    <title>Thank You | KittyCode Creative</title>
    <link rel="icon" type="image/png" sizes="48x48" href="favicon-48x48.png">
    <link rel="icon" type="image/png" sizes="192x192" href="favicon-192x192.png">
    <link rel="apple-touch-icon" type="image/png" sizes="180x180" href="favicon-180x180.png">
    <link rel="stylesheet" href="https://use.typekit.net/qqu4sal.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="./styles/scripts.js" defer></script>
    <script src="./styles/cookies.js"></script>
    <script src="./styles/vanilla-tilt.js" defer></script>
    <script type="module" src="./styles/sparkly-text.js"></script>
    <link rel="stylesheet" href="./styles/main.css">
    <link rel="stylesheet" href="./styles/button.css">
    <link rel="stylesheet" href="./styles/card.css">
    <link rel="canonical" href="https://www.kittycodecreative.com/thank-you">

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
                <label for="thank-you">I’m litter-ly in love with you.</label>
                <h1>Thank You!</h1>
                <div class="section-description centered">
                    <p>You have successfully submitted the form. We know it was a bit long, but it helps us to deliver
                        to you the best possible service.</p>
                    <p>We will get back to you as soon as possible.</p>
                </div>
                <a href="./" style="width: 100%;"><button class="" id="thank-you" data-effect="none"
                        style="width: 100%;">
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