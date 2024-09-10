import type { Question, QuestionOptions } from "$models/Question";

export class QuestionService {
    readonly systemQuestions: Question[]

    constructor() {
        //setup the needs here
        this.systemQuestions = [];
    }

    addQuestion(title: string, options: [QuestionOptions]) {
        const newQuestion: Question = new Question();
        
        newQuestion.id = Math.random();
        newQuestion.title = title
        newQuestion.options = options;
        newQuestion.isAnswered = false;
        newQuestion.dateAdded = new Date();

        //TODO: save to database later
        this.systemQuestions.push(newQuestion);
    }

    async loadAllQuestions(): Promise<Question[]> {
        //TODO: Load from database later
        return Promise.resolve([dummyQuestion, dummyQuestion2, slugQuestion]);
    }

    async loadQuestion(id: number): Promise<Question> {
        //TODO: Query the database with given id
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
    isAnswered: true,

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
    isAnswered: true,

    totalVoters: 21,
    dateAdded: new Date()
}
