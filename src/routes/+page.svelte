<script lang="ts">
    import { goto } from "$app/navigation";
    import { showDialog } from "$lib/Dialogs.js";
    import { onMount } from "svelte";

    async function handleGoogleLogin(response) {
        // check if there's any response
        if(response) {
            // extract the response and initiate
            const { credential } = response;
            console.debug("Google login response received, redirecting...");

            const loginResponse = await fetch(`/?auth=${credential}`);
            if(loginResponse.redirected) {
                console.debug("Redirecting to: ", loginResponse.url);
                await goto(loginResponse.url);
                return
            }
        }

        // if this part is reached,
        // just show error dialog
        console.error("Unable to login user with Google");
        showDialog(true);
    }

    onMount(async () => {
        //TODO: push to list if there's active session

        // initialize google client API
        google.accounts.id.initialize({
          client_id: "618627880154-3v3ojejgm2que1eijc2msq8jrvbcqpsm.apps.googleusercontent.com",
          callback: handleGoogleLogin,
          use_fedcm_for_prompt: true
        });

        // render button
        google.accounts.id.renderButton(
          document.getElementById("googleSignInButton"),
            {
                theme: "outline",
                size: "large",                
            }
        );

        // also display the One Tap dialog
        google.accounts.id.prompt();
        console.debug("Main route MOUNTED, Google Client initialized.")
    })
</script>

<dialog id="dialogBox">
    <h2>Не успешна пријава</h2>
    <p>Пријава на Инфопортал није успела.</p>
    <p>Покушајте поново</p>

    <button autofocus on:click={() => showDialog(false)}>Затвори</button>
</dialog>

<main>
    <h1>Инфопортал</h1>

    <p>100 људи, 100 ћуди</p>

    <div id="googleSignInButton"></div>
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

        color: white;
        background: linear-gradient(#2930e6, #8f615d)
    }

    h1 {
        text-transform: uppercase;
    }

    p {
        font-style: italic;
    }
</style>