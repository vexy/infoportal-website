<svelte:head>
    <meta name="description" content="Infoportal.app | Ваша питања, одговори, ставови и још много тога." />
    <meta name="keywords" content="people, question, opinion, vote, poll, survey, results, infoportal">
    <meta name="keywords" content="usage, stats, statistics">
    <meta name="keywords" content="user, count, countries">

    <title>Инфопортал - статистика платформе</title>
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

<script lang="ts">
    import PlatformLogo from "$components/PlatformLogo.svelte";

    export let data;

    $: stats = data.statsObject;
</script>

<section>
    <PlatformLogo />
    <h1>Статистика платформе</h1>

    <summary>
        <div>
            <p>Број регистрованих корисника:</p>
            <span>{stats.users_count}</span>
        </div>
        <div>
            <p>Број постављених питања:</p>
            <span>{stats.questions_count}</span>
        </div>
    </summary>

    <p>Топ 5 земаља из које долазе корисници:</p>
    <ol>
        <li>{stats.country1}</li>
        <li>{stats.country2}</li>
        <li>{stats.country3}</li>
        <li>{stats.country4}</li>
        <li>{stats.country5}</li>
    </ol>

    <i>Статистика се освежава једном недељно</i>
</section>

<style>
    section {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    h1 {
        margin-bottom: 3.5rem;
    }

    summary {
        display: flex;
        flex-direction: column;
    }

    div {
        margin: none;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 1rem;
    }

    div > p {
        margin: 5px;
    }

    span {
        min-width: 30px;
        text-align: right;
        font-weight: 700;
    }

    i {
        margin-top: 5rem;
        font-weight: 200;
    }
</style>