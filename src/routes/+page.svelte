<script lang="ts">
    import { goto } from "$app/navigation";
    import { onMount } from "svelte";
    import { fade } from "svelte/transition";

    let showSubtitle = false;

    async function handleGoogleLogin(response) {
        // check if there's any response
        if(response) {
            // extract the response and initiate
            const { credential } = response;

            const loginResponse = await fetch(`/?auth=${credential}`);
            if(loginResponse.redirected) {
                console.debug("Redirecting to: ", loginResponse.url);
                await goto(loginResponse.url);
                return
            }

            // passthrough to handle any other cases
        }

        // generically just show error (as we haven't received any login response)
        await goto('/auth-error');
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

        showSubtitle = true
    })
</script>

<h1>Инфопортал</h1>
{#if showSubtitle}
    <p transition:fade={{delay: 350, duration: 525 }}>100 људи, 100 ћуди</p>
{/if}
<div id="googleSignInButton"></div>
<!-- <button on:click={handleGoogleLogin}>Test</button> -->

<style>
    h1 {
        text-transform: uppercase;
    }

    p {
        font-style: italic;
    }
</style>