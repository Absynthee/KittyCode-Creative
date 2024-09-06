<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description"
        content="Learn the latest tips and trends in web design and development with our insightful blog posts. Stay ahead with KittyCode Creative’s expert advice">
    <meta property="og:title" content="Blog - KittyCode Creative" />
    <meta property="og:description"
        content="Stay updated with the latest tips and trends in web design, development, and SEO on the KittyCode Creative blog. Explore our expert insights and keep ahead in the digital world." />
    <meta property="og:image" content="https://kittycodecreative.com/images/faq.png" />
    <meta property="og:url" content="https://kittycodecreative.com/blog" />
    <title>Web Design & Creative Insights | KittyCode Creative</title>
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
    <link rel="canonical" href="https://www.kittycodecreative.com/our-blog">
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

        <div class="hero fade-content">

            <div class="hero-text fade-content" id="hero">
                <label for="hero">Welcome to</label>
                <h1>The Blog</h1>
                <div class="hero-description fade-content">
                    <p>Welcome to the KittyCode Creative blog! Here, we share our insights, expertise, and the latest
                        trends in the world of web design and development. Whether you're a business owner looking to
                        enhance your online presence, a developer seeking best practices, or simply someone passionate
                        about the digital landscape, you'll find valuable information and inspiration.</p>
                    <p>We're dedicated to crafting beautiful, functional, and accessible websites. Our blog is an
                        extension of that commitment, offering valuable content to help you navigate the digital world.

                        Stay tuned for regular updates, and don’t hesitate to reach out if you have any questions or
                        topics you'd like us to cover. Happy reading!</p>
                </div>

            </div>

            <div class="hero-img">
                <div class="hero-cat"></div>
            </div>
        </div>

        <div class="tags wrap">
            <div class="tag">web design agency</div>
            <div class="tag">business</div>
            <div class="tag">web design</div>
            <div class="tag">accessibility</div>
            <div class="tag">coding</div>
            <div class="tag">ai</div>
        </div>

        <!-- Latest Post -->

        <section class="full-text fade-content">
            <h3><sparkly-text style="--sparkly-text-color: orange">Latest Post</sparkly-text></h3>
            <div class="grid-images fade-content">
                <div class="grid-item blog-container latest-post">
                    <div class="latest-post-image">
                        <a href="blog/lights-out-dark-theme">
                            <img class="blog-image" src="./images/blog/lights-out.jpg"
                                alt="Modern CSS in Web Design"></a>
                    </div>
                    <div class="blog-details">
                        <h3 class="blog-title">Lights Out: Introducing Our New Dark Theme</h3>
                        <div class="blog-tags">
                            <div class="tag">web design</div>
                            <div class="tag">accessibility</div>
                        </div>
                        <p class="blog-description">At KittyCode Creative, user experience and accessibility is always
                            at the forefront of our design
                            decisions, and we're excited to unveil a brand-new feature—<strong>dark mode</strong>! With
                            a simple switch, you can now adjust your browsing experience to suit your personal
                            preference or
                            the time of day. Our website will now automatically adapts to your device's theme
                            settings, offering seamless transitions between light and dark modes using the
                            <code>lightdark()</code> CSS function. Click on our mascot Code up in the top left and try
                            switching for yourself!
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- All Posts -->

        <section class="full-text fade-content">
            <h3>All Posts</h3>
            <div class="grid-images fade-content">
                <!-- card start -->
                <!-- <div class="grid-item blog-container">
                    <a href="blog/the-human-behind-kittycode-creative">
                        <img class="blog-image" src="./images/blog/austin.jpg"
                            alt="img alt">
                        <div class="blog-details">
                            <h3 class="blog-title">Title</h3>
                    </a>
                    <div class="blog-tags">
                        <div class="tag">tag</div>
                        <div class="tag">tag</div>
                    </div>

                    <p class="blog-description">description.</p>
                </div>
            </div> -->
                <!-- card end -->
                <div class="grid-item blog-container">
                    <a href="blog/lights-out-dark-theme">
                        <img class="blog-image" src="./images/blog/lights-out.jpg" alt="img alt">
                        <div class="blog-details">
                            <h3 class="blog-title">Lights Out: Introducing Our New Dark Theme</h3>
                    </a>
                    <div class="blog-tags">
                        <div class="tag">web design</div>
                        <div class="tag">accessibility</div>
                    </div>

                    <p class="blog-description">At KittyCode Creative, user experience and accessibility is always at
                        the forefront of our design
                        decisions, and we're excited to unveil a brand-new feature—<strong>dark mode</strong>! With
                        a simple switch, you can now adjust your browsing experience to suit your personal preference or
                        the time of day. Our website will now automatically adapts to your device's theme
                        settings, offering seamless transitions between light and dark modes using the
                        <code>lightdark()</code> CSS function. Click on our mascot Code up in the top left and try
                        switching for yourself!
                    </p>
                </div>
            </div>

            <div class="grid-item blog-container">
                <a href="blog/the-role-of-ai-in-web-design">
                    <img class="blog-image" src="./images/blog/ai-web-design.jpg" alt="img alt">
                    <div class="blog-details">
                        <h3 class="blog-title">The Role of AI in Web Design and Development</h3>
                </a>
                <div class="blog-tags">
                    <div class="tag">web design</div>
                    <div class="tag">ai</div>
                </div>

                <p class="blog-description">Artificial Intelligence (AI) has been making waves in almost every industry,
                    and web design and development is no exception. From automating repetitive tasks to enhancing user
                    experiences, AI is changing how websites are built and maintained. But is it the next big thing, or
                    just a helpful tool? Let’s take a closer look at how AI is shaping the web design landscape.</p>
            </div>
            </div>

            <div class="grid-item blog-container">
                <a href="blog/the-power-of-modern-css">
                    <img class="blog-image" src="./images/blog/css.jpg" alt="The Power of Modern CSS">
                    <div class="blog-details">
                        <h3 class="blog-title">The Power of Modern CSS: A Game-Changer for Web Design</h3>
                </a>
                <div class="blog-tags">
                    <div class="tag">web design</div>
                    <div class="tag">coding</div>
                </div>

                <p class="blog-description">If you've ever wondered how websites get their beautiful layouts, fonts,
                    colours, and interactive
                    features, the answer lies in CSS. But what exactly is CSS, and why is it such a big deal in
                    today’s web design world? Let’s break it down.</p>
            </div>
            </div>

            <div class="grid-item blog-container">
                <a href="blog/the-human-behind-kittycode-creative">
                    <img class="blog-image" src="./images/blog/austin.jpg" alt="The Human Behind KittyCode Creative">
                    <div class="blog-details">
                        <h3 class="blog-title">The Human Behind KittyCode Creative (Not a Cat?)</h3>
                </a>
                <div class="blog-tags">
                    <div class="tag">business</div>
                    <div class="tag">web design agency</div>
                </div>

                <p class="blog-description">KittyCode Creative isn't run by cats alone. Meet Austin Spillman,
                    the human and sole developer behind the new web design agency KittyCode Creative.</p>
            </div>
            </div>
            <div class="grid-item blog-container">
                <a href="blog/the-launch-of-a-new-digital-web-design-agency">
                    <img class="blog-image" src="./images/blog/kittycode.jpg" alt="The Launch of KittyCode Creative">
                    <div class="blog-details">
                        <h3 class="blog-title">Announcing the Launch of a New Digital Web Design Agency</h3>
                </a>
                <div class="blog-tags">
                    <div class="tag">web design agency</div>
                    <div class="tag">business</div>
                </div>

                <p class="blog-description">We are excited to announce the launch of KittyCode Creative, a new
                    digital
                    web design agency based in Eastbourne, East Sussex, dedicated to delivering bespoke web design,
                    front-end development, and creative solutions tailored to your needs.</p>
            </div>
            </div>
            <div class="grid-item blog-container">
                <a href="blog/why-acessibility-matters"><img class="blog-image"
                        src="./images/blog/web-accessibility.jpg" alt="Why Web Accessibility Matters">
                    <div class="blog-details">
                        <h3 class="blog-title">Why Accessibility Matters in Web Design: A Personal Perspective</h3>
                </a>
                <div class="blog-tags">
                    <div class="tag">web design</div>
                    <div class="tag">accessibility</div>
                </div>
                <p class="blog-description">At KittyCode Creative, we’re passionate about making the web a place
                    where everyone feels welcome and included. As a digital web design agency, we’re committed
                    to creating websites that are not only visually stunning but also accessible to all. Here’s
                    why accessibility in web design is so important to us and how it can benefit your business.
                </p>
            </div>
            </div>
            <div class="grid-item blog-container">
                <a href="blog/benefits-of-hand-coding-your-website">
                    <img class="blog-image" src="./images/blog/hand-code.jpg"
                        alt="Benefits of Hand-Coding Your Website">
                    <div class="blog-details">
                        <h3 class="blog-title">The Benefits of Hand-Coding Your Website Over Using Site Builders</h3>

                </a>
                <div class="blog-tags">
                    <div class="tag">web design</div>
                    <div class="tag">coding</div>
                </div>

                <p class="blog-description">We often get asked why we prefer hand-coding
                    websites over using popular site builders. While site builders like Wix, Squarespace, and
                    WordPress offer convenience and speed, hand-coding your website can provide significant
                    advantages that are worth considering.</p>
            </div>
            </div>

        </section>


    </main>

    <div class="footer-top"></div>

    <?php include 'includes/navigation-footer.php' ?>
    <?php include 'includes/cookie-banner.php' ?>

</body>

</html>