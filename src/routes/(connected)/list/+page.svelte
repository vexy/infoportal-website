<script lang="ts">
    export let data;
    $: questions = data.allQuestions;
</script>

<!-- IMPROVE SEARCH BAR LATER -->
<input type="text" placeholder="Претражите наслов питања" />

<table>
    {#each questions as questionItem }
    <tr>
        <td>
            <p>
                <img src="/users.svg" alt="users" height="20px" width="20px" />
                <i>Total voters: { questionItem.voters_count.length } </i>
            </p>
        </td>
        <td>
            <a href='/question/{questionItem.id}'>{questionItem.title}</a>
        </td>
        <td>
            <p>Date added: { new Date(questionItem.created_at).toLocaleDateString() }</p>
        </td>
    </tr>
    {/each}
</table>

<style>
    input {
        align-self: center;
        
        max-width: 280px;
        margin: 1em;
        padding: 0.75em;

        border: none;
        border-radius: 10px;
    }
</style>