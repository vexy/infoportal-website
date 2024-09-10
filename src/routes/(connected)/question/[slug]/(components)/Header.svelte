<script lang="ts">
    export let forStatistics: boolean = false;
    export let survey;
</script>

<!-- header -->
<div class='header flex flex-column'>
    <!-- date & votes -->
    <div class='info flex flex-main-space-between font-size-2'>
        <!-- date -->
        <div>
            {survey.dateAdded}
        </div>
        <!-- votes -->
        <div>
            { survey.totalVoters } votes
        </div>
    </div>

    <!-- title -->
    <span class="title">
        <h2 class='font-size-4'>{survey.title}</h2>
        {#if forStatistics}
            <span class="submitted-indicator font-size-3">[Submitted]</span>
        {/if}
    </span>

    <!-- location -->
    <div class='location flex font-size-2' class:forStatistics={forStatistics}>
        <svg xmlns="http://www.w3.org/2000/svg" width="8px" viewBox="0 0 298.67 448">
            <g>
                <path d="M149.33,0C66.86,0,0,66.86,0,149.33s149.33,298.67,149.33,298.67c0,0,149.33-216.19,149.33-298.67S231.81,0,149.33,0ZM149.33,213.33c-35.35,0-64-28.65-64-64s28.65-64,64-64,64,28.65,64,64-28.65,64-64,64Z"/>
            </g>
        </svg>
        <div>
            Srbija
        </div>
    </div>
</div>

<style>
    .header{
        gap:var(--size-2);
    }
    .info{
        color: var(--grey)
    }

    .submitted-indicator{
        color: var(--positive);
        padding-left:var(--size-2);
    }
    .title>h2{
        display:inline;
    }
    
    .location:not(.forStatistics){
        color:var(--secondary);
        fill:var(--secondary);
        gap:var(--size-0);
    }
    .location.forStatistics{
        color:var(--grey);
        fill:var(--grey);
        gap:var(--size-0);
    }
</style>