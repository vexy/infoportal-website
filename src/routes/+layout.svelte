<script lang="ts">
    import '$styles/app.css';
    import '$styles/buttons.css'
    import Footer from '$components/Footer.svelte';

    let { children } = $props();
</script>

<main lang="sr-RS">
    {@render children?.()}
</main>

<Footer />
