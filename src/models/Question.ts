// Represents a Question model of the voting system
export interface Question {
    id: number,

    title: string,
    options: [QuestionOptions]

    isAnswered: boolean,
    totalVoters: number,

    dateAdded: Date
}

// Represents a voting option of a question
export interface QuestionOptions {
    id: number,
    title: string
    votersCount: number
}