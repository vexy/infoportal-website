// Represents a Question model of the voting system
export interface Question {
    id: number,

    title: string,
    question_options: string[]

    // isAnswered: boolean,
    // totalVoters: number,

    created_at: Date
}

// Represents a voting option of a question
export interface QuestionOptions {
    title: string
    votersCount: number
}