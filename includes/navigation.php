<?php require_once 'config.php'; ?>

<nav>
    <div class="navbar">
        <div class="logo">
            <div id="theme-toggle">
                <div id="theme-icon">
                    <img src="../images/kittycode_logo.svg"
                        alt="KittyCode Creative is a new web design agency based in Eastbourne, East Sussex">
                </div>
            </div>
            <h4>KittyCode Creative</h4>
        </div>
        <div class="links">
            <ul id="services-nested">
                <li><a href="<?php echo BASE_URL; ?>">Home</a></li>
                <li><a href="<?php echo BASE_URL . '/about-us'; ?>">About</a></li>
                <li><a href="<?php echo BASE_URL . '/our-portfolio'; ?>">Portfolio</a></li>
                <li class="services-link">
                    <a href="<?php echo BASE_URL; ?>" onclick="return false;">Services</a>
                    <ul class="services-link-inner">
                        <li class="nested"><a href="<?php echo BASE_URL . '/services/web-design'; ?>">Website Design</a>
                        </li>
                        <li class="nested"><a href="<?php echo BASE_URL . '/services/website-questionnaire'; ?>">Website
                                Questionnaire</a></li>
                        <li class="nested"><a href="<?php echo BASE_URL . '/services/logo-design'; ?>">Logo Design</a>
                        </li>
                        <li class="nested"><a href="<?php echo BASE_URL . '/services/logo-questionnaire'; ?>">Logo
                                Questionnaire</a></li>
                    </ul>
                </li>
                <li><a href="<?php echo BASE_URL . '/contact'; ?>">Contact</a></li>
                <li><a href="<?php echo BASE_URL . '/our-blog'; ?>">Blog</a></li>
            </ul>
        </div>
        <div id="nav-icon">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>
</nav>