import React, { createContext, useEffect, useState } from 'react'
import { AnswerObj, ApiData, ContextProps, ContextTypes, DataState, randomAnswers } from '../helpers'

const TOTAL_QUESTIONS = 10

const Context = createContext<ContextTypes>({
    TOTAL_QUESTIONS:10,
    score:0,
    data:[],
    loading:false,
    finish:false,
    num:0,
    answerObj:[],
    checkAnswer:()=>console.log('check'),
    prevQuestion:()=>console.log('prev'),
    nextQuestion:()=>console.log('next'),
    restartGame:()=>console.log('restart')
    
})

function ContextProvider({children}:ContextProps) {
    const [score,setScore] = useState(0)
    const [data,setData] = useState<DataState[]>([])
    const [loading,setLoading] = useState(false)
    const [finish,setFinish] = useState(false)
    const [num,setNum] = useState(0)
    const [answerObj,setAnswerObj] = useState<AnswerObj[]>([])

    const checkAnswer = (e:any)=>{
        if (!finish) {
          const userAnswer = e.currentTarget.value
          const check = data[num].correct_answer === userAnswer
          if (check) setScore(prev => prev + 1)
          const answerObject = {
            question:data[num].question,
            userAnswer,
            check,
            correctAnswer:data[num].correct_answer
          }
          setAnswerObj((prev) => [...prev,answerObject])
        }
    }
    const prevQuestion = ()=>{
        setNum(prev => prev - 1)
    }
    const nextQuestion = ()=>{
        const next = num + 1
        if (next === TOTAL_QUESTIONS) {
            setFinish(true)
        }else{
            setNum(next)
        }
    }
    const restartGame = ()=>{
        window.location.reload()
    }

    useEffect(()=>{
        (async function() {
            setLoading(true)
            setFinish(false)
            const response = await fetch(`https://opentdb.com/api.php?amount=10&type=multiple`)
            const res = await response.json()
            const results = res.results.map((result:ApiData)=>({
                ...result,
                answers:randomAnswers([...result.incorrect_answers, result.correct_answer])
            }))
            setData(results)
            setLoading(false)
        })()
    },[])

  return (
    <Context.Provider value={{
        TOTAL_QUESTIONS,
        score,
        data,
        loading,
        finish,
        num,
        checkAnswer,
        answerObj,
        prevQuestion,
        nextQuestion,
        restartGame
    }}>{children}</Context.Provider>
  )
}

export {Context,ContextProvider}