<script lang="ts">
    import type { Question } from "$models/Question";
    export let data;

    const aQuestion = data.slugQuestion;
</script>

<h1> { aQuestion.title } </h1>

<p> { aQuestion.id } </p>

<ul>
    {#each aQuestion.options as voteOption }
        <li>({voteOption.votersCount}) | {voteOption.title}</li>
    {/each}
</ul>

<p> { aQuestion.isAnswered } </p>
<p> TOTAL VOTERS: { aQuestion.totalVoters } </p>

<!-- <p>URL: { data.url }</p>
<p>SHASH_HASH { data.secret }</p> -->