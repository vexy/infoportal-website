<svelte:head>
    <meta name="description" content="Infoportal.app | Ваша питања, одговори, ставови и још много тога." />
    <meta name="keywords" content="support, infoportal, people, poll, survey, finances">

    <title>Инфопортал - подршка</title>
</svelte:head>
<svelte:document>
    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-P0RR1V030Z"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        
        gtag('config', 'G-P0RR1V030Z');
        </script>
</svelte:document>
<script>
    import PlatformLogo from "$components/PlatformLogo.svelte";
</script>

<PlatformLogo />

<h1>Подршка</h1>

<p>Најбоље ћете нас подржати самом <u>употребом система</u>. Активно учествујте у постављању и одговарању на питања, као и даљем <u>дељењу на друштвеним мрежама</u>.</p>

<p>Финансијски нас можете подржати на један од следећих начина:</p>
<ul>
    <li><a href="https://github.com/sponsors/vexy">GitHub Sponsor</a></li>
    <li><a href="https://www.patreon.com/c/vex_tech">Patreon</a></li>
    <li><a href="https://buymeacoffee.com/vex.tech">Buy me a coffee</a></li>
    <!-- <li>Thanks dev</li> -->
</ul>

<p>У колико сте програмер, можете нас подржати директном контрибуцијом кoда на <a href="https://github.com/vexy/infoportal-website">Github репозиторијуму</a>.</p>

<style>
    p {
        margin-inline: 2rem;
    }
</style>