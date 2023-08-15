export interface GetCategories {
    trivia_categories: Array<Categories>;
}
export interface Categories {
    id: number;
    name: string;
}

export interface GetQuestions {
    response_code: number;
    results: Array<Questions>;
}

export interface Questions {
    category: string;
    correct_answer: string;
    difficulty: string;
    incorrect_answers: Array<string>;
    options?: Array<string>;
    question: string;
    selectedAnswer?: string;
    type: string;
    isCorrect?: boolean;
}

export interface Param {
    param?: string;
}