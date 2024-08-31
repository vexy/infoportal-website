<script lang="ts">
    import { goto } from "$app/navigation";
    import { onMount } from "svelte";

    export let data;
    $: _supaAuth = data.supabase.auth;

    async function handleGoogleLogin(response) {
        const { credential } = response;
        console.log("GoogleSignIn success, redirecting to supabase...");

        const { data, error} = await _supaAuth.signInWithOAuth({
            provider: 'google',
            options: {
                redirectTo: 'http://localhost:5173/auth'    //TODO: Read from env
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

<h1>Инфопортал</h1>

<p>100 људи, 100 ћуди</p>

<div id="googleSignInButton"></div>