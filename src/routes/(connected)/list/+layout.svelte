<script lang="ts">
    import Loader from '$lib/Loader.svelte';
    import type { LayoutData } from './$types';
    
    export let data: LayoutData;
</script>
    
{#await data.allQuestions}
    <Loader message="Учитавање питања..." />
{:then}
    <slot />
{/await}