<script>
    export let questionItem;
</script>

<a href={`/question/${questionItem.id}`} class:answered={questionItem.isAnswered} class="nostyle flex flex-column">
    <div class="flex flex-main-space-between">
        <div class='location-label flex'>
            <svg xmlns="http://www.w3.org/2000/svg" width="8px" viewBox="0 0 298.67 448">
                <g>
                    <path d="M149.33,0C66.86,0,0,66.86,0,149.33s149.33,298.67,149.33,298.67c0,0,149.33-216.19,149.33-298.67S231.81,0,149.33,0ZM149.33,213.33c-35.35,0-64-28.65-64-64s28.65-64,64-64,64,28.65,64,64-28.65,64-64,64Z"/>
                </g>
            </svg>
            <div>
                Srbija
            </div>
        </div>
        <div class='votes'>
            {questionItem.totalVoters} votes
        </div>
    </div>

    <div class='title'>
        {questionItem.title}
    </div>

    {#if !questionItem.isAnswered}
        <div class="flex" style="color:var(--grey); gap: var(--size-1)">
            
        </div>
    {/if}
</a>

<style>
    a{
        gap: var(--size-1);
        padding: var(--size-2) var(--size-3);
        background-color:var(--white);
        border-radius:4px;
        font-size: var(--size-2);
    }
    .title{
        font-size: var(--size-3);
    }
    .location-label{
        gap:var(--size-0);
        color:var(--secondary);
        fill:var(--secondary);
    }


    /* ANSWERED : */
    a.answered{
        border: 1px solid var(--positive);
    }
    a.answered .location-label,
    a.answered .votes{
        color: var(--positive);
        fill: var(--positive);
    }
</style>