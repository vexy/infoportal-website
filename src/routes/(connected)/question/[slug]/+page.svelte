<script lang="ts">
    import Loader from '$lib/Loader.svelte';
    import { VOTE_OPTIONS } from '$models/Models';

    export let data;        // pageload export
    export let form;        // form object

    let showLoader = false;

    $: meta = data.meta;
    $: scores = data.scores;

    let showAdditionals = false;
    let optionChoice = -1;  //indicates no selection has been made

    function getMeterValue(option: VOTE_OPTIONS): number {
        return (scores!.option_scores[option] / scores!.total_voters) * 100
    }

    function getScorePercentage(option: VOTE_OPTIONS): string {
        return ((scores!.option_scores[option] / scores!.total_voters) * 100).toFixed(1)
    }

    function getExtrasPercentage(option: VOTE_OPTIONS): string {
        let extrasCount = 0;
        switch(option) {
            case VOTE_OPTIONS.NONE:
                extrasCount = scores!.none; break;
            case VOTE_OPTIONS.NOT_CLEAR:
                extrasCount = scores!.not_clear; break;
            case VOTE_OPTIONS.INADEQUATE:
                extrasCount = scores!.inadequate; break;
        }

        return ((extrasCount / scores!.total_voters) * 100).toFixed(1);
    }
</script>

 <!-- check what layout to use -->
{#if scores}
<h1> { scores.title } </h1>

<score-container>
    {#each scores.question_options as voteOption, index }
        <div>
            <p>{voteOption}</p>
            <p>({getScorePercentage(index)} %)</p>
        </div>
        <meter 
            min="0"
            max="100"
            low="33"
            high="75"
            optimum="80"
            value={getMeterValue(index)} />
    {/each}
    <hr>
    <additionals>
        <div>
            <p>Ништа од наведеног:</p><p>{ getExtrasPercentage(VOTE_OPTIONS.NONE) } %</p>
        </div>
        <div>
            <p>Питање није разумљиво:</p><p>{ getExtrasPercentage(VOTE_OPTIONS.NOT_CLEAR) } %</p>
        </div>
        <div>
            <p>Не адекватно питање:</p><p>{ getExtrasPercentage(VOTE_OPTIONS.INADEQUATE) } %</p>
        </div>
    </additionals>

    <hr>

    <totals>
        <div>
            <img src="/people.svg" alt="vote_count" height="22px" width="22px" />
            <span>Укупно одговора:</span>
        </div>
        <p><b>{ scores.total_voters }</b></p>
        <!-- <meter min="0" max="100" value={questionScores[index]} /> -->
    </totals>

    <!-- TODO: add share button -->
    <!-- <button disabled>Подели</button> -->
</score-container>

{:else}

<h1>{ meta.title }</h1>

<form method="POST" action="?/commitOption">
    {#each meta.question_options as voteOption, index }
        <div>
            <input
                id="option_{index + 1}"
                name="vote_options" 
                type="radio"
                value={VOTE_OPTIONS[index + 1]}
                bind:group={optionChoice}
            />
            <label for="vote_options">{voteOption}</label>
        </div>
    {/each}

    <hr>

    {#if showAdditionals}
        <fieldset>
            <legend>Додатне опције</legend>

            <div>
                <input
                    id="none"
                    name="vote_options"
                    type="radio"
                    value={VOTE_OPTIONS[6]}
                    bind:group={optionChoice}
                />
                <label for="none">Ништа од наведеног</label>
            </div>

            <div>
                <input
                    id="not_clear"
                    type="radio"
                    name="vote_options"
                    value={VOTE_OPTIONS[7]}
                    bind:group={optionChoice}
                />
                <label for="not_clear">Питање није разумљиво</label>
            </div>

            <div>
                <input
                    id="inadequate"
                    type="radio"
                    name="vote_options"
                    value={VOTE_OPTIONS[8]}
                    bind:group={optionChoice}
                />
                <label for="inadequate">Не адекватно питање</label>
            </div>
        </fieldset>
    {:else}
        <button on:click|self|preventDefault={() => {showAdditionals = !showAdditionals}}>Додатне опције</button>
    {/if}

    <!-- check for errors  -->
    {#if form?.success}
        <span>Дошло је до грешке приликом постављања питања...</span>
    {/if}

    <button type="submit" disabled={optionChoice === -1}>
        Пошаљи одговор
    </button>
</form>

{/if}

<style>
    h1 {
        font-size: 1.7rem;
        text-align: center;
    }

    score-container {
        padding-inline: 2rem;
        margin-inline: auto;
        font-size: 1.1rem;
    }

    score-container > div {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        gap: 3.5em;
    }

    additionals > div {
        display: flex;
        justify-content: space-between;
        font-size: smaller;
    }

    totals {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }

    totals > div {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 0.3em;
    }

    hr {
        border-style: dotted;
        color: rgb(161, 161, 161);
        width: -webkit-fill-available;
    }

    meter {
        display: block;
        width: auto;
    }

    form {
        flex-grow: 2;
        align-self: center;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    fieldset {
        display: block;
    }

    label {
        font-size: 1.15em;
    }
</style>