<svelte:head>
    <meta name="description" content="Infoportal.app | Ваша питања, одговори, ставови и још много тога." />
    <meta name="keywords" content="learn, more, infoportal, stats, people, poll, survey">
    <meta name="keywords" content="pokret, moba">

    <title>Инфопортал - сазнај више</title>
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
    import MobaLogo from "$components/MobaLogo.svelte";
    import PlatformLogo from "$components/PlatformLogo.svelte";
</script>

<PlatformLogo />

<h1>Шта је Инфопортал ?</h1>

<ul>
    <li>Инфопортал је једноставно и отворено софтверско решење у форми вебсајта</li>
    <li>Својим корисницима омогућава:</li>
    <ul>
        <li>напреднији начин колективног управљања, базиран на концепту <b>већинског изјашњавања</b> милионског броја корисника</li>
        <li>партиципацију у процесу одлучивања и доношењу одлука</li>
        <li>активан приступ, у сваком тренутку, ма где се корисници налазили</li>
        <li>спровођење учесталих референдума</li>
        <li><a href="/learn-more/features">анонимност</a> употребе</li>
    </ul>
    <li>Представља јединствено решење оваквог типа у целом свету</li>
    <li>Систем је намењен становницима <u>државе Србије у земљи и расејању 🇷🇸</u></li>
</ul>

<p>Сазнајте више о <a href="/learn-more/features">функционалностима платформе</a></p>

<p>Платформа је креирана у сарадњи са <a href="https://www.pokretmoba.com" target="_blank">покретом Моба</a></p>
<MobaLogo />

<style>
    p {
        text-align: center;
        margin: none;
    }

    ul {
        margin-inline: 0.5rem;
    }
</style>