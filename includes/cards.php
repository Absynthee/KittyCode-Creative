<?php require_once 'config.php'; ?>

<!-- card 1 -->

<div class="data-tilt tilt-disable-mobile" data-tilt data-tilt-reverse="true" data-tilt-axis="x">
    <section class="card">
        <div class="inside">
            <div class="card-plan">
                <label for="standard-plan">standard</label>
                <div class="payment-type">
                    <span class="monthly">£40/month</span>
                    <span class="one-off">£650</span>
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
                <p id="design-fee-standard"><label for="design-fee-standard">£300</label> initial
                    design fee applies</p>
            </div>
            <div class="centered-button">
                <a href="<?php echo BASE_URL . '/services/web-design' ?>">
                    <button class="" data-effect="none" id="standard-plan">
                        <span class="text">get started</span>
                        <span class="shimmer"></span>
                    </button>
                </a>
            </div>
        </div>
    </section>
</div>

<!-- card 2 -->

<section class="card primary">
    <div class="inside">
        <div class="popular">
            <sparkly-text style="--sparkly-text-color: yellow" role="presentation">recommended
            </sparkly-text>
        </div>
        <div class="card-plan">
            <label for="premium-plan">premium</label>
            <div class="payment-type">
                <span class="monthly">£75/month</span>
                <span class="one-off">£2000</span>
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
            <p id="design-fee-premium"><label for="design-fee-premium">£450</label> initial design
                fee applies</p>
        </div>
        <div class="centered-button">
            <a href="<?php echo BASE_URL . '/services/web-design' ?>">
                <button class="" data-effect="spin" id="premium-plan">
                    <span class="text">get started</span>
                    <span class="shimmer"></span>
                </button>
            </a>
        </div>

    </div>
</section>

<!-- card 3 -->

<div class="data-tilt tilt-disable-mobile" data-tilt data-tilt-reverse="true" data-tilt-axis="x">
    <section class="card">
        <div class="inside">
            <div class="card-plan">
                <label for="premium-plus-plan">premium+</label>
                <div class="payment-type">
                    <span class="monthly">£100/month</span>
                    <span class="one-off">£3000</span>
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
                <p id="design-fee-premium-plus"><label for="design-fee-premium-plus">£750</label>
                    initial design fee applies</p>
            </div>
            <div class="centered-button">
                <a href="<?php echo BASE_URL . '/services/web-design' ?>">
                    <button class="" data-effect="none" id="premium-plus-plan">
                        <span class="text">get started</span>
                        <span class="shimmer"></span>
                    </button>
                </a>
            </div>
        </div>
    </section>
</div>