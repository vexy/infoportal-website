import type { Question, QuestionOptions } from "$models/Question";
import type { SupabaseClient } from "@supabase/supabase-js";

export class QuestionService {
    readonly systemQuestions: Question[]
    private supaInstance: SupabaseClient

    constructor(supabaseInstance: SupabaseClient) {
        //setup the needs here
        this.systemQuestions = [];
        this.supaInstance = supabaseInstance;
    }

    async addQuestion(title: string, options: string[]): Promise<boolean> {
        const { data, error } = await this.supaInstance
            .from('questions')
            .insert({
                title: title,
                question_options: options
            })
            .select()
        
        // check for errors
        if(error) { return Promise.reject(error); }
        
        // then add initial score to scores table
        const questionID = data[0].id;
        const { err } = await this.supaInstance
            .from('scores')
            .insert({
                question_id: questionID,
            });

        if(err) { return Promise.reject(err); }
        //
        return Promise.resolve(true);
    }

    async fetchAllQuestions(): Promise<Question[]> {
        const { data, error } = await this.supaInstance
            .from('questions')
            .select("*")

        // check for errors
        if(error) {
            return Promise.reject(error);
        }

        // parse the data and return
        return Promise.resolve(data);
    }

    async loadQuestion(questionID: number): Promise<Question> {
        return Promise.resolve(slugQuestion);
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
