// Represents a Question model of the voting system
// used on /list route
export interface Question {
    id: number,
    title: string,
    question_options: string[],
    created_at: Date,
}

export interface QuestionSummary extends Question {
    voters_count: number[]  //consequence of stupid Supabase !!
}

// Represents extended question model
// used on /question/* routes
export interface QuestionScores extends Question {
    //... inherited from Question
    //
    option_scores: number[];
    none: number;
    not_clear: number;
    inadequate: number
}