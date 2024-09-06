<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description"
        content="Explore KittyCode Creative's web design services. We offer bespoke web design solutions tailored to your business needs, ensuring a user-friendly and visually stunning online presence." />
    <meta property="og:title" content="Web Design - KittyCode Creative" />
    <meta property="og:description"
        content="Explore KittyCode Creative's web design services. We offer bespoke web design solutions tailored to your business needs, ensuring a user-friendly and visually stunning online presence." />
    <meta property="og:image" content="https://kittycodecreative.com/images/what-we-do.png" />
    <meta property="og:url" content="https://kittycodecreative.com/services/web-design" />
    <title>Web Design | KittyCode Creative</title>
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
    <link rel="canonical" href="https://www.kittycodecreative.com/services/web-design">
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

        <section class="logos fade-content" id="website-design">
            <div class="section-text fade-content">
                <label for="website-design">Feline creative?</label>
                <h1>Web Design & Development</h1>
                <div class="section-description">
                    <p>At KittyCode Creative, we create unique, beautiful websites to help your business grow. We design
                        a layout that is best suited to your needs and code our sites by hand. This allows us much more
                        control over the design and increases performance as there is no bloat to slow the site down.
                    </p>
                    <p> Websites built by hand will <strong>out-perform</strong> most WordPress sites and drag and drop
                        page builders which could cost 10x as much. When it comes to the web, the faster and
                        more organized websites win.</p>
                </div>
                <div class="section-buttons">
                    <a href="website-questionnaire">
                        <button class="long-button" data-effect="none">
                            <span class="text">website questionnaire</span>
                            <span class="shimmer"></span>
                        </button>
                    </a>
                </div>
            </div>

            <div class="section-img">
                <img src="../images/code.png" alt="">
            </div>
        </section>

        <section class="full-text fade-content">
            <div class="section-text fade-content">
                <h3>Want A Website? Let's Keep It Simple!</h3>
                <div class="section-description">
                    <p>We don't want to make it hard for you to decide. We offer only three packages, depending on your
                        needs. These packages come in either monthly or a one-off payment. You can compare the packages
                        below.</p>
                    <p>All packages include the following:</p>
                    <ul class="website-packages">
                        <li>Hosting and Management (For Monthly Customers)</li>
                        <li>Search Engine Optimization</li>
                        <li>Design and Content Updates As Required</li>
                        <li>Optimization for Desktop and Mobile</li>
                        <li>A Fully Responsive, Personalised Functional Website! </li>
                    </ul>
                </div>
            </div>
        </section>


        <section class="our-services website-design fade-content">
            <div class="section-text centered fade-content">
                <label hidden for="our-services">We offer purrfection.</label>
                <div class="section-description centered">
                    <div class="services-toggle">
                        <input id="toggle-on" onclick="translatePaymentTypeMonthly()" class="toggle toggle-left"
                            name="toggle" value="false" type="radio" checked>
                        <label for="toggle-on" class="toggle-button" tabindex="0">Monthly</label>
                        <input id="toggle-off" onclick="translatePaymentTypeOneOff()" class="toggle toggle-right"
                            name="toggle" value="true" type="radio">
                        <label for="toggle-off" class="toggle-button" tabindex="0">One-off</label>
                    </div>
                </div>

                <div class="packages fade-content">
                    <div class="data-tilt tilt-disable-mobile" data-tilt data-tilt-reverse="true" data-tilt
                        data-tilt-axis="x">
                        <section class="card">
                            <div class="inside">
                                <div class="card-plan">
                                    <label for="basic">standard</label>
                                    <div class="payment-type">
                                        <h3 class="monthly">£40/month</h3>
                                        <h3 class="one-off">£650</h3>
                                    </div>
                                </div>
                                <div class="card-details">
                                    <p>1-3 page website</p>
                                    <p>hosting included</p>
                                    <p>enhanced security</p>
                                    <p>10,000 monthly visits</p>
                                    <p>secure SSL</p>
                                    <p>perfect for individuals</p>
                                </div>
                                <div class="card-extras">
                                    <p class="monthly-contract"><strong>12 month contract</strong></p>
                                    <p class="one-off-deposit"><strong>50% deposit required</strong></p>
                                    <p><label for="design-fee">£300</label> initial design fee applies</p>
                                </div>
                                <div class="centered-button">
                                    <a href="website-questionnaire">
                                        <button class="" data-effect="none">
                                            <span class="text">get started</span>
                                            <span class="shimmer"></span>
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </section>
                    </div>

                    <section class="card primary">
                        <div class="inside">
                            <div class="popular"><sparkly-text
                                    style="--sparkly-text-color: yellow">recommended</sparkly-text></div>
                            <div class="card-plan">
                                <label for="standard">premium</label>
                                <div class="payment-type">
                                    <h3 class="monthly">£75/month</h3>
                                    <h3 class="one-off">£2000</h3>
                                </div>
                            </div>
                            <div class="card-details">
                                <p>4-10 page website</p>
                                <p>hosting included</p>
                                <p>unlimited updates</p>
                                <p>100,000 monthly visits</p>
                                <p>secure SSL</p>
                                <p>best for startups</p>
                            </div>
                            <div class="card-extras">
                                <p class="monthly-contract"><strong>24 month contract</strong></p>
                                <p class="one-off-deposit"><strong>50% deposit required</strong></p>
                                <p><label for="design-fee">£450</label> initial design fee applies</p>
                            </div>
                            <div class="centered-button">
                                <a href="website-questionnaire">
                                    <button class="" data-effect="spin">
                                        <span class="text">get started</span>
                                        <span class="shimmer"></span>
                                    </button>
                                </a>
                            </div>

                        </div>
                    </section>

                    <div class="data-tilt tilt-disable-mobile" data-tilt data-tilt-reverse="true" data-tilt
                        data-tilt-axis="x">
                        <section class="card">
                            <div class="inside">
                                <div class="card-plan">
                                    <label for="premium">premium+</label>
                                    <div class="payment-type">
                                        <h3 class="monthly">£100/month</h3>
                                        <h3 class="one-off">£3000</h3>
                                    </div>
                                </div>
                                <div class="card-details">
                                    <p>up to 100 pages</p>
                                    <p>CMS content & blog pages</p>
                                    <p>increased hosting speed</p>
                                    <p>1,000,000 monthly visits</p>
                                    <p>priority edits and updates</p>
                                    <p>perfect for small businesses</p>
                                </div>
                                <div class="card-extras">
                                    <p class="monthly-contract"><strong>24 month contract</strong></p>
                                    <p class="one-off-deposit"><strong>50% deposit required</strong></p>
                                    <p><label for="design-fee">£750</label> initial design fee applies</p>
                                </div>
                                <div class="centered-button">
                                    <a href="website-questionnaire">
                                        <button class="" data-effect="none">
                                            <span class="text">get started</span>
                                            <span class="shimmer"></span>
                                        </button>
                                    </a>
                                </div>

                            </div>
                        </section>
                    </div>

                </div>
        </section>

        <section class="full-text centered fade-content">
            <div class="section-text fade-content">
                <h3>What We Believe In</h3>
            </div>
        </section>

        <section class="blurbs fade-content">
            <div class="blurb">
                <div class="blurb-container">
                    <img src="../images/icons/17.svg" alt="Responsive">
                    <h3><sparkly-text style="--sparkly-text-color: orange">Accessibility</sparkly-text></h3>
                    <p>we're passionate about making the web accessible to everyone. We believe that everyone,
                        regardless of disabilities, deserves equal access to the digital world. By following the
                        Equality Act 2010 and using accessibility best practices, we expand our clients' reach and
                        create smoother, more enjoyable experiences for all users.</p>
                </div>
            </div>
            <div class="blurb">
                <div class="blurb-container">
                    <img src="../images/icons/13.svg" alt="Design">
                    <h3><sparkly-text style="--sparkly-text-color: orange">SEO</sparkly-text></h3>
                    <p>Our dedication to accessibility aligns with our commitment to SEO. This ensures our websites rank
                        well on search engines and stay ahead of changing standards and technologies. We take pride in
                        helping our clients foster goodwill and loyalty through inclusive, user-friendly designs.</p>
                </div>
            </div>
            <div class="blurb">
                <div class="blurb-container">
                    <img src="../images/icons/4.svg" alt="Accessible">
                    <h3><sparkly-text style="--sparkly-text-color: orange">Sustainability</sparkly-text></h3>
                    <p>We also care deeply about our planet. By hand-coding our websites, we make them more energy
                        efficient. Quicker load times and less server strain enhance user experience and reduce
                        environmental impact. Optimising resources and eliminating unnecessary code helps us cut down on
                        energy use, contributing to a greener, more sustainable world.</p>
                </div>
            </div>
        </section>

        <section class="full-text centered fade-content">
            <div class="section-text fade-content">
                <h3>What You Get</h3>
            </div>
        </section>

        <section class="blurbs fade-content">
            <div class="blurb">
                <div class="blurb-container">
                    <img src="../images/icons/5.svg" alt="Responsive">
                    <h3><sparkly-text style="--sparkly-text-color: orange">Fully Responsive</sparkly-text></h3>
                    <p>Your website will fit all mobile screens sizes, tablets, and desktop sizes so new clients can
                        access your site from anywhere.</p>
                </div>
            </div>
            <div class="blurb">
                <div class="blurb-container">
                    <img src="../images/icons/2.svg" alt="Design">
                    <h3><sparkly-text style="--sparkly-text-color: orange">Unique Design</sparkly-text></h3>
                    <p>Your website will be 100% handcrafted and totally unique to you. No templates here.</p>
                </div>
            </div>
            <div class="blurb">
                <div class="blurb-container">
                    <img src="../images/icons/12.svg" alt="Accessible">
                    <h3><sparkly-text style="--sparkly-text-color: orange">Consistency</sparkly-text></h3>
                    <p>We will help you build a positive and inclusive brand image that resonates with your audience,
                        fostering goodwill and loyalty. </p>
                </div>
            </div>
        </section>

        <section class="full-text centered fade-content">
            <div class="section-text centered fade-content">
                <label hidden for="our-portfolio">How do you like us meow?</label>
                <h3>Our Portfolio</h3>
                <div class="section-description centered">
                    <p>These are the projects we have completed for clients. Take a look around, we hope to add your
                        website to the list sometime soon!</p>
                </div>
            </div>

            <div class="section-buttons centered-button">
                <a href="../our-portfolio"><button class="" data-effect="throb">
                        <span class="text">our designs</span>
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