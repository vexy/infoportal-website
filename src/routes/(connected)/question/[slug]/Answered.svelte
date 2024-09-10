<script lang="ts">
    import type { QuestionOptions } from "$models/Question";

    import Header from "./(components)/Header.svelte";
    import QuestionStats from "./(components)/QuestionStats.svelte";
    import ShareSurvey from "./(components)/ShareSurvey.svelte";

    export let data;
    const aQuestion = data.slugQuestion;
    
    const options = aQuestion.options;

    const getVoterPercentage = (votersCount: number)=>{
        return(
            votersCount / aQuestion.totalVoters * 100
        )
    }

    options.forEach((option: QuestionOptions) => {
        option.votersPercentage = getVoterPercentage(option.votersCount);
    })
</script>

<main class="flex flex-column">
    <Header survey={aQuestion} forStatistics={true}/>

    <QuestionStats question={aQuestion}/>

    <ShareSurvey />
</main>

<style>
    main{
        width:764px;
        margin: var(--size-5);
        gap:var(--size-5);
    }    
</style>