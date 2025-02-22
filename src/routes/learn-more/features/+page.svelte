<svelte:head>
    <meta name="description" content="Infoportal.app | Ваша питања, одговори, ставови и још много тога." />
    <meta name="keywords" content="karakteristike, authors, fraud, prevention">
    <meta name="keywords" content="pokret, moba">

    <title>Инфопортал - основне функционалности</title>
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

<h2>Основне карактеристике</h2>
<ul>
    <li>Бесплатан за употребу</li>
    <li>Регистрација путем Google налога</li>
    <li>Једноставно постављање питања и понуђених одговора</li>
    <li>Брзи увид у резултате одговора</li>
    <li>Једноставна претрага свих питања</li>
    <li>Заштита идентитета корисника употребом напредних криптографских метода</li>
    <li>Софтверски кôд платформе је <a href="https://github.com/vexy/infoportal-website" target="_blank">отворен и јавно доступан</a> свима</li>
</ul>

<h2>Аутори платформе:</h2>
<ul>
    <li><b>немају</b> увид у изборе корисника</li>
    <li><b>не ограничавају</b> кориснике начином употребе</li>
    <li><b>нису одговорни</b> за садржај постављен на платформу</li>
</ul>

<h3>Спречавање потенцијалне злоупотребе</h3>
<ul>
    <li>Потенцијална злоупотреба се спречава маркирањем одређеног питања као <i>”неадекватно”</i></li>
    <li>Питања која <u>50% корисника</u> маркира као неадекватно ће аутоматски бити уклоњена са система, без интервенције самих аутора</li>
    <li>Могућност за маркацију неадекватних питања имају <b>сви</b> регистровани корисници</li>
</ul>

<h3>Историјат платформе</h3>
<ul>
    <li>Инфопортал је публикован 2024. године</li>
    <li>Настаје као наставак <a href="https://github.com/vexy/voting_platform">претходне верзије</a>, базиране на <i>блокчејн технологији</i>, публиковане 2022. године</li>
    <li>Планирана су разна унапређења и побољшања система</li>
</ul>

<style>
    h3 {
        margin-inline: 2rem;
    }
</style>