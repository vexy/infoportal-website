<script lang="ts">
    export let data;
    $: questions = data.allQuestions;

    let searchTerm: string = ''
    let showResetArea: boolean = false;

    function performSearch() {        
        // check if we just need to reset
        if(searchTerm.length === 0) {
            resetSearch();
        } else {
            //perform filtering
            questions = questions.filter((question) => {
                return question.title.toLowerCase().includes(searchTerm.toLowerCase())
            })
            // show reset area
            showResetArea = true;
        }
    }

    function resetSearch() {
        questions = data.allQuestions;
        searchTerm = '';
        showResetArea = false;
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
    {#each questions as questionItem }
    <tr>
        <td>
            <img src="/poll.svg" alt="poll_image" height="30px" width="30px" />
            <a href='/question/{questionItem.id}'>{questionItem.title}</a>
            <!-- <p>Postavljeno: { new Date(questionItem.created_at).toLocaleDateString('sr') }</p> -->
        </td>
        <td>
            ( { questionItem.voters_count.length } )
        </td>
    </tr>
    {/each}
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

        & ::hover {
            scale: none;
            color: aqua;
        }
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
        justify-content: space-between;
        align-self: baseline;
    }

    td {
        display: flex;
        align-items: center;
        overflow: hidden;
        white-space: nowrap;
    }

    td:nth-child(2) {
        margin-inline: 1em;
    }

    a {
        text-overflow: ellipsis;
        margin-inline-start: 0.5em;
        /* text-decoration: none; */
    }
</style>