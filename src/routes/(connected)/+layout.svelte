<main>
    <nav>
        <a href="/list">Почетна</a>
        <a href="/question/new">Ново питање</a>
    </nav>

    <section>
        <slot />
    </section>

    <!-- <footer>
        <p>This is footer area</p>
    </footer> -->
</main>

<style>
    main {
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        overflow-y: auto;

        display: flex;
        flex-direction: column;

        background: rgb(30,121,24);
        background: -moz-linear-gradient(10deg, rgba(30,121,24,1) 0%, rgba(11,133,157,1) 50%, rgba(3,203,110,1) 100%);
        background: state(-webkit-gradient)(10deg, rgba(30,121,24,1) 0%, rgba(11,133,157,1) 50%, rgba(3,203,110,1) 100%);
        background: -webkit-linear-gradient(rgba(30,121,24,1) 0%, rgba(11,133,157,1) 55%, rgba(3,203,110,1) 90%);

        color: whitesmoke;
    }

    nav {
        background-color: #7567e0;
        padding: 0.45rem;
        margin-bottom: 0.5em;

        border-bottom: medium double #0c004d;
        box-shadow: 0px 3.5px 7px rgb(205, 205, 205);
    }

    nav a {
        color: rgb(209, 240, 230);
    }

    section {
        flex-grow: 1;

        display: flex;
        flex-direction: column;
    }
</style>