<script lang="ts">
    import { goto } from "$app/navigation";
    import { onMount } from "svelte";
    import { bounceIn } from "svelte/easing";
    import { blur, fade } from "svelte/transition";

    let showSubtitle = false;

    async function handleGoogleLogin(response) {
        // check if there's any response
        if(response) {
            // extract the response and initiate server authentication
            const { credential } = response;

            const loginResponse = await fetch(`/?auth=${credential}`, { method: 'POST' });
            if(loginResponse.redirected) {
                console.debug("Auth success, redirecting to: ", loginResponse.url);
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

        //trigger animation display
        showSubtitle = true
    })
</script>

<img
    src="/favicon.svg"
    alt="infoportal_logo"
    height="80"
    width="80"
/>

<h1>Инфопортал</h1>
{#if showSubtitle}
    <hr transition:fade={{delay: 580, duration: 410 }}/>
    <p transition:blur={{delay: 400, duration: 1125, amount: 35, easing: bounceIn }}>100 људи, 100 ћуди</p>
{/if}
<div id="googleSignInButton"></div>

<h3>У сарадњи са</h3>
<a href="https://www.pokretmoba.com/%d0%b8%d0%bd%d1%84%d0%be%d0%bf%d0%be%d1%80%d1%82%d0%b0%d0%bb/" target="_blank">
    <img 
        class="moba-logo"
        src="logo_moba.png" 
        alt="Logo pokreta Moba" 
    />
</a>

<style>
    h1 {
        text-transform: uppercase;
        margin-bottom: 0;
    }

    h3 {
        padding-top: 2.25rem;
        margin-bottom: 0.4rem;
    }

    .moba-logo {
        height: 90px;
        border-radius: 10px;
    }

    hr {
        border-style: solid;
        border-width: 2px;
        border-color: var(--orange);
        width: 300px;
    }

    p {
        font-style: italic;
        padding-bottom: 2rem;
    }
</style>