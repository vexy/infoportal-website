<script>
    import { goto } from "$app/navigation";
</script>

<nav>
    <a href="/list">
        <img
            src="/favicon.svg"
            alt="infoportal_logo"
            height="25"
            width="25"
        />
    </a>
    <button on:click|self={ () => {goto("/question/new")} }>Ново питање</button>
    <a href="/stats">
        <img 
            src="/poll.svg"
            alt="statistika"
            height="25"
            width="25"
        />
    </a>
</nav>

<style>
    nav {
        width: 100vw;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        background-color: var(--blue-medium);
        padding: 0.25rem;
        margin-bottom: 2px;

        border-bottom: 1.5px solid var(--green-light);
        -moz-box-shadow: 0 1px 2px 1px rgba(200, 200, 200, 0.6);
        -webkit-box-shadow: 0 1px 2px 1px rgba(200, 200, 200, 0.6);
        box-shadow: 0 1px 2px 1px rgba(200, 200, 200, 0.6);
    }

    nav a {
        color: var(--blue-dark);
        margin-inline: 10px;
    }

    button {
        min-width: 110px;
        color: var(--white);
        background: #005c22;
    }
</style>