<script>
    import { goto } from "$app/navigation";
</script>

<nav>
    <a href="/list">
        <img
            src="/favicon.svg"
            alt="infoportal_logo"
            height="30"
        />
    </a>
    <button onclick={() => {goto("/question/new")}}>Ново питање</button>
    <a href="/stats" class="stats">
        <img 
            src="/poll.svg"
            alt="statistika"
            height="30"
            width="30"
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
        padding: 0.35rem;
        margin-bottom: 2px;

        border-bottom: 1.5px solid var(--green-light);
        -moz-box-shadow: 0 1px 2px 1px rgba(200, 200, 200, 0.6);
        -webkit-box-shadow: 0 1px 2px 1px rgba(200, 200, 200, 0.6);
        box-shadow: 0 1px 2px 1px rgba(200, 200, 200, 0.6);
    }

    a {
        margin-inline: 0.5rem;
    }

    .stats:hover {
        scale: 1.2;
    }

    button {
        min-width: 110px;
        max-height: 35px;
        color: var(--white);
        background: #005c22;
        margin-right: 0.35rem;
    }
</style>