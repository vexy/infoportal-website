<script lang="ts">
    import '../app.css'
</script>

<main>
    <section>
        <slot />
    </section>

    <!-- ADD LATER -->
    <!-- <learn-more>
        <p>Saznaj vise</p>
        <p>Kod platforme</p>
    </learn-more> -->
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
        background: var(--background-home);
    }

    section {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        flex-grow: 1;
    }

    learn-more {
        display: flex;
        justify-content: space-evenly;
    }
</style>