<script lang="ts">
    let question_title: string = "";
    let title_options: string[] = ['','','','',''];
</script>

<h1>Поставите питање</h1>

<input type="text" placeholder="Унесите наслов Вашег питања" value={question_title}>

<options_container>
    <h3>Понуђени одговори:</h3>
    {#each title_options as _, index}    
        <div>
            <input type="text" placeholder="Одговор {index + 1}" value={title_options[index]}/>
            <img src='/delete-icon.svg' alt='delete_icon' width="20px" height="25px"/>
        </div>
    {/each}
</options_container>

<button>Пошаљи</button>

<style>
    h1 {
        text-align: center;
    }

    options_container {
        display: flex;
        flex-direction: column;
        gap: 10px;
        padding-top: 0.5rem;
    }

    options_container>div {
        display: flex;
        flex-direction: row;
        
        justify-content: space-around;
        align-items: center;
        /* max-height: 50px; */
    }
</style>