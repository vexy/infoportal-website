<svelte:document>
    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-P0RR1V030Z"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        
        gtag('config', 'G-P0RR1V030Z');
    </script>
</svelte:document>

<nav>
    <a href="/list">
        <img
            src="/favicon.svg"
            alt="infoportal_logo"
            height="25"
            width="25"
        />
    </a>
    <a href="/question/new">Ново питање</a>
    <a href="/stats">
        <img 
            src="/poll.svg"
            alt="statistika"
            height="25"
            width="25"
        />
    </a>
</nav>

<section data-sveltekit-preload-data="hover">
    <slot />
</section>

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

    section {
        width: 100vw;
        height: 100vh;
        
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        overflow-y: hidden;
        flex-grow: 1;
        padding-bottom: 10px;

        background: var(--white);
        color: var(--blue-dark);
    }
</style>