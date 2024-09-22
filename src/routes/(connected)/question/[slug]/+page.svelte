<script lang="ts">
    import type { Question } from "$models/Models.js";

    export let data;
    const aQuestion = data.slugQuestion;
</script>

<h1> { aQuestion.title } </h1>

 <!-- check what layout to use -->
{#if data.hasAnswered}
    <p>Comming soon !!</p>
    <p> TOTAL VOTERS: { aQuestion.totalVoters } </p>
{:else}
    <ul>
        {#each aQuestion.options as voteOption }
            <li>({voteOption.votersCount}) | {voteOption.title}</li>
        {/each}
    </ul>
{/if}