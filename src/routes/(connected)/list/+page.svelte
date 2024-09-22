<script lang="ts">
    import type { Question } from "$models/Models.js";
    import { onMount } from "svelte";

    // list of questions will be returned here
    export let data;

    const questions = data.all_questions;

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