<script lang="ts">
    import { VOTE_OPTIONS } from '$models/Models';

    // pageload export
    export let data;

    // $: meta = data.meta;
    // $: scores = data.scores;

    let showAdditionals = false;
    let optionChoice = -1;  //indicates no selection has been made

    function getScorePercentage(optionID: number): number {
        // divide option score with total amount of voters
        return data.scores?.option_scores[optionID] / data.scores?.total_voters;
    }

    function getNonePercentage(): number {
        return data.scores?.none / data.scores?.total_voters;
    }
    function getNotClearePercentage(): number {
        return data.scores?.not_clear / data.scores?.total_voters;
    }
    function getInadequatePercentage(): number {
        return data.scores?.inadequate / data.scores?.total_voters;
    }
</script>

 <!-- check what layout to use -->
{#if data.hasAnswered}
<h1> { data.scores?.title } </h1>

<div>
    {#each data.scores?.question_options as voteOption, index }
        <div>
            <p>{voteOption} | ({data.scores?.option_scores[index]})</p>
            <meter min="0" max="100" value={getScorePercentage[index]} />
        </div>
    {/each}
    <div>
        <p>Ништа од наведеног: {getNonePercentage()}</p>
        <p>Питање није разумљиво: {getNotClearePercentage() }</p>
        <p>Не адекватно питање: : {getInadequatePercentage() }</p>
    </div>
    <div>
        <p>Total voters: { data.scores?.total_voters }</p>
        <!-- <meter min="0" max="100" value={questionScores[index]} /> -->
    </div>
</div>
{:else}
<h1>{data.meta?.title }</h1>

<form method="POST" action="?/commitOption">
    <fieldset>
        <legend>Понуђени одговори</legend>
        {#each data.meta?.question_options as voteOption, index }
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

        <p>Selected is: {optionChoice}</p>

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