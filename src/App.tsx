import React, { useContext } from 'react'
import Navbar from './components/Navbar'
import { Context } from './context/context'
import Card from './components/Card'

const App = () => {
  const { TOTAL_QUESTIONS, score, data, loading, finish, num, checkAnswer, answerObj, prevQuestion,nextQuestion, restartGame } = useContext(Context)

  return (
    <>
      <Navbar total={TOTAL_QUESTIONS} score={score} />
      {!loading && !finish && data.length > 0 && (
        <>
          <Card
            queryNum={num + 1}
            question={data[num].question}
            answers={data[num].answers}
            answerObj={answerObj ? answerObj[num] : undefined}
            callback={checkAnswer}
          />
          <div className='quiz container'>
            <div className="quiz__button">
              {num > 0 ? (
                <button className="quiz__prev" onClick={prevQuestion} disabled={false}>Previous</button>
              ) : (
                <button className="quiz__prev" onClick={prevQuestion} disabled={true}>Previous</button>
              )
              }
              {answerObj.length >= num + 1 && num + 1 !== TOTAL_QUESTIONS ? (
                <button className="quiz__next" onClick={nextQuestion} disabled={false}>Next</button>
              ) : (
                <button className="quiz__next" onClick={nextQuestion} disabled={true}>Next</button>
              )
              }
            </div>
            <button className="quiz__restart" onClick={restartGame}>
              Restart
            </button>
          </div>
        </>

      )}
      {loading && (
        <div className='loading'><span className="loader"></span></div>
      )}
    </>
  )
}

export default App
