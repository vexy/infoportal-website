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