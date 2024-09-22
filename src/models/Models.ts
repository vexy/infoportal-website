// Represents a Question model of the voting system
// used on /list route
export interface Question {
    id: number,

    title: string,
    voters_count: number[]  //consequence of stupid Supabase !!
    created_at: Date,
}

// Represents extended question model
// used on /question/* routes
export interface QuestionMeta extends Question {
    //... inherited from Question
    //
    question_options: string[],
    scores: string[],
    hasAnswered: boolean,
}