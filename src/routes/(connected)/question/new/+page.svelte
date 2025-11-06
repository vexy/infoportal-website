<svelte:head>
    <meta name="description" content="Infoportal.app | Место где можете видети јавну статистику, поставити питања другима, отворено, и поуздано." />
    <meta name="keywords" content="people, question, opinion, vote, poll, survey, results, infoportal">

    <title>Инфопортал - Поставите ново питање</title>
</svelte:head>

<script lang="ts">
    import { showDialog } from '$lib/Dialogs';

    let title_options: string[] = ['','','','',''];
    
    export let form = null;

    async function completeAddition() {
        // close the dialog box
        form = null;
        showDialog(false)
    }
</script>

<h1>Поставите питање</h1>

{#if form?.success}
    <dialog id="dialogBox">
        <p>Ваше питање је постављено на Инфопортал платформу !</p>

        <button on:click={() => completeAddition()}>Затвори</button>
    </dialog>
{/if}

<form method="POST" action="/question/new?/postQuestion">
    <input 
        name="title"
        type="text"
        placeholder="Унесите наслов питања"
    >
    {#if form?.missingTitle }
        <span>Наслов питања је обавезан...</span>
    {/if}

    <options-container>
        <h3>Понуђени одговори:</h3>
        {#each title_options as _, index}    
            <div>
                <div>
                    <input 
                        name={`option_${index}`}
                        type="text"
                        placeholder="Одговор {index + 1} {index > 1 ? "(опционо)" : ""} "
                        value={title_options[index]}
                    />
                    {#if form?.missingOption && index < 2}
                        <span>Обавезно поље...</span>
                    {/if}
                </div>
                <!-- <img src='/delete-icon.svg' alt='delete_icon' width="20px" height="25px"/> -->
            </div>
        {/each}
    </options-container>

    <!-- TODO: ADD LOADER LATER -->
    <button type="submit">
        Пошаљи
    </button>
</form>

<style>
    h1 {
        margin: 0.3em;
    }

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    form > input {
        min-width: 240px;
    }

    p {
        font-style: italic;
        font-size: smaller;
        color: rgb(200, 7, 7);
        text-shadow: #fad9cecc -1px 0px 1.25px;
    }

    options-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        gap: 15px;
        margin-bottom: 1em;
    }

    options-container div > input {
        min-width: 130px;
    }

    options-container > div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 25px;
        /* padding-inline: 1.5rem; */
    }

    button {
        margin-top: 1rem;
    }
</style>