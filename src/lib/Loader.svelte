<script lang="ts">
    export let message: string = '';
</script>

<container>
    <div class="loader"></div>
    <span><i>{message}</i></span>
</container>

<style>
    container {
        margin: auto;

        display: flex;
        flex-direction: row;
        /* align-self: center; */
        align-items: center;
        gap: 0.5rem;
        /* justify-content: center; */
    }
    
    i {
        color: #f4ed36;
        text-shadow: #e9e9c5 0px -1px 2px;
    }

    .loader {
        width: 35px;
        aspect-ratio: 1;
        display: grid;
    }

    .loader::before,
    .loader::after {    
        content:"";
        grid-area: 1/1;
        --c:no-repeat radial-gradient(farthest-side,#48d8c2 92%,#0000);
        background: 
            var(--c) 50%  0, 
            var(--c) 50%  100%, 
            var(--c) 100% 50%, 
            var(--c) 0    50%;
        background-size: 9px 9px;
        animation: l12 1s infinite;
    }
    .loader::before {
        margin: 4px;
        filter: hue-rotate(45deg);
        background-size: 8px 8px;
        animation-timing-function: linear
    }

    @keyframes l12 { 
        100%{transform: rotate(.5turn)}
    }
</style>