import type { Question, QuestionMeta } from "$models/Models";
import type { SupabaseClient } from "@supabase/supabase-js";

export class QuestionService {
    readonly systemQuestions: Question[]
    private supaInstance: SupabaseClient

    private QUESTIONS_TABLE = 'questions'
    private SCORES_TABLE = 'scores'
    private VOTERS_TABLE = 'voters'

    constructor(supabaseInstance: SupabaseClient) {
        //setup the needs here
        this.systemQuestions = [];
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

    async fetchAllQuestions(): Promise<Question[]> {
        const { data, error } = await this.supaInstance
            .from(this.QUESTIONS_TABLE)
            .select(`
                id, title,
                created_at,
                voters_count:voters (
                    question_id
                ).count(),
            `)

        // check for errors
        if(error) {
            return Promise.reject(error);
        }

        // parse the data and return
        return Promise.resolve(data);
    }

    async loadQuestion(questionID: number): Promise<QuestionMeta> {
        const { data, error } = await this.supaInstance
            .from('questions')
            .select()
            .eq('id', questionID);
    }
}

const dummyOption1: QuestionOptions = {
    title: "This is some option 1",
    votersCount: 14,
}

const dummyOption2: QuestionOptions = {
    title: "This is another option 2",
    votersCount: 5,
}
const dummyOption3: QuestionOptions = {
    title: "This is another option 3",
    votersCount: 2,
}

const dummyQuestion: Question = {
    id: 1,

    title: "This is dummy question title",
    options: [dummyOption1, dummyOption2, dummyOption3],
    isAnswered: false,

    totalVoters: 10,
    dateAdded: new Date()
}

const dummyQuestion2: Question = {
    id: 2,
    title: "Dummy question title 2",
    
    options: [dummyOption1, dummyOption2, dummyOption3],
    isAnswered: false,

    totalVoters: 65,
    dateAdded: new Date()
}

const slugQuestion: Question = {
    id: 4,
    title: "This question has been pulled from standalone method",
    
    options: [dummyOption1, dummyOption2, dummyOption3],
    isAnswered: false,

    totalVoters: 11,
    dateAdded: new Date()
}
