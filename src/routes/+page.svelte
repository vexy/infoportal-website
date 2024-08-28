<script lang="ts">
    // import { createClient } from "@supabase/supabase-js";
    import { onMount } from "svelte";

    async function handleGoogleLogin(response) {
        const { credential } = response
        console.log(credential);
    }

    onMount(async () => {
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