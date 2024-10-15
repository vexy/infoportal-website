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
    <input 
        type="text"
        placeholder="Претражите наслов питања"
        bind:value={searchTerm}
    />
    <button on:click={performSearch}>Пронађи</button>

    {#if showResetArea}
        <div>
            <button on:click={resetSearch}>
                <img 
                    src="/clear.svg" 
                    alt="clear_search" 
                    height="25px" width="25px"
                />
                <i>Прикажи сва питања</i>
            </button>
        </div>
    {/if}
</search-area>

<table>
{#await questions then questionSet}
    {#each (hasSearchResults ? tableData : questionSet) as questionItem }
    <tr>
        <td>
            <!-- <img src="/poll.svg" alt="poll_image" height="30px" width="30px" /> -->
            <img src="/people.svg" alt="vote_count" height="22px" width="22px" />
            <a href='/question/{questionItem.id}'>{questionItem.title}</a>
        </td>
        <!-- NOTE: created_at filed can be used somewhere -->
        <td>
            <!-- <img src="/people.svg" alt="vote_count" height="22px" width="22px" /> -->
            [{ questionItem.voters_count.length }]
            <!-- [ 25122 ] -->
        </td>
    </tr>
    {/each}
{/await}
</table>

<style>
    search-area {
        align-self: center;
    }

    search-area > div {
        display: flex;
        justify-content: center;

        margin-top: -10px;
    }

    search-area > div > button {
        display: flex;
        align-items: center;
        gap: 0.5rem;

        background: none;
    }

    input {
        letter-spacing: 1.5px;
        margin-block: 0.85rem;
        min-width: 210px;
    }

    button {
        margin-inline: 0.75rem;
    }

    tr {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    
    td {
        display: flex;
        align-items: center;
    }
    
    td:nth-child(2) {
        margin-inline: 0.75em;
    }
    
    a {
        white-space: pre-wrap;
        overflow: hidden;
        text-overflow: ellipsis;
        margin-inline-start: 0.5em;
    }
</style>