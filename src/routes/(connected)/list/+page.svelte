<script lang="ts">
    import type { Question } from "$models/Question";
    import { onMount } from "svelte";

    // list of questions will be returned here
    export let data;

    const questions = data.allQuestions;

    onMount(async () => {
        console.log(data);
    })
</script>

<h1>Main list of questions will be displayed here</h1>

{#each questions as questionItem }
    <p>QuestionID: {questionItem.id}</p>
    <p>TITLE: {questionItem.title}</p>

    <ul>
        {#each questionItem.options as voteOption }
            <li>{voteOption.title}</li>
            <li>{voteOption.votersCount}</li>
        {/each}
    </ul>

    <p>Total voters: { questionItem.totalVoters }</p>
    <p>Date added: { questionItem.dateAdded.toLocaleDateString() }</p>
{/each}