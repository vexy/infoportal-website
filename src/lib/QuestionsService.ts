import type { QuestionOverview, QuestionMeta, QuestionScores } from "$models/Models";
import type { SupabaseClient } from "@supabase/supabase-js";

export class QuestionService {
    private supaInstance: SupabaseClient

    private QUESTIONS_TABLE = 'questions'
    private SCORES_TABLE = 'scores'
    private VOTERS_TABLE = 'voters'

    constructor(supabaseInstance: SupabaseClient) {
        //setup the needs here
        this.supaInstance = supabaseInstance;
    }

    async addQuestion(title: string, options: string[]): Promise<boolean> {
        const { data, error } = await this.supaInstance
            .from(this.QUESTIONS_TABLE)
            .insert({
                title: title,
                question_options: options
            })
            .select()
        
        // check for errors
        if(error) { return Promise.reject(error); }
        
        // then add initial score to scores table
        const questionID = data[0].id;
        const response = await this.supaInstance
            .from(this.SCORES_TABLE)
            .insert({
                question_id: questionID,
            });

        // finally, check if score addition resulted in error
        if(response.error) {
            console.error("Adding default scores failed. Manually deleting associated question...")
            
            // NOTE: as of now, Supabase does NOT support SQL transactions
            // in case of failure here, we should delete previous insertion, as we might end up with ghost data
            const deleteResponse = await this.supaInstance
                .from(this.QUESTIONS_TABLE)
                .delete()
                .eq('id', questionID)
            
            if(deleteResponse.error) { return Promise.reject(deleteResponse.error); }

            console.debug("After failing to add scores, associated question was removed successfully...")
            return Promise.reject(response.error);
        }

        // return positive outcome
        return Promise.resolve(true);
    }

    /**
     * Fetches all the questions of the system
     * @returns `QuestionSummary[]` array of question objects
     */
    async fetchAllQuestions(): Promise<QuestionOverview[]> {
        const { data, error } = await this.supaInstance
            .from(this.QUESTIONS_TABLE)
            .select(`
                id, 
                title,
                created_at,
                voters_count:voters (
                    question_id
                )
            `)

        // check for errors
        if(error) {
            return Promise.reject(error);
        }

        return Promise.resolve(data);
    }

    /**
     * Loads and returns `QuestionMeta` for given question ID
     * @param questionID ID of the question
     * @returns `QuestionMeda` object
     */
    async loadQuestionMeta(questionID: number): Promise<QuestionMeta> {
        const { data, error } = await this.supaInstance
            .from(this.QUESTIONS_TABLE)
            .select()
            .eq('id', questionID)
            .returns<QuestionMeta>()
            .maybeSingle();
        
        // check for errors
        if(error) { return Promise.reject(error) }

        // return the success
        return Promise.resolve(data);
    }

    async hasAnsweredQuestion(questionID: number): Promise<boolean> {
        return Promise.resolve(true);
    }

    async loadQuestionScores(questionID: number): Promise<QuestionScores> {
        const { data, error } = await this.supaInstance
            .from(this.QUESTIONS_TABLE)
            .select(`
                *,
                scores(*),
                voters(question_id)
            `)
            .eq('id', questionID)
            .maybeSingle()
        
        // check for errors
        if(error) { return Promise.reject(error) }
        
        // construct return value
        const returnValue: QuestionScores = {
            id: data.id,
            title: data.title,
            question_options: data.question_options,
            created_at: data.created_at,

            option_scores: [
                data.scores.option_1,
                data.scores.option_2,
                data.scores.option_3,
                data.scores.option_4,
                data.scores.option_5,
            ],
            none: data.scores.none,
            not_clear: data.scores.not_clear,
            inadequate: data.scores.inadequate,

            total_voters: data.voters.length
        }

        console.debug("Parsed data :")
        console.debug(returnValue)

        return Promise.resolve(returnValue);
    }
}
