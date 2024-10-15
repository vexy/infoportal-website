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

<main lang="sr-RS">
    <nav>
        <a href="/list">Почетна</a>
        <a href="/list">
            <img
                src="/favicon.svg"
                alt="infoportal_logo"
                height="25"
                width="25"
            />
        </a>
        <a href="/question/new">Ново питање</a>
    </nav>

    <section>
        <slot />
    </section>

</main>
<!-- <p>This is footer area</p> -->

<style>
    main {
        align-self: normal;
        display: flex;
        flex-direction: column;
        flex-grow: 2;
        background-color: var(--white);
        color: var(--blue-dark);
    }

    nav {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        background-color: var(--blue-medium);
        padding: 0.45rem;
        margin-bottom: 0.5em;

        border-bottom: 1.5px solid var(--green-light);
        box-shadow: 0px 3.5px 7px rgb(205, 205, 205);
    }

    nav a {
        color: var(--blue-dark);
    }

    section {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        overflow-y: hidden;
    }
</style>