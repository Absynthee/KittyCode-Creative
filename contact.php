<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description"
        content="Get in touch with KittyCode Creative, your digital web design agency in Eastbourne, East Sussex. Contact us today for bespoke web design, development, SEO, and logo services. We're here to help transform your online presence and answer any questions you have.">
    <meta property="og:title" content="Contact Us - KittyCode Creative | Expert Web Design and Digital Services" />
    <meta property="og:description"
        content="Get in touch with KittyCode Creative, your digital web design agency in Eastbourne. We offer bespoke web design, development, SEO, and logo services. Contact us to transform your online presence." />
    <meta property="og:image" content="https://kittycodecreative.com/images/contact-us.png" />
    <meta property="og:url" content="https://kittycodecreative.com/contact-us" />
    <title>Contact Us - Get Started | KittyCode Creative</title>
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
    <script src="./styles/form-contact.js"></script>
    <script type="module" src="./styles/sparkly-text.js"></script>
    <link rel="stylesheet" href="./styles/main.css">
    <link rel="stylesheet" href="./styles/button.css">
    <link rel="stylesheet" href="./styles/card.css">
    <link rel="canonical" href="https://www.kittycodecreative.com/contact">
    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-ZSCGN3WZR0">
    </script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag() { dataLayer.push(arguments); }
        gtag('js', new Date());

        gtag('config', 'G-ZSCGN3WZR0');
    </script>
</head>

<body>

    <?php include 'includes/navigation.php' ?>
    <div class="blur1"></div>

    <main>

        <div class="contact-page fade-content">

            <div class="section-text fade-content" id="hero">
                <label for="hero">Whisker me away.</label>
                <h1>Contact Us</h1>
                <div class="section-description fade-content">
                    <p>If you'd like to get in touch with us for any reason you can email us at
                        hello@kittycodecreative.com. We're also available to chat through Facebook or LinkedIn. Or you
                        can fill out this handy contact form. However you choose to do it, we aim to get back to you as
                        soon as possible.</p>

                    <div class="contact-us-links">

                        <a href="https://www.facebook.com/KittyCodeCreative" target="_blank"><img src="images/icons/facebook_black.png"
                                style="width: 12px;" alt="">Facebook</a>
                        <a href="https://www.linkedin.com/company/kittycode-creative" target="_blank"><img
                                src="images/icons/linkedin_black.png" style="width: 18px;" alt="">LinkedIn</a>
                        <a href="https://www.instagram.com/kittycode_creative/" target="_blank"><img
                                src="images/icons/instagram_black.png" style="width: 18px;" alt="">Instagram</a>
                        <a href="https://x.com/KittyCodeCreate" target="_blank"><img src="images/icons/twitter_black.png"
                                style="width: 18px;" alt="">X (Twitter)</a>

                    </div>

                    <p>If you'd like to enquire about a website or logo design, you might like to fill out the
                        questionnaire forms instead. They are a bit lengthy, but they help us get you the best result
                        possible.</p>
                </div>

                <div class="section-buttons">
                    <a href="services/website-questionnaire">
                        <button class="long-button" data-effect="throb">
                            <span class="text">website questionnaire</span>
                            <span class="shimmer"></span>
                        </button>
                    </a>
                    <a href="services/logo-questionnaire">
                        <button class="long-button secondary" data-effect="none">
                            <span class="text">logo questionnaire</span>
                            <span class="shimmer"></span>
                        </button>
                    </a>

                </div>
            </div>

            <div class="contact-container fade-content">
                <form id="contact" action="" method="post" novalidate>
                    <input type="hidden" name="access_key" value="34317982-f38f-4672-b238-073c162f37c4">

                    <fieldset>
                        <legend><label for="name">Name</label></legend>
                        <input placeholder="Sir Pawsworth III" name="name" id="name" type="text"
                            autocomplete="given-name" required>
                        <div class="invalid" id="name-invalid">
                            Please provide your name.
                        </div>

                    </fieldset>
                    <fieldset>
                        <legend>
                            <label for="email">Email</label>
                        </legend>
                        <input placeholder="meow@kittycodecreative.com" name="email" id="email" type="email"
                            autocomplete="email" required>
                        <div class="invalid" id="email-invalid">
                            Please provide your email address.
                        </div>

                    </fieldset>
                    <fieldset>
                        <legend><label for="subject">Subject</label></legend>
                        <input placeholder="What do you knead?" name="subject" id="subject" type="text" required>
                        <div class="invalid" id="subject-invalid">
                            Let us know why you're contacting us.
                        </div>

                    </fieldset>

                    <fieldset>
                        <legend><label for="message">Your Message</label></legend>
                        <textarea placeholder="Type your Message Here..." name="message" id="message"
                            required></textarea>
                        <div class="invalid" id="message-invalid">
                            Leave us a nice message. Let us know what you're after.
                        </div>

                    </fieldset>
                    <input type="checkbox" name="botcheck" class="hidden" style="display: none;">
                    <fieldset aria-labelledby="contact-submit">
                        <button disabled class="disabled" name="submit" type="submit" id="contact-submit"
                            data-effect="spin">
                            <span class="text">submit</span>
                            <span class="shimmer"></span>
                        </button>
                    </fieldset>
                    <div id="result"></div>
                </form>


            </div>

        </div>



    </main>

    <div class="footer-top"></div>

    <?php include 'includes/navigation-footer.php' ?>
    <?php include 'includes/cookie-banner.php' ?>

</body>

</html>