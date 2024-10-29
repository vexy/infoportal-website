<footer>
    <div>
        <section>
            <a href="/">
                <img
                src="/favicon.svg"
                alt="infoportal_logo"
                height="30"
                />
            </a>
            <span>INFOPORTAL</span>
        </section>

        <!-- MORE INFO -->
        <section>
            <a href="/learn-more">Сазнај више</a>
            <a href="/support-us">Подржи развој</a>
            <a href="https://github.com/vexy/infoportal-website" target="_blank">
                <img src="/github-mark.svg" alt="gh_logo" width="15" />
                Кôд платформе
            </a>
        </section>

        <!-- LEGAL -->
        <section>
            <span><b>Правне основе</b></span>
            <a href="https://www.iubenda.com/terms-and-conditions/10283915" class="iubenda-black iubenda-noiframe iubenda-embed iubenda-noiframe " title="Услови коришћења">Услови коришћења</a>
            <a href="https://www.iubenda.com/privacy-policy/10283915" class="iubenda-black iubenda-noiframe iubenda-embed iubenda-noiframe " title="Политика приватности">Политика приватности података</a>
            <a href="https://www.iubenda.com/privacy-policy/10283915/cookie-policy" class="iubenda-black iubenda-noiframe iubenda-embed iubenda-noiframe " title="Политика колачића">Политика колачића</a>
        </section>
    </div>

    <!-- Social share -->
    <div>
        <iframe 
            src="https://www.facebook.com/plugins/share_button.php?href=https%3A%2F%2Finfoportal.app&layout&size&width=77&height=20&appId"
            width="77"
            height="20"
            style="border:none;overflow:hidden"
            scrolling="no"
            frameborder="0"
            allowfullscreen="true"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            title="Facebook share"
            data-size="large"
        />
        <a href="https://twitter.com/intent/tweet?button_hashtag=infoportal&ref_src=twsrc%5Etfw" class="twitter-hashtag-button" data-text="На Инфопортал платформи можете сазнати више на разне теме" data-url="https://infoportal.app" data-lang="en" data-show-count="false">Tweet #button</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
    </div>

    <p>Copyright © 2024 Veljko Tekelerovic</p>
</footer>

<style>
    div {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
    }

    section {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        gap: 5px;
        width: 100%;
    }

    a {
        color: var(--blue-medium);
    }

    a:visited {
       color: var(--blue-light); 
    }
</style>