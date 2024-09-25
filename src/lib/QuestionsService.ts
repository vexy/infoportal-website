import type { SupabaseClient } from "@supabase/supabase-js";
import type { 
    QuestionOverview,
    QuestionMeta,
    QuestionScores,
    VOTE_OPTIONS
} from "$models/Models";

import { createHash } from 'node:crypto'

export class QuestionService {
    private supaInstance: SupabaseClient

    private QUESTIONS_TABLE = 'questions'
    private SCORES_TABLE = 'scores'
    private VOTERS_TABLE = 'voters'

    constructor(supabaseInstance: SupabaseClient) {
        //setup the needs here
        this.supaInstance = supabaseInstance;
    }

    /**
     * Adds a new question to the system
     * @param title Question title
     * @param options Array of strings representing question voting options 
     * @returns `true` in case of success
     */
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
        return Promise.resolve(false);
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

        return Promise.resolve(returnValue);
    }

    async commitQuestionVote(questionID: number, vote_option: VOTE_OPTIONS) {
        await this.getCommitHash(questionID);
    }

    private async getCommitHash(questionID: number): Promise<string> {
        // get the user info
        const { data: { user }, error } = await this.supaInstance.auth.getUser();
        // throw if errors
        if(error) { return Promise.reject(error) }

        // get question basics
        const qResponse = await this.supaInstance
            .from(this.QUESTIONS_TABLE)
            .select('*')
            .eq('id', questionID)
            .maybeSingle()
        // check for fetch errors
        if(qResponse.error) { return Promise.reject(qResponse.error) }
        //
        const qInfo = qResponse.data;

        // create hashers and combine values
        const qHasher = createHash('ripemd-160');
        const finalHasher = createHash('sha-384');

        qHasher.update(qInfo.id.toString());
        qHasher.update(user?.id);
        qHasher.update(qInfo.title);
        for(const anOption in qInfo.question_options) {
            qHasher.update(anOption);
        }
        //
        finalHasher.update(user?.id);
        finalHasher.update(qHasher.digest('hex'));

        const finalOutput = finalHasher.digest('hex');
        return Promise.resolve(finalOutput);
    }
}
