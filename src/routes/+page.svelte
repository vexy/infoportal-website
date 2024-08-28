<script lang="ts">
    import { invalidateAll } from "$app/navigation";
    import { onMount } from "svelte";

    export let data;

    $: _supaAuth = data.supabase.auth

    async function handleGoogleLogin(response) {
        const { credential } = response
        console.log(credential);

        const { data, error} = await _supaAuth.signInWithIdToken({
            provider: 'google',
            token: credential
        });

        // check for errors
        if(error) {
            //TODO: Show popup later
        }

        // invalidate the page in any case and let hooks do the rest
        invalidateAll();
    }

    onMount(async () => {
        console.log(data);

        // initialize google client API
        google.accounts.id.initialize({
          client_id: "677261584173-ba71c9183sfe3fs2jatkl5pn0hnshig8.apps.googleusercontent.com",
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