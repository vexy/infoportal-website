<svelte:head>
    <meta name="description" content="Infoportal.app | Ваша питања, одговори, ставови и још много тога." />
    <meta name="keywords" content="people, question, opinion, vote, poll, survey, results, infoportal">

    <title>Инфопортал - листа питања</title>
</svelte:head>
<script lang="ts">
    import { navigating } from '$app/stores';
    import Loader from '$lib/Loader.svelte';
    import type { LayoutData } from './$types';
    
    export let data: LayoutData;
</script>
    
{#await data.allQuestions}
    <Loader message="Учитавање питања..." />
{:then}
    {#if $navigating?.complete}
        <Loader message="" />
    {:else}
        <slot />
    {/if}
{/await}