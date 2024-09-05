<header>
    <a href="/list">List</a>
    <a href="/question/new">New question</a>
    <a href="/stats">Stats</a>
</header>

<main>
    <nav>
        <a href="/list">Инфопортал</a>
        <a href="/question/new">Ново питање</a>
        <a href="/stats">Статистика</a>
    </nav>

    <slot />

    <footer>
        <p>This is footer area</p>
    </footer>
</main>

<style>
    main {
        height: 100vh;
        overflow: auto;

        display: flex;
        flex-direction: column;

        background-color: beige;
    }
</style>