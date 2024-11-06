<svelte:head>
    <meta name="description" content="Infoportal.app | Ваша питања, одговори, ставови и још много тога." />
    <meta name="keywords" content="people, question, opinion, vote, poll, survey, results, infoportal">

    <title>Инфопортал - {getPageTitle()}</title>
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
    import QuestionVote from '$components/QuestionVote.svelte';
    import ScoreDisplay from '$components/ScoreDisplay.svelte';

    export let data;        // pageload export 

    $: meta = data.meta;
    $: scores = data.scores;

    function getPageTitle() {
        return meta?.title || scores?.title;
    }
</script>

<h1>{getPageTitle()}</h1>

 <!-- check what layout to use -->
{#if scores}
    <ScoreDisplay scores={scores} />
{:else}
    <QuestionVote form={null} meta={meta} />
{/if}

<style>
    h1 {
        font-size: 1.65rem;
        text-align: center;
        margin-inline: 1rem;
    }
</style>