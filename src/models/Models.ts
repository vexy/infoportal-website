// Represents base Question model
export interface Question {
    id: number,
    title: string,
    created_at: Date,
}
    
export interface QuestionOverview extends Question {
    voters_count: number[]  //consequence of stupid Supabase !!
}

export interface QuestionMeta extends Question {
    question_options: string[]
}

// Represents extended question model
// Used on /question/* routes
export interface QuestionScores extends QuestionMeta {
    //... inherited from QuestionMeta
    //
    option_scores: number[];
    none: number;
    not_clear: number;
    inadequate: number
    //
    total_voters: number
}