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

<div>
    {#each scores.question_options as voteOption, index }
        <div>
            <p>{voteOption} ({getScorePercentage(index)} %)</p>
            <meter 
                min="0"
                max="100"
                low="33"
                high="75"
                optimum="80"
                value={getMeterValue(index)} />
        </div>
    {/each}
    <div>
        <p>Ништа од наведеног: { getExtrasPercentage(VOTE_OPTIONS.NONE) } %</p>
        <p>Питање није разумљиво: { getExtrasPercentage(VOTE_OPTIONS.NOT_CLEAR) } %</p>
        <p>Не адекватно питање: { getExtrasPercentage(VOTE_OPTIONS.INADEQUATE) } %</p>
    </div>
    <div>
        <p>Укупно одговора: { scores.total_voters }</p>
        <!-- <meter min="0" max="100" value={questionScores[index]} /> -->
    </div>
</div>
{:else}
<h1>{ meta.title }</h1>

<form method="POST" action="?/commitOption">
    <fieldset>
        <legend>Понуђени одговори</legend>
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
                <div>
                    <input
                        id="none"
                        name="vote_options"
                        type="radio"
                        value={VOTE_OPTIONS[6]}
                        bind:group={optionChoice}
                    />
                    <label for="none">Ништа од наведеног</label>

                    <input
                        id="not_clear"
                        type="radio"
                        name="vote_options"
                        value={VOTE_OPTIONS[7]}
                        bind:group={optionChoice}
                    />
                    <label for="not_clear">Питање није разумљиво</label>

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
        {/if}

        <button on:click|self|preventDefault={() => {showAdditionals = !showAdditionals}}>Додатне опције</button>

        <button type="submit" disabled={optionChoice === -1}>Пошаљи одговор</button>
    </fieldset>
</form>
{/if}


<style>
    fieldset {
        display: flex;
        flex-direction: column;
    }
</style>