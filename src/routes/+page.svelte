<script lang="ts">
    import { goto } from "$app/navigation";
    import { onMount } from "svelte";

    export let data;
    $: _supaAuth = data.supaAuth;
    $: _redirect = data.redirectURL;

    async function handleGoogleLogin(response) {
        const { credential } = response;
        console.debug("GoogleSignIn success, redirecting to supabase");
        console.debug("Redirect url: ", _redirect);

        const { data, error} = await _supaAuth.signInWithOAuth({
            provider: 'google',
            options: {
                redirectTo: _redirect
            }
        })

        // check for errors
        if(error) {
            console.error("Unable to login user with Google");
            console.error(error);

            //TODO: Show error dialog...
        }
    }

    onMount(async () => {
        // initialize google client API
        google.accounts.id.initialize({
          client_id: "1059954469702-61ae876935rnl1bqalvr239q3gj6skpa.apps.googleusercontent.com",
          callback: handleGoogleLogin
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
    })
</script>

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
        font-size: 2.5rem;
        text-transform: uppercase;
    }

    p {
        font-style: italic;
    }
</style>