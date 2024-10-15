<script lang="ts">
    import '../app.css'
</script>

<main>
    <slot />
</main>

<style>
    main {
        top: 0;
        left: 0;
        position: absolute;
        width: 100vw;
        height: 100vh;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        /* background: -webkit-linear-gradient(#2930e6, #8f615d) */
        background: #438088;
    }
</style>