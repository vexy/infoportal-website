<script lang="ts">
    import type { QuestionOverview } from '$models/Models';

    export let data;
    $: questions = data.allQuestions;

    let searchTerm: string = ''
    let showResetArea: boolean = false;
    let hasSearchResults: boolean = false;
    let tableData: QuestionOverview[];

    async function performSearch() {
        // check if we just need to reset
        if(searchTerm.length === 0) {
            resetSearch();
        } else {
            // get actual data set to perform filtering on
            const returnedData = await data.allQuestions;
            //perform filtering on table data
            tableData = returnedData.filter((question) => {
                return question.title.toLowerCase().includes(searchTerm.toLowerCase())
            })

            // show reset area
            hasSearchResults = true;
            showResetArea = true;
        }
    }

    function resetSearch() {
        searchTerm = '';
        showResetArea = false;
        hasSearchResults = false;
    }
</script>

<search-area>
    <div>
        <input 
            type="text"
            placeholder="Претражите наслов питања"
            bind:value={searchTerm}
        />
        <button class="search-button" on:click={performSearch}>
            <img 
                src="/search.svg" 
                alt="search_icon"
                height="20px" width="20px"
            />
            Пронађи
        </button>
    </div>

    {#if showResetArea}
        <reset-area>
            <span>Пронађено: {tableData.length} питања</span>
            <button on:click={resetSearch}>
                <i>Прикажи сва питања</i>
                <img 
                    src="/clear.svg" 
                    alt="clear_search"
                    height="22px" width="22px"
                />
            </button>
        </reset-area>
    {/if}
</search-area>

<questions-table>
{#await questions then questionSet}
    {#each (hasSearchResults ? tableData : questionSet) as questionItem }
    <!-- NOTE: created_at field can be used somewhere -->
    <tr>
        <a href='/question/{questionItem.id}'>{questionItem.title}</a>
        <voters-count>
            <img src="/people.svg" alt="vote_count" height="21px" width="21px" />
            { questionItem.voters_count.length }
        </voters-count>
    </tr>
    {/each}
{/await}
</questions-table>

<style>
    search-area {
        align-self: center;

        display: flex;
        flex-direction: column;
        align-items: center;
    }

    search-area > div {
        display: flex;
        align-items: center;
    }
    
    input {
        letter-spacing: 1.25px;
        margin-block: 0.85rem;
        margin-inline-start: 0.5rem;
        min-width: 210px;
        border: 1.75px solid var(--footer);
    }

    .search-button {
        display: inline-flex;
        justify-content: center;
        align-items: center;
    }

    reset-area {
        align-self: center;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }

    reset-area > button {
        display: flex;
        align-items: center;
        background: none;
        gap: 0.35rem;
    }

    span {
        font-size: smaller;
        font-style: italic;
        font-weight: 200;
    }

    i {
        color: var(--orange);
    }


    button {
        margin-inline: 0.75rem;
    }

    questions-table {
        width: 100vw;

        display: flex;
        flex-direction: column;
        gap: 7px;
    }

    tr {
        margin-inline: 0.1rem;

        display: flex;
        flex-wrap: nowrap;
        flex-direction: row;

        justify-content: space-between;
    }
    
    a {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        margin-inline-start: 0.25em;
        font-size: 110%;
    }

    a:hover {
        font-weight: 500;
    }

    voters-count {
        min-width: 45px;
        margin-inline: 0.15rem;
        display: flex;
        align-items: center;
        gap: 0.25rem;
    }
</style>