<script>
    import Header from "$components/Header.svelte";

    let { children } = $props();
</script>

<Header />

<section>
    {@render children?.()}
</section>

<style>
    section {
        width: 100vw;
        height: 100vh;
        
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        overflow-y: auto;
        flex-grow: 1;
        padding-bottom: 10px;

        background: var(--white);
        color: var(--blue-dark);
    }
</style>