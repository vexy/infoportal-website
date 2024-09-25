<script lang="ts">
    // pageload export
    export let data;

    // $: meta = data.meta;
    // $: scores = data.scores;

    let showAdditionals = false;

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

<fieldset>
    <legend>Понуђени одговори</legend>
    {#each data.meta?.question_options as voteOption, index }
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

    <button on:click={() => {showAdditionals = !showAdditionals}}>Додатне опције</button>
    <button>Пошаљи одговор</button>
</fieldset>
{/if}


<style>
    fieldset {
        display: flex;
        flex-direction: column;
    }
</style>