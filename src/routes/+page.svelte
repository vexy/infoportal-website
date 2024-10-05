<script lang="ts">
    import { goto } from "$app/navigation";
    import { showDialog } from "$lib/Dialogs.js";
    import { onMount } from "svelte";

    export let data;

    async function handleGoogleLogin(response) {
        const { credential } = response;
        console.debug("Google login response received.");

        // perform signup via google
        const authResponse = await data.supaAuth.signInWithIdToken({
            provider: 'google',
            token: credential
        })
        //TODO: add NONCE

        // check for errors
        if(authResponse.error) {
            console.error("Unable to login user with Google");
            console.error(authResponse.error);
            showDialog(true);
        }

        // display session data
        console.debug("Registered user ID: ", authResponse.data.user?.id);
        console.debug("Redirecting to list");
        // throw redirect(301, '/list')
        goto('/list')
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
    <!-- <div id="g_id_onload"
        data-client_id="618627880154-3v3ojejgm2que1eijc2msq8jrvbcqpsm.apps.googleusercontent.com"
        data-context="use"
        data-ux_mode="popup"
        data-callback="handleGoogleLogin"
        data-nonce=""
        data-auto_select="true"
        data-itp_support="true"
        data-use_fedcm_for_prompt="true">
    </div>

    <div class="g_id_signin"
        data-type="standard"
        data-shape="rectangular"
        data-theme="outline"
        data-text="continue_with"
        data-size="large"
        data-logo_alignment="left">
    </div> -->
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