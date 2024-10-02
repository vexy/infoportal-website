<script lang="ts">
    export let data;
    $: questions = data.allQuestions;

    let searchTerm: string = ''

    function performSearch() {
        console.log(searchTerm)
        console.log("Lenght : ", searchTerm.length)
        
        // check if we just need to reset
        if(searchTerm.length === 0) {
            questions = data.allQuestions;
        } else {
            //perform filtering
            questions = questions.filter((question) => {
                return question.title.toLowerCase().includes(searchTerm.toLowerCase())
            })
            console.log("Filters set !")
        }
    }
</script>

<search-area>
    <input type="text" placeholder="Претражите наслов питања" bind:value={searchTerm}/>
    <button on:click={performSearch}>Пронађи</button>
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
    }
</style>