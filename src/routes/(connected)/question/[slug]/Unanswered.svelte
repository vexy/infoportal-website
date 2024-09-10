<script lang="ts">
    import type { Question } from "$models/Question";
    import Header from "./(components)/Header.svelte";

    export let data;
    const aQuestion = data.slugQuestion;
    
    const options = aQuestion.options;

    //get array of `options`->keys
    //options.keys() iterator does not work in this case
    let optionsIterator: [number] = [0];
    for (let i = 1; i < options.length; i++) {
        optionsIterator.push(i);
    }

    let selectedKey = 0;
    
    const selectOption = (key: number) => {
        selectedKey = key;
    }
</script>



<a href='/list' class='survey'>&lt;- Nazad</a>



<div class='survey flex flex-column'>

    <Header survey={aQuestion}/>

    <!-- questions -->
    <!-- following line is prep for `survey` structure -->
    <!-- {#each aQuestion.question as question} -->
        <div class='question flex flex-column'>
            <!-- prep for `survey` structure -->
            <!-- title -->
            <!-- <h3 class='font-size-3'>{aQuestion.title}</h3> -->

            <!-- options -->
            {#each optionsIterator as optionKey}
                <button on:click={()=>selectOption(optionKey)} class='option font-size-2' class:selected={optionKey == selectedKey}>
                    {options[optionKey].title}
                </button>
            {/each}
        </div> 
    <!-- {/each} -->

    <!-- submit -->
    <button class='submit font-size-3'>
        Submit
    </button>
</div>

<p> ID: { aQuestion.id } </p>
<p> IsAnswered: { aQuestion.isAnswered } </p>

<p>URL: { data.url }</p>
<p>SHASH_HASH { data.secret }</p>


<style>
    .survey{
        margin:var(--size-4);
        width: 764px;
        padding: calc(var(--size-4) - 2px) var(--size-4);
        background-color: var(--background-secondary);
        box-shadow: 0px 1px 10px 0px rgba(0, 0, 0, 30%);
        border-radius:6px;
        gap: var(--size-5);
    }

    .question{
        gap:var(--size-3);
    }

    .option{
        background-color:var(--white);
        padding: calc(var(--size-2) - 2px) var(--size-2);
        box-shadow: 0px 1px 12px 2px rgba(16, 64, 113, 10%);
        border-radius:4px;
        text-align:start;
    }

    .option.selected{
        background-color: var(--primary-soft);
        color: var(--primary);
        border: 1px solid var(--primary);
        margin:-1px;
    }

    .submit{
        border-radius:4px;
        background-color: var(--primary);
        display:block;
        padding: var(--size-2);
        color:white;
        text-align:center;
    }

</style>