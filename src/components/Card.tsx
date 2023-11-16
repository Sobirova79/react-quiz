import React from 'react'
import { CardProps } from '../helpers'

function Card({queryNum,question,answers,callback,answerObj}:CardProps) {
  console.log(answerObj);
  return (
    <div className='card'>
      <div className="container">
        <p className="card__question">
          {queryNum}. <span dangerouslySetInnerHTML={{__html:question}} />
        </p>
        <div className="card__answers">
          {answers.map((answer,i)=>(
            <button
              key={i}
              className={
                answerObj?.correctAnswer === answer
                ? 'card__answer correct'
                : answerObj?.userAnswer === answer
                ? 'card__answer uncorrect'
                : 'card__answer'
              }
              onClick={callback}
              value={answer}
              disabled={false}
            >
              <span dangerouslySetInnerHTML={{__html:answer}} />
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Card