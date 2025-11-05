<svelte:head>
    <meta name="description" content="Infoportal.app | Ваша питања, одговори, ставови и још много тога." />
    <meta name="keywords" content="people, question, opinion, vote, poll, survey, results, infoportal">

    <title>Инфопортал - листа питања</title>
</svelte:head>
<script lang="ts">
    import { navigating } from '$app/state';
    import type { LayoutData } from './$types';
    import type { Snippet } from 'svelte';
    import Loader from '$components/Loader.svelte';

    let { data, children }: {data: LayoutData, children: Snippet} = $props();
</script>
    
{#await data.allQuestions}
    <Loader message="Учитавање свих питања..." />
{:then}
    {#if navigating?.complete}
        <Loader message="Учитавање питања..." />
    {:else}
        {@render children?.()}
    {/if}
{/await}