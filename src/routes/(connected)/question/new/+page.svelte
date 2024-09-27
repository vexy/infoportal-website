<script lang="ts">
    // let question_title: string = "";
    let title_options: string[] = ['','','','',''];

    export let form;
</script>

<h1>Поставите питање</h1>

<form method="POST" action="?/postQuestion">
    <input name="title" type="text" placeholder="Унесите наслов питања">
    {#if form?.missingTitle }
        <p>Наслов питања је обавезан...</p>
    {/if}

    <options_container>
        <h3>Понуђени одговори:</h3>
        {#each title_options as _, index}    
            <div>
                <input name={`option_${index}`} type="text" placeholder="Одговор {index + 1}" value={title_options[index]}/>
                {#if form?.missingOption && index < 2}
                    <p>Обавезно поље...</p>
                {/if}
                <img src='/delete-icon.svg' alt='delete_icon' width="20px" height="25px"/>
            </div>
        {/each}
    </options_container>

    <button>Пошаљи</button>

    {#if form?.success}
        <p>NEW QUESTION ADDED</p>
    {/if}
</form>

<style>
    h1 {
        text-align: center;
    }

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
        /* font-style: italic; */
        /* margin: 0.5em; */
    }

    p {
        font-style: italic;
        font-size: 0.85rem;
        color: rgb(200, 7, 7);
    }

    options_container {
        /* width: 30%; */
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 15px;
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

    /* options_container>div>input {
        min-width: 190px;
    } */

    button {
        margin: 1.25rem;
    }
</style>