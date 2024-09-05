<script>
    import SurveyItem from "./SurveyItem.svelte";

    export let questions;
</script>

<div id="feed" class='flex flex-column'>
    {#each questions as questionItem (questionItem.id)}
        <SurveyItem {questionItem}/>
    {/each}
</div>

<style>
    #feed{
        gap: var(--size-4);
    }
</style>