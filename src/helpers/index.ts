import {ReactNode} from 'react'

export type ContextProps = {
    children:ReactNode
}

export type AnswerObj = {
    question:string,
    userAnswer:string
    check:boolean
    correctAnswer:string
}

export type ContextTypes = {
    TOTAL_QUESTIONS:number
    score:number
    data:any[]
    loading:boolean
    finish:boolean
    num:number
    answerObj:AnswerObj[]
    checkAnswer:(e:any)=>void
    prevQuestion:()=>void
    nextQuestion:()=>void
    restartGame:()=>void
}

export type ApiData = {
    category:string
    correct_answer:string
    difficulty:string
    incorrect_answers:string[]
    question:string
    type:string
}
export type DataState = ApiData & {
    answers:string[]
}

export type CardProps = {
    queryNum:number
    question:string
    answers:string[]
    answerObj:AnswerObj | undefined
    callback:(e:any)=>void
  }
  

export function randomAnswers(arr:any[]) {
    return [...arr].sort(()=>Math.random() - 0.5)
}