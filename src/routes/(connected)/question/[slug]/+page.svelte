<script lang="ts">
    import type { QuestionMeta } from "$models/Models.js";

    // pageload export
    export let data;

    const aQuestion = data.slugQuestion;
    let showAdditionals = false;
</script>

<h1> { aQuestion.title } </h1>

 <!-- check what layout to use -->
{#if data.hasAnswered}
    <p>Comming soon !!</p>
    <p> TOTAL VOTERS: { aQuestion.totalVoters } </p>
{:else}
<fieldset>
    <legend>Понуђени одговори</legend>
    {#each aQuestion.question_options as voteOption, index }
        <div>
            <input
                id="option_{index}"
                name="vote_options" 
                type="radio"
                value={index}
            />
            <label for="option_{index}">{voteOption}</label>
        </div>
    {/each}

    {#if showAdditionals}
        <fieldset>
            <div>
                <input id="none" type="radio" name="additionals"/>
                <label for="none">Ништа од наведеног</label>

                <input id="unclear" type="radio" name="additionals"/>
                <label for="unclear">Питање није разумљиво</label>

                <input id="inadequate" type="radio" name="additionals"/>
                <label for="inadequate">Не адекватно питање</label>
            </div>
        </fieldset>
    {/if}

    <!-- <fieldset>
        <legend>Dodatne opcije</legend>
        <p>some additionals</p>
    </fieldset> -->
    <button on:click={() => {showAdditionals = !showAdditionals}}>Додатне опције</button>
</fieldset>
{/if}

<button>Пошаљи одговор</button>

<style>
    fieldset {
        display: flex;
        flex-direction: column;
    }
</style>