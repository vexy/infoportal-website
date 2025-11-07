<script lang="ts">
    import { VOTE_OPTIONS, type QuestionScores } from '$models/Models';
    import { goto } from '$app/navigation';
    import Chart from '$components/Chart.svelte';

    let { scores }: { scores: QuestionScores } = $props();
    let showChart = $state(false);

    function getMeterValue(option: VOTE_OPTIONS): number {
        return (scores.option_scores[option] / scores!.total_voters) * 100
    }

    function getScorePercentage(option: VOTE_OPTIONS): string {
        return ((scores.option_scores[option] / scores!.total_voters) * 100).toFixed(1)
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

    function switchDataDisplay() {
        showChart = !showChart
    }
</script>

<score-container>
    {#if showChart}
        <Chart chartData={scores}/>
    {:else}
        {#each scores.question_options as voteOption, index }
            <div>
                <p>{voteOption}</p>
                <p><b>{getScorePercentage(index)} %</b></p>
            </div>
            <meter 
                min="0"
                max="100"
                low="33"
                high="75"
                optimum="80"
                value={getMeterValue(index)}
            ></meter>
        {/each}
    {/if}

    <hr>

    <additionals>
        <div>
            <p>Ништа од наведеног:</p><p>{ getExtrasPercentage(VOTE_OPTIONS.NONE) } %</p>
        </div>
        <div>
            <p>Питање није разумљиво:</p><p>{ getExtrasPercentage(VOTE_OPTIONS.NOT_CLEAR) } %</p>
        </div>
        <div>
            <p>Неадекватно питање:</p><p>{ getExtrasPercentage(VOTE_OPTIONS.INADEQUATE) } %</p>
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

    <button-section>
        <!-- TODO: add share button -->
        <button class='chart-button' onclick={() => {switchDataDisplay()}}>
            {#if showChart}
                <img class='chart-images' src="/bar-chart.svg" alt="Show bar chart" />
                <span>Прикажи статистику</span>
            {:else}
                <img class='chart-images' src='/pie-chart.svg' alt="Show pie chart" />
                <span>Прикажи графикон</span>
            {/if}
        </button>
        <button onclick={() => { goto('/list') }}>Назад</button>
    </button-section>

</score-container>

<style>
    score-container {
        padding-inline: 2rem;
        margin-inline: auto;
        font-size: 1.1rem;
        min-width: 290px;
    }

    score-container > div {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        gap: 3rem;
    }

    score-container > div > p:nth-child(2) {
        min-width: 65px;
        text-align: right;
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
        color: var(--orange);
        width: -webkit-fill-available;
    }

    meter {
        display: block;
        width: auto;
    }

    button-section {
        display: flex;
        justify-content: space-between;
        margin-block: 1.5rem;
        align-items: center;
    }

    button-section > button > span {
        font-size: smaller;
    }

    .chart-button {
        all: unset;
        align-self: center;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .chart-button:hover {
        scale: 1.05;
    }

    .chart-images {
        height: 45px;
        width: 45px;
    }
</style>