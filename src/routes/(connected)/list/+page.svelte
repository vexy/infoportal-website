<script lang="ts">
    export let data;
    $: questions = data.allQuestions;
</script>

<search-area>
    <input type="text" placeholder="Претражите наслов питања" />
    <button>Find</button>
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
        /* margin-inline: 1em; */
    }

    input {
        min-width: 210px;
        max-width: 280px;
        margin: 1em;
        padding: 0.75em;

        border: none;
        border-radius: 10px;

        letter-spacing: 1.5px;
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