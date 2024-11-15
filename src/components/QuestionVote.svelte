<script lang="ts">
    import { VOTE_OPTIONS, type QuestionMeta } from '$models/Models';
    import { fade } from 'svelte/transition';

    export let form;        // form object
    export let meta: QuestionMeta;

    let showAdditionals = false;
    let optionChoice = -1;  //indicates no selection has been made
</script>

<form method="POST" action="?/commitOption">
    {#each meta.question_options as voteOption, index }
        <div>
            <input
                id="option_{index + 1}"
                name="vote_options"
                type="radio"
                value={VOTE_OPTIONS[index + 1]}
                bind:group={optionChoice}
            />
            <label for="vote_options">{voteOption}</label>
        </div>
    {/each}

    <hr>

    {#if showAdditionals}
        <fieldset transition:fade={{delay: 75, duration: 400}}>
            <legend>Додатни одговори</legend>

            <div>
                <input
                    id="none"
                    name="vote_options"
                    type="radio"
                    value={VOTE_OPTIONS[6]}
                    bind:group={optionChoice}
                />
                <label for="none">Ништа од наведеног</label>
            </div>

            <div>
                <input
                    id="not_clear"
                    type="radio"
                    name="vote_options"
                    value={VOTE_OPTIONS[7]}
                    bind:group={optionChoice}
                />
                <label for="not_clear">Питање није разумљиво</label>
            </div>

            <div>
                <input
                    id="inadequate"
                    type="radio"
                    name="vote_options"
                    value={VOTE_OPTIONS[8]}
                    bind:group={optionChoice}
                />
                <label for="inadequate">Не адекватно питање</label>
            </div>
        </fieldset>
    {:else}
        <button on:click|self|preventDefault={() => {showAdditionals = !showAdditionals}}>Додатни одговори</button>
    {/if}

    <!-- check for errors  -->
    {#if form?.success}
        <span>Дошло је до грешке приликом постављања питања...</span>
    {/if}

    <button type="submit" disabled={optionChoice === -1}>
        Пошаљи одговор
    </button>
</form>

<style>
    form {
        flex-grow: 2;
        align-self: center;
        display: flex;
        flex-direction: column;
        gap: 10px;
        margin-inline: 1.5rem;
    }

    hr {
        border-style: dashed;
        color: var(--orange);
        width: -webkit-fill-available;
    }

    fieldset {
        display: block;
        border: solid;
        border-color: var(--orange);
        font-weight: 200;
    }
</style>