import type { Question, QuestionMeta, QuestionSummary } from "$models/Models";
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

    async fetchAllQuestions(): Promise<QuestionSummary[]> {
        const { data, error } = await this.supaInstance
            .from(this.QUESTIONS_TABLE)
            .select(`
                id, title, created_at,
                voters_count:voters (
                    question_id
                ).count(),
            `)

        // check for errors
        if(error) {
            return Promise.reject(error);
        }

        console.debug(data);

        // parse the data and return
        return Promise.resolve(data);
    }

    async loadQuestionMeta(questionID: number): Promise<QuestionMeta> {
        const { data, error } = await this.supaInstance
            .from(this.QUESTIONS_TABLE)
            .select()
            .eq('id', questionID)
            .maybeSingle();
        
        // check for errors
        if(error) { return Promise.reject(error) }

        // return the success
        return Promise.resolve(data);
    }

    async hasAnsweredQuestion(questionID: number): Promise<boolean> {
        return Promise.resolve(true);
    }

    async loadQuestionScores(questionID: number): Promise<number[]> {
        const { data, error } = await this.supaInstance
            .from(this.SCORES_TABLE)
            .select('*')
            .eq('question_id', questionID)
            .maybeSingle()
        
        // check for errors
        if(error) { return Promise.reject(error) }

        console.debug("Question scores: ");
        console.debug(data)

        return Promise.resolve(data);
    }
}
