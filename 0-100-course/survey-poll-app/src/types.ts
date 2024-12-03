
interface Survey {
    id: number
    description?: string
    title: string
    question: Question[]
}

interface Question {
    id: number
    text: string
    options: Option[]
    surveyId: number
    Survey: Survey
}

interface Option {
    id: number
    text: string
    votes: number
    questionId: number
    Question: Question
}

export {Survey, Question, Option}