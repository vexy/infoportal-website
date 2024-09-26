<script lang="ts">
    import { onMount } from "svelte";

    export let data;

    async function handleGoogleLogin(response) {
        const { credential } = response;
        console.debug("GoogleSignIn success, redirecting to supabase");
        console.debug("Redirect url: ", data.redirectURL);

        const authResponse = await data.supaAuth.signInWithOAuth({
            provider: 'google',
            options: {
                redirectTo: data.redirectURL
            }
        })

        // check for errors
        if(authResponse.error) {
            console.error("Unable to login user with Google");
            console.error(authResponse.error);

            //TODO: Show error dialog...
        }
    }

    onMount(async () => {
        // initialize google client API
        google.accounts.id.initialize({
          client_id: "618627880154-3v3ojejgm2que1eijc2msq8jrvbcqpsm.apps.googleusercontent.com",
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