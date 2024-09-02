<script lang="ts">
    import type { Question } from "$models/Question";
    import { onMount } from "svelte";

    // list of questions will be returned here
    export let data;

    const questions = data.allQuestions;

    onMount(async () => {
        console.log(data);
    })
</script>

<!-- IMPROVE SEARCH BAR LATER -->
<input type="text" placeholder="Претражите наслов питања" />

<table>
    {#each questions as questionItem }
    <tr>
        <td>
            <p>
                <img src="/users.svg" alt="users" height="20px" width="20px" />
                { questionItem.totalVoters }
            </p>
        </td>
        <td>
            <a href='/question/{questionItem.id}'>{questionItem.title}</a>
        </td>
        <td>
            <p>Date added: { questionItem.dateAdded.toLocaleDateString() }</p>
        </td>
    </tr>

        <!-- <ul>
            {#each questionItem.options as voteOption }
                <li>{voteOption.title}</li>
                <li>{voteOption.votersCount}</li>
            {/each}
        </ul> -->
    {/each}
</table>