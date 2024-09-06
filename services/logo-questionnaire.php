<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description"
        content="Fill out our logo questionnaire to help KittyCode Creative understand your branding needs. Your responses will guide us in creating a custom logo that perfectly aligns with your vision and goals." />
    <meta property="og:title" content="Logo Questionnaire - KittyCode Creative" />
    <meta property="og:description"
        content="Fill out our logo questionnaire to help KittyCode Creative understand your branding needs. Your responses will guide us in creating a custom logo that perfectly aligns with your vision and goals." />
    <meta property="og:image" content="https://kittycodecreative.com/images/what-we-do.png" />
    <meta property="og:url" content="https://kittycodecreative.com/services/logo-questionnaire" />
    <title>Logo Design Questionnaire | KittyCode Creative</title>
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
    <link rel="canonical" href="https://www.kittycodecreative.com/services/logo-questionnaire">
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

            <div class="section-text centered" id="logo-questionnaire">
                <label for="logo-questionnaire">Design my logo.</label>
                <h1>Logo Design Questionnaire</h1>
                <div class="section-description">
                    <p>We know this is long but for us to provide you the best service we require as much information as
                        possible. Therefore, please complete the form as best as you can.</p>
                    <p>Please note that generally we suggest you request a few variations for maximum compatibility
                        across all formats. Usually this will be a combination mark, wordmark and brandmark (symbol).
                    </p>
                </div>
                <div class="contact-container">
                    <form id="logo" action="" method="post" novalidate>
                        <input type="hidden" name="access_key" value="34317982-f38f-4672-b238-073c162f37c4">
                        <input type="hidden" name="subject" id="subject" value="Logo Questionnaire">
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
                                    id="confirm-email" autocomplete="email" type="email" required>
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
                                <legend><label for="what-does-your-logo-achieve">What do you want your logo to
                                        achieve?</label></legend>
                                <textarea placeholder="Example: Update my business with a fresh new look."
                                    name="What do you want your logo to achieve?" id="what-does-your-logo-achieve"
                                    required></textarea>
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
                                    placeholder="Similar busineses in your industry. Research into competitors helps us design an appropriate logo for you."
                                    name="Who are your main competitors?" id="main-competitors" required></textarea>
                                <div class="invalid" id="business-5-invalid">
                                    Required field.
                                </div>
                            </div>

                        </fieldset>

                        <h3 class="questionnaire-title">Logo Details</h3>

                        <fieldset id="form-row">
                            <div class="one-column">
                                <legend><label for="logo-idea">Do you have a specific idea in mind?</label></legend>
                                <textarea placeholder="Example: A specific font, a featured image, etc."
                                    name="Do you have a specific idea in mind?" id="logo-idea" required></textarea>
                                <div class="invalid" id="logo-1-invalid">
                                    Required field.
                                </div>
                            </div>

                            <div class="one-column">
                                <legend><label for="logo-colours">Do you have any colour preferences?</label></legend>
                                <textarea
                                    placeholder="Colours that you want your logo to include, or colours you want to avoid (make sure to tell us which!)."
                                    name="Do you have any colour preferences?" id="logo-colours" required></textarea>
                                <div class="invalid" id="logo-2-invalid">
                                    Required field.
                                </div>
                            </div>
                        </fieldset>

                        <fieldset id="form-row">
                            <div class="one-column">
                                <legend><label for="logo-tagline">Do you have a tagline that you want to use?</label>
                                </legend>
                                <textarea placeholder="For example: Business name. We Do Good Business!"
                                    name="Do you have a tagline that you want to use?" id="logo-tagline"
                                    required></textarea>
                                <div class="invalid" id="logo-3-invalid">
                                    Required field.
                                </div>
                            </div>

                            <div class="one-column">
                                <legend><label for="logo-emotions">What do you want your logo to convey?</label>
                                </legend>
                                <textarea
                                    placeholder="What feeling or message do you want your logo to convey to those who see it?"
                                    name="What do you want your logo to convey?" id="logo-emotions" required></textarea>
                                <div class="invalid" id="logo-4-invalid">
                                    Required field.
                                </div>
                            </div>
                        </fieldset>

                        <h4 class="questionnaire-title">What kind of style(s) would you like? (see below for examples)
                        </h4>
                        <fieldset>
                            <div id="form-row" class="row-wrap">
                                <div class="checkbox"><input type="checkbox" name="Logo Type" id="wordmark">
                                    <label for="wordmark">Wordmark</label>
                                </div>
                                <div class="checkbox"><input type="checkbox" name="Logo Type" id="lettermark">
                                    <label for="lettermark">Lettermark</label>
                                </div>
                                <div class="checkbox"><input type="checkbox" name="Logo Type" id="symbol">
                                    <label for="symbol">Symbol</label>
                                </div>
                                <div class="checkbox"><input type="checkbox" name="Logo Type" id="abstract">
                                    <label for="abstract">Abstract</label>
                                </div>
                                <div class="checkbox"><input type="checkbox" name="Logo Type" id="emblem">
                                    <label for="emblem">Emblem</label>
                                </div>
                                <div class="checkbox"><input type="checkbox" name="Logo Type" id="mascot">
                                    <label for="mascot">Mascot</label>
                                </div>
                                <div class="checkbox"><input type="checkbox" name="Logo Type" id="combination">
                                    <label for="combination">Combination</label>
                                </div>
                                <div class="checkbox"><input type="checkbox" name="Logo Type" id="dynamic">
                                    <label for="dynamic">Dynamic</label>
                                </div>
                            </div>
                            <div class="invalid" id="logo-5-invalid">
                                Required field.
                            </div>

                        </fieldset>

                        <div class="large"><img src="../images/logo-types-long.jpg"
                                alt="Examples of different logo types"></div>
                        <div class="small"><img src="../images/logo-types.jpg" alt="Examples of different logo types">
                        </div>

                        <fieldset id="form-row">
                            <div class="one-column">
                                <legend><label for="logo-appeal">What logos appeal to you?</label></legend>
                                <textarea
                                    placeholder="Any logos that you like the look of. If possible, link to an image. Try to name a few and give a little explanation of why you like them."
                                    name="What logos appeal to you?" id="logo-appeal" required></textarea>
                                <div class="invalid" id="logo-6-invalid">
                                    Required field.
                                </div>
                            </div>

                            <div class="one-column">
                                <legend><label for="logo-budget">What is your budget?</label></legend>
                                <textarea placeholder="What is your budget for the project?" name="What is your budget?"
                                    id="logo-budget" required></textarea>
                                <div class="invalid" id="logo-7-invalid">
                                    Required field.
                                </div>
                            </div>
                        </fieldset>


                        <input type="checkbox" name="botcheck" class="hidden" style="display: none;">

                        <fieldset class="centered" aria-labelledby="logo-submit">
                            <button name="submit" type="submit" id="logo-submit" data-effect="spin">
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