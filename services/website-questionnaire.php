<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description"
        content="Complete our website questionnaire to provide KittyCode Creative with insights into your web design needs. This helps us tailor a website that meets your specific requirements and enhances your online presence." />
    <meta property="og:title" content="Website Questionnaire - KittyCode Creative" />
    <meta property="og:description"
        content="Complete our website questionnaire to provide KittyCode Creative with insights into your web design needs. This helps us tailor a website that meets your specific requirements and enhances your online presence." />
    <meta property="og:image" content="https://kittycodecreative.com/images/what-we-do.png" />
    <meta property="og:url" content="https://kittycodecreative.com/services/website-questionnaire" />
    <title>Website Design Questionnaire | KittyCode Creative</title>
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
    <script src="../styles/vanilla-tilt.js" defer></script>
    <script type="module" src="../styles/sparkly-text.js"></script>
    <link rel="stylesheet" href="../styles/main.css">
    <link rel="stylesheet" href="../styles/button.css">
    <link rel="stylesheet" href="../styles/card.css">
    <link rel="canonical" href="https://www.kittycodecreative.com/services/website-questionnaire">
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

    <?php include '../includes/navigation.php' ?>
    <div class="blur1"></div>

    <main>
        <div class="full-text centered">

            <div class="section-text centered" id="website-questionnaire">
                <label for="website-questionnaire">Design my website.</label>
                <h1>Web Design Questionnaire</h1>
                <div class="section-description">
                    <p>We know this is long but for us to provide you the best service we require as much information as
                        possible. Therefore, please take the time to complete the form with as much detail as you can.
                    </p>
                    <p></p>
                </div>
                <div class="contact-container">
                    <form id="website" action="" method="post" novalidate>
                        <input type="hidden" name="access_key" value="34317982-f38f-4672-b238-073c162f37c4">
                        <input type="hidden" name="subject" id="subject" value="Website Questionnaire">
                        <input type="hidden" name="redirect" value="www.kittycodecreative.com/thank-you">

                        <h3 class="questionnaire-title">Your Details</h3>
                        <fieldset id="form-row">
                            <div class="one-column">
                                <legend><label for="name">Your name</label></legend>
                                <input placeholder="Sir Pawsworth III" name="name" id="name" type="text"
                                    autocomplete="given-name" required>
                                <div class="invalid" id="name-invalid">
                                    Please provide your name.
                                </div>
                            </div>

                            <div class="one-column">
                                <legend><label for="business-name">Business name</label></legend>
                                <input placeholder="KittyCode Creative" name="Business Name" id="business-name"
                                    type="text" required>
                                <div class="invalid" id="business-name-invalid">
                                    Please provide your business name.
                                </div>
                            </div>
                        </fieldset>

                        <fieldset id="form-row">
                            <div class="one-column">
                                <legend><label for="email">Email</label></legend>
                                <input placeholder="meow@kittycodecreative.com" name="email" id="email" type="email"
                                    autocomplete="email" required>
                                <div class="invalid" id="email-invalid">
                                    Please provide your email address.
                                </div>
                            </div>
                            <div class="one-column">
                                <legend><label for="confirm-email">Confirm Email</label></legend>
                                <input placeholder="meow@kittycodecreative.com" name="Email Confirmation"
                                    id="confirm-email" type="email" autocomplete="email" required>
                                <div class="invalid" id="confirm-email-invalid">
                                    Please confirm your email address.
                                </div>
                            </div>
                        </fieldset>

                        <h3 class="questionnaire-title">Business Details</h3>

                        <fieldset id="form-row">
                            <div class="one-column">
                                <legend><label for="what-does-your-business-do">What does your business do?</label>
                                </legend>
                                <textarea placeholder="Industry and goals." name="What does your business do?"
                                    id="what-does-your-business-do" required></textarea>
                                <div class="invalid" id="business-1-invalid">
                                    Required field.
                                </div>
                            </div>

                            <div class="one-column">
                                <legend><label for="do-you-have-a-website">Do you already have a website?</label>
                                </legend>
                                <textarea placeholder="If so, please leave a link to the existing website."
                                    id="do-you-have-a-website" required></textarea>
                                <div class="invalid" id="business-2-invalid">
                                    Required field.
                                </div>
                            </div>
                        </fieldset>

                        <fieldset id="form-row">
                            <div class="one-column">
                                <legend><label for="potential-customers">Who are your potential customers?</label>
                                </legend>
                                <textarea placeholder="Age, etc." name="Who are your potential customers?"
                                    id="potential-customers" required></textarea>
                                <div class="invalid" id="business-3-invalid">
                                    Required field.
                                </div>
                            </div>

                            <div class="one-column">
                                <legend>
                                    <label for="differ-from-competitors">How does your business differ from
                                        competitors?</label>
                                </legend>
                                <textarea
                                    placeholder="What do you do differently? How do you market yourself in a way that's better than others?"
                                    name="How does your business differ from
                                    competitors?" id="differ-from-competitors" required></textarea>
                                <div class="invalid" id="business-4-invalid">
                                    Required field.
                                </div>
                            </div>
                        </fieldset>

                        <fieldset>
                            <div class="one-column">
                                <legend><label for="main-competitors">Who are your main competitors?</label></legend>
                                <textarea
                                    placeholder="Similar busineses in your industry. Research into competitors helps us design an appropriate website for you."
                                    name="Who are your main competitors?" id="main-competitors" required></textarea>
                                <div class="invalid" id="business-5-invalid">
                                    Required field.
                                </div>
                            </div>
                        </fieldset>

                        <h3 class="questionnaire-title">Website Details</h3>

                        <fieldset id="form-row">
                            <div class="one-column">
                                <legend><label for="website-purpose">What is the website's main purpose?</label>
                                </legend>
                                <textarea
                                    placeholder="Please try to summurize the goal of your website - what you want it to achieve."
                                    name="What is the website's purpose" id="website-purpose" required></textarea>
                                <div class="invalid" id="website-1-invalid">
                                    Required field.
                                </div>
                            </div>

                            <div class="one-column">
                                <legend><label for="website-logo">Do you already have a logo for your brand?</label>
                                </legend>
                                <textarea placeholder="If not, will you need a logo as well?" name="Do you have a logo?"
                                    id="website-logo" required></textarea>
                                <div class="invalid" id="website-2-invalid">
                                    Required field.
                                </div>
                            </div>
                        </fieldset>

                        <fieldset id="form-row">
                            <div class="one-column">
                                <legend><label for="website-content">Do you have content ready for your website?</label>
                                </legend>
                                <textarea placeholder="The text and images you are putting on the website."
                                    id="website-content" name="Do you have website content ready?" required></textarea>
                                <div class="invalid" id="website-3-invalid">
                                    Required field.
                                </div>
                            </div>

                            <div class="one-column">
                                <legend><label for="website-hosting">Will you require hosting?</label></legend>
                                <textarea
                                    placeholder="Hosting is included in all of our monthly packages. Otherwise, we will look at a one-off cost."
                                    name="Will you require hosting?" id="website-hosting" required></textarea>
                                <div class="invalid" id="website-4-invalid">
                                    Required field.
                                </div>
                            </div>
                        </fieldset>

                        <h4 class="questionnaire-title">Please share 3 websites you like the look of:</h4>
                        <fieldset id="form-row">
                            <div class="one-column">
                                <legend><label for="website-likes-1">Website 1</label></legend>
                                <textarea placeholder="Website 1" name="Website 1" id="website-likes-1"
                                    class="website-likes" required></textarea>
                                <div class="invalid" id="website-5-invalid">
                                    Required field.
                                </div>
                            </div>

                            <div class="one-column">
                                <legend><label for="website-likes-2">Website 2</label></legend>
                                <textarea placeholder="Website 2" name="Website 2" id="website-likes-2"
                                    class="website-likes" required></textarea>
                                <div class="invalid" id="website-6-invalid">
                                    Required field.
                                </div>
                            </div>
                            <div class="one-column">
                                <legend><label for="website-likes-3">Website 3</label></legend>
                                <textarea placeholder="Website 3" name="Website 3" id="website-likes-3"
                                    class="website-likes" required></textarea>
                                <div class="invalid" id="website-7-invalid">
                                    Required field.
                                </div>
                            </div>
                        </fieldset>

                        <h4 class="questionnaire-title">Do you need any of the following:</h4>

                        <fieldset>
                            <div id="form-row" class="row-wrap">
                                <div class="checkbox">
                                    <input type="checkbox" name="website-extras" id="blog">
                                    <label for="blog">Blog</label>
                                </div>
                                <div class="checkbox">
                                    <input type="checkbox" name="website-extras" id="testimonials">
                                    <label for="testimonials">Google/Facebook Testimonials</label>
                                </div>
                                <div class="checkbox">
                                    <input type="checkbox" name="website-extras" id="e-commerce">
                                    <label for="e-commerce">E-commerce</label>
                                </div>
                                <div class="checkbox">
                                    <input type="checkbox" name="website-extras" id="contact-form">
                                    <label for="contact-form">Contact Form</label>
                                </div>
                            </div>
                        </fieldset>

                        <h4 class="questionnaire-title">What kind of style/feel would you like your website to
                            portray:</h4>

                        <fieldset>
                            <div id="form-row" class="row-wrap">
                                <div class="checkbox"><input type="checkbox" name="website-style" id="corporate">
                                    <label for="corporate">Corporate</label>
                                </div>
                                <div class="checkbox"><input type="checkbox" name="website-style" id="professional">
                                    <label for="professional">Professional</label>
                                </div>
                                <div class="checkbox"><input type="checkbox" name="website-style" id="approachable">
                                    <label for="approachable">Approachable</label>
                                </div>
                                <div class="checkbox"><input type="checkbox" name="website-style" id="calm">
                                    <label for="calm">Calm</label>
                                </div>
                                <div class="checkbox"><input type="checkbox" name="website-style" id="friendly">
                                    <label for="friendly">Friendly</label>
                                </div>
                                <div class="checkbox"><input type="checkbox" name="website-style" id="playful">
                                    <label for="playful">Playful</label>
                                </div>
                                <div class="checkbox"><input type="checkbox" name="website-style" id="stylish">
                                    <label for="stylish">Stylish</label>
                                </div>
                            </div>
                        </fieldset>

                        <h4 class="questionnaire-title">How many pages do you think your website will need:</h4>

                        <fieldset>
                            <div id="form-row" class="row-wrap">
                                <div class="checkbox">
                                    <input type="radio" name="website pages" id="1-3">
                                    <label for="1-3">1-3</label>
                                </div>
                                <div class="checkbox">
                                    <input type="radio" name="website pages" id="4-10">
                                    <label for="4-10">4-10</label>
                                </div>
                                <div class="checkbox">
                                    <input type="radio" name="website pages" id="11-50">
                                    <label for="11-50">11-50</label>
                                </div>
                                <div class="checkbox">
                                    <input type="radio" name="website pages" id="50+">
                                    <label for="50+">50+</label>
                                </div>
                            </div>
                        </fieldset>

                        <fieldset id="form-row">
                            <div class="one-column">
                                <legend><label for="brand-guide">Does your business have a brand guide?</label></legend>
                                <textarea
                                    placeholder="Any brand guide, style guide or design system that will aid in the consistency of design across your brand."
                                    name="Brand Guide" id="brand-guide" required></textarea>
                                <div class="invalid" id="website-8-invalid">
                                    Required field.
                                </div>
                            </div>

                            <div class="one-column">
                                <legend><label for="seo-ranking">Is it vital to be found on the first page of
                                        Google?</label></legend>
                                <textarea placeholder="How important is SEO for your business?" name="SEO ranking"
                                    id="seo-ranking" required></textarea>
                                <div class="invalid" id="website-9-invalid">
                                    Required field.
                                </div>
                            </div>
                        </fieldset>

                        <fieldset id="form-row">
                            <div class="one-column">
                                <legend><label for="launch-date">Do you have an ideal launch date?</label></legend>
                                <textarea placeholder="This can help us with time management of the project."
                                    name="Website launch date" id="launch-date" required></textarea>
                                <div class="invalid" id="website-10-invalid">
                                    Required field.
                                </div>
                            </div>

                            <div class="one-column">
                                <legend><label for="website-budget">What is your budget?</label></legend>
                                <textarea placeholder="What is your budget for the project?" name="What is your budget?"
                                    id="website-budget" required></textarea>
                                <div class="invalid" id="website-11-invalid">
                                    Required field.
                                </div>
                            </div>
                        </fieldset>

                        <fieldset>
                            <div class="one-column">
                                <legend>
                                    <label for="extra-information">Please supply any further information you feel might
                                        be
                                        important</label>
                                </legend>
                                <textarea
                                    placeholder="Anything that isn't mentioned in the other sections, or something you want to expand on."
                                    id="extra-information" name="extra information"></textarea>
                            </div>
                        </fieldset>

                        <input type="checkbox" name="botcheck" class="hidden" style="display: none;">

                        <fieldset class="centered" aria-labelledby="website-submit">
                            <button name="submit" type="submit" id="website-submit" data-effect="spin">
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

    <?php include '../includes/navigation-footer.php' ?>
    <?php include '../includes/cookie-banner.php' ?>

</body>

</html>