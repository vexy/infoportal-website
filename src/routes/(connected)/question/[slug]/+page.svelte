<script lang="ts">
    import { VOTE_OPTIONS } from '$models/Models';

    // pageload export
    export let data;

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
    <div>
        <p>Укупно одговора:</p> <p><b>{ scores.total_voters }</b></p>
        <!-- <meter min="0" max="100" value={questionScores[index]} /> -->
    </div>

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

    <button type="submit" disabled={optionChoice === -1}>Пошаљи одговор</button>
</form>

{/if}


<style>
    h1 {
        font-size: 1.7rem;
        text-align: center;
    }

    score-container {
        /* align-self: center; */
        padding-inline: 2rem;
        margin-inline: auto;
        /* font-size: medium; */
        font-size: 1.1rem;
    }

    score-container > div {
        /* background: black; */
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        gap: 3.5em;
    }

    additionals > div {
        display: flex;
        /* flex-direction: row; */
        justify-content: space-between;
        font-size: smaller;
    }

    hr {
        border-style: dotted;
        color: rgb(161, 161, 161);
        /* border-width: 0.5em; */
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