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

export interface Stats {
    id: number
    users_count: number,
    questions_count: number,
    country1: string,
    country2: string
    country3: string,
    country4: string,
    country5: string
}

export enum VOTE_OPTIONS {
    OPTION_1 = 1,
    OPTION_2,
    OPTION_3,
    OPTION_4,
    OPTION_5,
    NONE,
    NOT_CLEAR,
    INADEQUATE
}