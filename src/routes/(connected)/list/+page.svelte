<script lang="ts">
    import SurveyList from "./SurveyList.svelte";
    import Sort from "./Sort.svelte";

    import type { Question } from "$models/Question";
    import { onMount } from "svelte";

    // list of questions will be returned here
    export let data;

    const questions = data.allQuestions;

    onMount(async () => {
        console.log(data);
    })
</script>

<main class='flex flex-column'>
    <a href='/question/new' id='post-survey' class='nostyle flex flex-cross-center'>
        <svg height='16' width='16' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 41.33 41.33">
            <g>
                <path d="M22.67,18.67V2c0-.53-.21-1.04-.59-1.41-.37-.38-.88-.59-1.41-.59s-1.04.21-1.41.59c-.38.38-.59.88-.59,1.41v16.67H2c-.53,0-1.04.21-1.41.59-.38.37-.59.88-.59,1.41s.21,1.04.59,1.41c.38.38.88.59,1.41.59h16.67v16.67c0,.53.22,1.03.59,1.41.37.37.88.59,1.41.59.53,0,1.04-.21,1.41-.59.38-.37.59-.88.59-1.41v-16.67h16.67c.53,0,1.04-.21,1.41-.59.38-.37.59-.88.59-1.41,0-.53-.22-1.03-.59-1.41-.37-.37-.88-.59-1.41-.59h-16.67Z"/>
            </g>
        </svg>
        <div>
            Post A Survey
        </div>
    </a>

    <Sort />

    <SurveyList {questions}/>
</main>



<style>
    main{
        width: 942px;
        gap: var(--size-4);
        margin: var(--size-5);
    }
    #post-survey{
        padding: calc(var(--size-2) - 2px) var(--size-2);
        border-radius: 256px;
        background-color: var(--primary);
        color: var(--white);
        fill: var(--white);
        gap: var(--size-1);
        width: fit-content;
        font-size: var(--size-3);
    }
</style>
