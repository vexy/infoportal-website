<main>
    <nav>
        <a href="/list">Инфопортал</a>
        <a href="/question/new">Ново питање</a>
        <a href="/stats">Статистика</a>
    </nav>

    <section>
        <slot />
    </section>

    <footer>
        <p>This is footer area</p>
    </footer>
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
        background: -webkit-linear-gradient(10deg, rgba(30,121,24,1) 0%, rgba(11,133,157,1) 50%, rgba(3,203,110,1) 100%);
        background: linear-gradient(10deg, rgba(30,121,24,1) 0%, rgba(11,133,157,1) 55%, rgba(3,203,110,1) 90%);

        color: whitesmoke;
    }

    section {
        flex-grow: 1;
        align-self: center;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
    }
</style>