<!-- Share -->
<div class="share-container flex">
    <!-- Results -->
    <div class="share share-results">
        <span>Share Survey Results</span>
    </div>

    <!-- Link -->
    <div class="share share-survey">
        <span>Share Survey</span>
    </div>
</div>

<style>
    .share-container{
        gap:var(--size-4);
    }
    .share-container .share{
        gap:var(--size-2);
        padding: calc(var(--size-2) - 1px) var(--size-3);
        font-size:var(--size-3);
        border-radius:4px;
        box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 20%);
    }

    .share-results{
        background-color:var(--primary);
        color:white;
    }
    .share-survey{
        background-color:var(--primary-soft);
    }
</style>