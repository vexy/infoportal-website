<script lang="ts">
    import type { LayoutData } from './$types';
    
    export let data: LayoutData;
</script>

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