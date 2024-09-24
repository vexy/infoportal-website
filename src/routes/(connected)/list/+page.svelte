<script lang="ts">
    // list of questions will be returned here
    export let data;

    const questions = data.allQuestions;
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