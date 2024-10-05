<script>
    import { goto } from "$app/navigation";
    import { page } from "$app/stores";

    $: _code = $page.url.searchParams.get('code')
    $: _reason = $page.url.searchParams.get('reason')
</script>

<h1>Инфопортал</h1>

<i>Регистрација на платформу није успела...</i>

{#if _reason}
    <div>
        <code>[{ _code }]</code>
        <p>{ _reason }</p>
    </div>
{/if}

<button on:click={() => { goto('/') }}>Почетна</button>

<style>
    h1 {
        text-transform: uppercase;
    }

    div {
        margin: 1.2rem;
        padding-inline: 5px;
        min-width: 300px;
        border: #da960d solid 1px;
        border-radius: 1em;
        
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        gap: 10px;

        color: #b54f62;
        transition: font-size 350ms, border 1s;
    }

    div:hover {
        font-size: larger;
        text-shadow: #e8abb6 0px 0px 1px;
        border: #c3c3bf dotted 1px;
    }

    button {
        margin-top: 0.75rem;
    }
</style>