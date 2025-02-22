<script lang="ts">
    import MobaLogo from "$components/MobaLogo.svelte";
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

<div class="learn-more">
    <a href="/learn-more">Сазнај више...</a>
</div>

<h3>У сарадњи са</h3>
<MobaLogo />

<style>
    h1 {
        text-transform: uppercase;
        margin-bottom: 0;
    }

    h3 {
        padding-top: 1rem;
        margin-bottom: 0.4rem;
    }

    .learn-more {
        margin-top: 2rem;
        padding: 0.7rem;
        border: 1px solid var(--blue-light);
        border-radius: 10px;
    }

    .learn-more > a {
        color: var(--white);
        text-size-adjust: 90%;
        text-decoration: none;
    }

    .learn-more:hover {
        background-color: var(--blue-medium);
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