<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description"
        content="Find answers to frequently asked questions about KittyCode Creative and our services. If you can't find the answer you're looking for, please contact us.">
    <meta property="og:title" content="FAQ - KittyCode Creative" />
    <meta property="og:description"
        content="Find answers to frequently asked questions about KittyCode Creative, your digital web design agency. Learn more about our services, processes, and how we can help you with bespoke web design, development, SEO, and logo services." />
    <meta property="og:image" content="https://kittycodecreative.com/images/faq.png" />
    <meta property="og:url" content="https://kittycodecreative.com/faq" />
    <title>Our FAQs | KittyCode Creative</title>
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
    <link rel="canonical" href="https://www.kittycodecreative.com/faq">

    <?php include $_SERVER['DOCUMENT_ROOT'] . '/includes/analytics.php'; ?>
</head>

<body>

    <?php include $_SERVER['DOCUMENT_ROOT'] . '/includes/navigation.php'; ?>
    <!-- <div class="blur1"></div> -->

    <main>

        <section class="hero fade-content" id="faq">
            <div class="section-text fade-content">
                <label for="faq">These look fur-miliar...</label>
                <h1>FAQs</h1>
                <div class="hero-description">
                    <p>We haven't actually been around for long enough to have many frequently asked questions, so
                        some of these are pre-emptive! If there's something you might have questions about, hopefully we
                        have the answer for you here. If not, feel free to contact us on the form below.</p>
                </div>


            </div>

            <div class="section-img">
                <img src="images/faq.png" alt="">
            </div>
        </section>

        <section class="full-text fade-content">
            <div class="faq open">
                <h3>Is hosting included in your packages?</h4>
                    <p>Yes, all of our monthly packages include hosting charges. This enables us to keep your
                        website up and running. If you stop your monthly payments before your contract expires, your
                        hosting will also stop. If you're not on a monthly package, we can host for you for an
                        additional fee.</p>
            </div>
            <div class="faq closed">
                <h3>Am I able to change the content on my website?</h4>
                    <p>If you are on a package that grants you editor access, yes. This is currently not available
                        on our standard package. If you do require editor access, please let us know. Generally, we
                        prefer to do the work ourselves as it's easier to maintain consistency and so you don't have
                        to worry about it. Just let us know that you need a change to be made.</p>
            </div>
            <div class="faq closed">
                <h3>How fast will my website load?</h4>
                    <p>Fast. No matter which package you choose, your website will always be delivered by our
                        provider within milliseconds.</p>
            </div>
            <div class="faq closed">
                <h3>Do you offer SEO?</h4>
                    <p>All of our web packages include SEO. While we cannot guarantee that your website will be
                        listed within the top search results of Google, we will do our best to get your website as close
                        to
                        the top as possible.</p>
            </div>
            <div class="faq closed">
                <h3>I already have a website, I just need you to manage it for me. Is this something you offer?</h4>
                    <p>Absolutely! We have no set pricing for this sort of request, so it will depend on a
                        case-by-case basis. Send us a message and we will gladly manage your website for you.</p>
            </div>
            <div class="faq closed">
                <h3>Why should we choose you?</h4>
                    <p>We're certainly glad you're considering us! As a new agency we don't have the portfolio of
                        others that have been around for years. However, we have all the skills and know-how to
                        deliver you the best website for your needs... and we do it cheaper than anyone else.</p>
            </div>
            <div class="faq closed">
                <h3>What happens if I need to cancel my monthly payments?</h4>
                    <p>If you cancel your monthly payments without warning before your contract is up, your website
                        will be taken down. Your monthly fee ensures we are able to keep everything up and running.
                        However, we understand that sometimes things don't always go as plan and you might need to
                        cancel the service. If this is the case, please let us know at least one month in advance so
                        we can work something out and adjust your direct debit.</p>
            </div>
            <div class="faq closed">
                <h3>What happens after my contract has ended?</h4>
                    <p>After your contract is up, you will move onto a rolling monthly contract. When the time
                        comes, we may be able to offer a new contract at a reduced price.</p>
            </div>
        </section>

        <section class="contact-us fade-content">
            <div class="section-text fade-content">
                <label for="contact-us">Whisker me away.</label>
                <a href="contact">
                    <h1>Contact Us</h1>
                </a>
                <div class="section-description">
                    <p>Didn't find an answer to your question? Let us know. We'll be happy to help.</p>
                </div>
                <div class="contact-container">
                    <form id="contact" action="" method="post" novalidate>
                        <input type="hidden" name="access_key" value="34317982-f38f-4672-b238-073c162f37c4">

                        <fieldset>
                            <label for="name">Name</label>
                            <input placeholder="Sir Pawsworth III" name="name" id="name" type="text" required>
                            <div class="invalid" id="name-invalid">
                                Please provide your name.
                            </div>

                        </fieldset>
                        <fieldset>
                            <label for="email">Email</label>
                            <input placeholder="meow@kittycodecreative.com" name="email" id="email" type="email"
                                required>
                            <div class="invalid" id="email-invalid">
                                Please provide your email address.
                            </div>

                        </fieldset>
                        <fieldset>
                            <label for="subject">Subject</label>
                            <input placeholder="What do you knead?" name="subject" id="subject" type="text" required>
                            <div class="invalid" id="subject-invalid">
                                Let us know why you're contacting us.
                            </div>

                        </fieldset>

                        <fieldset>
                            <label for="message">Your Message</label>
                            <textarea placeholder="Type your Message Here..." name="message" id="message"
                                required></textarea>
                            <div class="invalid" id="message-invalid">
                                Leave us a nice message. Let us know what you're after.
                            </div>

                        </fieldset>
                        <input type="checkbox" name="botcheck" class="hidden" style="display: none;">
                        <fieldset>
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

            <div class="section-img">
                <img src="images/contact-us.png" alt="">
            </div>
        </section>


    </main>

    <div class="footer-top"></div>

    <?php include $_SERVER['DOCUMENT_ROOT'] . '/includes/navigation-footer.php'; ?>
    <?php include $_SERVER['DOCUMENT_ROOT'] . '/includes/cookie-banner.php'; ?>

</body>

</html>