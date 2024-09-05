<script lang="ts">
    let options = [
        "",
        ""
    ]
    $: optionsIterator = options.keys();

    const addOption = () =>{
        options = [...options, ""];
    }
    const removeOption = (key: number)=>{
        options = options.filter((item, index) => index !== key);
    }
</script>

<div class="form flex flex-column">
    <h2 class="font-size-4">Post a Survey</h2>

    <div class='content flex flex-column font-size-3'>
        <!-- Title -->
        <input placeholder="Add a title" class="title medium-shadow">

        <!-- Location -->
        <!-- <button class="location flex flex-main-center flex-cross-center medium-shadow">
            <svg xmlns="http://www.w3.org/2000/svg" width="10px" viewBox="0 0 298.67 448">
                <g>
                    <path d="M149.33,0C66.86,0,0,66.86,0,149.33s149.33,298.67,149.33,298.67c0,0,149.33-216.19,149.33-298.67S231.81,0,149.33,0ZM149.33,213.33c-35.35,0-64-28.65-64-64s28.65-64,64-64,64,28.65,64,64-28.65,64-64,64Z"/>
                </g>
            </svg>
            <span>Location</span>
        </button> -->
         
        <!-- Question -->
        <div class="question-container flex flex-column">
            <input placeholder="Enter Question" class="question">

            <div class='options flex flex-column'>
                {#each optionsIterator as key}
                    <div class="option flex">
                        <input placeholder="Enter Option" bind:value={options[key]}>
                        <button on:click={()=>removeOption(key)}>
                            X
                        </button>
                    </div>
                {/each}
            </div>

            <!-- Add Option -->
            <button on:click={addOption} class="add-option flex flex-main-center flex-cross-center">
                <svg height='12' width='12' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 41.33 41.33">
                    <g>
                        <path d="M22.67,18.67V2c0-.53-.21-1.04-.59-1.41-.37-.38-.88-.59-1.41-.59s-1.04.21-1.41.59c-.38.38-.59.88-.59,1.41v16.67H2c-.53,0-1.04.21-1.41.59-.38.37-.59.88-.59,1.41s.21,1.04.59,1.41c.38.38.88.59,1.41.59h16.67v16.67c0,.53.22,1.03.59,1.41.37.37.88.59,1.41.59.53,0,1.04-.21,1.41-.59.38-.37.59-.88.59-1.41v-16.67h16.67c.53,0,1.04-.21,1.41-.59.38-.37.59-.88.59-1.41,0-.53-.22-1.03-.59-1.41-.37-.37-.88-.59-1.41-.59h-16.67Z"/>
                    </g>
                </svg>
                <span>Add Option</span>
            </button>
        </div>

        <!-- Add question -->
        <!-- Prep for `survey` structure -->
        <!-- 
        <button class="add-question medium-shadow">
            <svg height='16' width='16' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 41.33 41.33">
                <g>
                    <path d="M22.67,18.67V2c0-.53-.21-1.04-.59-1.41-.37-.38-.88-.59-1.41-.59s-1.04.21-1.41.59c-.38.38-.59.88-.59,1.41v16.67H2c-.53,0-1.04.21-1.41.59-.38.37-.59.88-.59,1.41s.21,1.04.59,1.41c.38.38.88.59,1.41.59h16.67v16.67c0,.53.22,1.03.59,1.41.37.37.88.59,1.41.59.53,0,1.04-.21,1.41-.59.38-.37.59-.88.59-1.41v-16.67h16.67c.53,0,1.04-.21,1.41-.59.38-.37.59-.88.59-1.41,0-.53-.22-1.03-.59-1.41-.37-.37-.88-.59-1.41-.59h-16.67Z"/>
                </g>
            </svg>
            <span>Add Question</span>
        </button> 
        -->

        <!-- Publish -->
        <button class="publish">Publish</button>
    </div>
</div>

<style>
    .medium-shadow{
        box-shadow: 0px 1px 12px 2px rgba(16, 64, 113, 10%);
    }


    .form{
        margin:var(--size-4);
        width: 764px;
        padding: calc(var(--size-4) - 2px) var(--size-4);
        background-color: var(--background-secondary);
        box-shadow: 0px 1px 10px 0px rgba(0, 0, 0, 30%);
        border-radius:6px;
        gap: var(--size-4);
    }

    .content{
        gap: var(--size-4);
    }
    .content>*{
        padding: calc(var(--size-2) - 2px) var(--size-2);
    }

    .title{
        border-radius:4px;
    }

    .location{
        gap: var(--size-2);
        width:fit-content;

        border-radius:4px;

        background-color:var(--white);
        color:var(--grey);
        fill:var(--grey);
    }

    input, .question-container{
        background-color:var(--white);
    }

    .question-container{
        border-radius:6px;
        gap: var(--size-3);
    }

    .question{
        padding: calc(var(--size-2) - 2px) var(--size-2);
        border-bottom: 1px solid var(--primary);
        box-shadow: 0px 6px 11.9px 2px rgba(0, 0, 0, 10%);
    }

    .options{
        gap: var(--size-2);
    }
    .option{
        box-shadow: 0px 1px 10px 1px rgba(0, 0, 0, 10%);
        border-radius:4px;
    }
    .option>*{
        padding: calc(var(--size-2) - 2px) var(--size-2);
    }
    .option>input{
        flex:1;
    }

    .add-option{
        background-color: var(--background);
        color:var(--grey);
        fill:var(--grey);
        gap: var(--size-2);
        padding:var(--size-1);
    }


    .add-question{
        border-radius:4px;
    }


    button.publish{
        color:var(--white);
        background-color:var(--primary);
        border-radius: 4px;
    }
</style>