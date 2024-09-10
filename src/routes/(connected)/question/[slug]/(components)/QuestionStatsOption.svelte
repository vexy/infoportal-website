<script lang="ts">
    import { onMount } from "svelte";

    export let option;

    let percentageBar: HTMLElement

    onMount(()=>{
        percentageBar.style.width = option.votersPercentage.toFixed(2) + "%";
    })
</script>



<div class="flex flex-cross-center">
    <!-- Numbers -->
    <div class="option-numbers flex">
        <span>{option.votersCount}</span>
        <span title={option.votersPercentage.toFixed(3) + "%"}>{option.votersPercentage.toFixed(0)}%</span>
    </div>
    <!-- Option -->
    <div class="option-display flex flex-cross-center">

        <!-- Coloured block -->
        <div bind:this={percentageBar} class="percentage-bar"></div>

        <span>{option.title}</span>
    </div>
</div>



<style>
    .option-numbers{
        width:calc(var(--size-6));
        padding-right: var(--size-2);
        box-sizing:border-box;
    }
    .option-numbers>span:first-child{
        flex:1;
    }


    .option-display{
        position:relative;
        background-color: var(--white);
        border-radius:4px;
        padding: calc(var(--size-2) - 1px) var(--size-2);
        flex:1;
    }
    .option-display>span{
        z-index:2;
    }

    .percentage-bar{
        position:absolute;
        left:0;
        height:100%;
        z-index:1;
        background-color:var(--primary-soft);
    }
</style>