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

<script>
    import Header from "$components/Header.svelte";
</script>

<Header />

<section data-sveltekit-preload-data="hover">
    <slot />
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