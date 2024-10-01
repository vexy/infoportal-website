<script lang="ts">
    import { goto } from '$app/navigation';
    import { showDialog } from '$lib/Dialogs';

    let title_options: string[] = ['','','','',''];

    export let form;

    function completeAddition() {
        // close the dialog box
        showDialog(false)
        console.debug("Going to the list...")
        goto('/list');
    }
</script>

<h1>Поставите питање</h1>

{#if form?.success}
    <dialog id="dialogBox">
        <p>Ваше питање је постављено на Инфопортал платформу !</p>

        <button on:click={() => completeAddition()}>Затвори</button>
    </dialog>
{/if}

<form method="POST" action="?/postQuestion">
    <input name="title" type="text" placeholder="Унесите наслов питања">
    {#if form?.missingTitle }
        <p>Наслов питања је обавезан...</p>
    {/if}

    <options_container>
        <h3>Понуђени одговори:</h3>
        {#each title_options as _, index}    
            <div>
                <div>
                    <input name={`option_${index}`} type="text" placeholder="Одговор {index + 1} {index > 1 ? "(опционо)" : ""} " value={title_options[index]}/>
                    {#if form?.missingOption && index < 2}
                        <p>Обавезно поље...</p>
                    {/if}
                </div>
                <!-- <img src='/delete-icon.svg' alt='delete_icon' width="20px" height="25px"/> -->
            </div>
        {/each}
    </options_container>

    <button>Пошаљи</button>
</form>

<style>
    form {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    input {
        min-width: 230px;
        border: none;
        border-radius: 10px;
        padding: 1em;
    }

    p {
        font-style: italic;
        font-size: 0.75rem;
        color: rgb(200, 7, 7);
    }

    options_container {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 15px;
        margin-bottom: 1em;
    }

    options_container div > input {
        min-width: 110px;
    }

    options_container > div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 25px;
        /* padding-inline: 1.5rem; */
    }

    /* button {
        margin: 1.25rem;
    } */
</style>