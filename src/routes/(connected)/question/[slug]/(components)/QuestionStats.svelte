<script lang="ts">
    import QuestionStatsOption from "./QuestionStatsOption.svelte";

    export let question
</script>

<div class="panel flex flex-column">
    <h3>{question.title}</h3>

    <!-- Stats -->
    <div class="results-container flex flex-column">
        <h4 class="votes-label">Votes</h4>

        <div class="results flex flex-column">
            {#each question.options as option }
                <QuestionStatsOption {option}/>
            {/each}
        </div>
    </div>

    <!-- Share -->
    <div class="flex flex-main-end">
        <a href="" class="share flex flex-main-center flex-cross-center">
            <!-- <svg></svg> -->
            <span>Share Question Results</span>
        </a>
    </div>
</div>

<style>
    a{
        text-decoration:none;
        cursor:pointer;
    }

    .panel{
        box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 15%);
        border-radius: 6px;
        gap: var(--size-3);
        padding: var(--size-3) calc(var(--size-3) - 2px);
    }


    h3{
        font-size:var(--size-3);
    }

    .results{
        gap:var(--size-3);
        font-size:var(--size-2);
    }

    .results-container{
        gap:var(--size-1);
    }
    h4.votes-label{
        font-size:var(--size-2);
    }

    .share{
        gap:var(--size-1);
        padding:calc(var(--size-1) - 1px) var(--size-2);
        border-radius:4px;
        background-color: var(--primary);
        color:white;
    }
    .share>span{
        font-size:var(--size-2);
    }
</style>